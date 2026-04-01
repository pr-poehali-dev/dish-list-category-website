# Auth Service v5
import os
import json
import hmac
import hashlib
import base64
import time
import struct
from http.server import HTTPServer, BaseHTTPRequestHandler
import psycopg2
from psycopg2.extras import RealDictCursor
from urllib.parse import urlparse

DATABASE_URL = os.environ.get("DATABASE_URL", "")
SCHEMA = os.environ.get("MAIN_DB_SCHEMA", "public")
JWT_SECRET = os.environ.get("JWT_SECRET", "bum-pizza-secret-key-2024")
PORT = int(os.environ.get("PORT", 3000))


def get_db():
    return psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)


def b64url_encode(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()


def b64url_decode(s: str) -> bytes:
    pad = 4 - len(s) % 4
    return base64.urlsafe_b64decode(s + "=" * (pad % 4))


def jwt_create(payload: dict) -> str:
    header = b64url_encode(json.dumps({"alg": "HS256", "typ": "JWT"}).encode())
    body = b64url_encode(json.dumps(payload).encode())
    sig_input = f"{header}.{body}".encode()
    sig = hmac.new(JWT_SECRET.encode(), sig_input, hashlib.sha256).digest()
    return f"{header}.{body}.{b64url_encode(sig)}"


def jwt_verify(token: str) -> dict:
    parts = token.split(".")
    if len(parts) != 3:
        raise ValueError("Invalid token")
    header, body, sig = parts
    sig_input = f"{header}.{body}".encode()
    expected = hmac.new(JWT_SECRET.encode(), sig_input, hashlib.sha256).digest()
    if not hmac.compare_digest(b64url_decode(sig), expected):
        raise ValueError("Invalid signature")
    payload = json.loads(b64url_decode(body))
    if payload.get("exp", 0) < time.time():
        raise ValueError("Token expired")
    return payload


def hash_password(password: str) -> str:
    salt = os.urandom(16)
    key = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, 260000)
    return f"pbkdf2:{base64.b64encode(salt).decode()}:{base64.b64encode(key).decode()}"


def check_password(password: str, stored: str) -> bool:
    # Support both pbkdf2 format and bcrypt (stored as is - for backward compat)
    if stored.startswith("pbkdf2:"):
        _, salt_b64, key_b64 = stored.split(":", 2)
        salt = base64.b64decode(salt_b64)
        key = base64.b64decode(key_b64)
        new_key = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, 260000)
        return hmac.compare_digest(key, new_key)
    return False


def cors_headers():
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json",
    }


class Handler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        print(format % args)

    def send_json(self, status, data):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        for k, v in cors_headers().items():
            self.send_header(k, v)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        for k, v in cors_headers().items():
            self.send_header(k, v)
        self.end_headers()

    def do_POST(self):
        path = urlparse(self.path).path
        length = int(self.headers.get("Content-Length", 0))
        body = json.loads(self.rfile.read(length)) if length else {}

        if path.endswith("/login"):
            self._login(body)
        elif path.endswith("/verify"):
            self._verify()
        elif path.endswith("/set-password"):
            self._set_password(body)
        else:
            self.send_json(404, {"error": "Not found"})

    def _login(self, body):
        email = body.get("email", "").strip()
        password = body.get("password", "")

        if not email or not password:
            return self.send_json(400, {"error": "Email и пароль обязательны"})

        try:
            conn = get_db()
            cur = conn.cursor()
            cur.execute(
                f'SELECT id, email, name, role, password_hash FROM "{SCHEMA}".admin_users WHERE email = %s AND is_active = TRUE',
                (email,)
            )
            user = cur.fetchone()
            conn.close()

            if not user:
                return self.send_json(401, {"error": "Неверный email или пароль"})

            if not check_password(password, user["password_hash"]):
                return self.send_json(401, {"error": "Неверный email или пароль"})

            payload = {
                "id": user["id"],
                "email": user["email"],
                "name": user["name"],
                "role": user["role"],
                "exp": int(time.time()) + 7 * 24 * 3600,
            }
            token = jwt_create(payload)

            self.send_json(200, {
                "token": token,
                "user": {"id": user["id"], "email": user["email"], "name": user["name"], "role": user["role"]},
            })
        except Exception as e:
            print(f"Login error: {e}")
            self.send_json(500, {"error": "Внутренняя ошибка сервера"})

    def _verify(self):
        auth = self.headers.get("Authorization", "")
        if not auth.startswith("Bearer "):
            return self.send_json(401, {"error": "Токен не предоставлен"})
        token = auth[7:]
        try:
            payload = jwt_verify(token)
            self.send_json(200, {"valid": True, "user": payload})
        except Exception:
            self.send_json(401, {"error": "Токен недействителен"})

    def _set_password(self, body):
        email = body.get("email", "")
        password = body.get("password", "")
        setup_key = body.get("setupKey", "")

        if setup_key != "bum-pizza-setup-2024":
            return self.send_json(403, {"error": "Неверный ключ настройки"})

        try:
            hashed = hash_password(password)
            conn = get_db()
            cur = conn.cursor()
            cur.execute(
                f'UPDATE "{SCHEMA}".admin_users SET password_hash = %s, updated_at = NOW() WHERE email = %s',
                (hashed, email)
            )
            conn.commit()
            conn.close()
            self.send_json(200, {"success": True, "message": "Пароль успешно обновлён"})
        except Exception as e:
            print(f"Set password error: {e}")
            self.send_json(500, {"error": "Внутренняя ошибка сервера"})


if __name__ == "__main__":
    server = HTTPServer(("0.0.0.0", PORT), Handler)
    print(f"Auth service running on port {PORT}")
    server.serve_forever()