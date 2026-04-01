# Admin Service v4
import os
import json
import hmac
import hashlib
import base64
import time
from http.server import HTTPServer, BaseHTTPRequestHandler
import psycopg2
from psycopg2.extras import RealDictCursor
from urllib.parse import urlparse, parse_qs
import re

DATABASE_URL = os.environ.get("DATABASE_URL", "")
SCHEMA = os.environ.get("MAIN_DB_SCHEMA", "public")
JWT_SECRET = os.environ.get("JWT_SECRET", "bum-pizza-secret-key-2024")
PORT = int(os.environ.get("PORT", 3000))


def get_db():
    return psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)


def b64url_decode(s: str) -> bytes:
    pad = 4 - len(s) % 4
    return base64.urlsafe_b64decode(s + "=" * (pad % 4))


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


def cors_headers():
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json",
    }


class Handler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        print(format % args)

    def send_json(self, status, data):
        body = json.dumps(data, ensure_ascii=False, default=str).encode("utf-8")
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

    def authenticate(self):
        auth = self.headers.get("Authorization", "")
        if not auth.startswith("Bearer "):
            return None
        token = auth[7:]
        try:
            return jwt_verify(token)
        except Exception:
            return None

    def get_body(self):
        length = int(self.headers.get("Content-Length", 0))
        return json.loads(self.rfile.read(length)) if length else {}

    def do_GET(self):
        user = self.authenticate()
        if not user:
            return self.send_json(401, {"error": "Не авторизован"})

        parsed = urlparse(self.path)
        path = parsed.path
        query = parse_qs(parsed.query)

        try:
            conn = get_db()
            cur = conn.cursor()

            if path.endswith("/stats"):
                cur.execute(f"SELECT COUNT(*) as total, COALESCE(SUM(total_price), 0) as revenue FROM \"{SCHEMA}\".orders WHERE status != 'cancelled'")
                orders_data = dict(cur.fetchone())
                cur.execute(f"SELECT COUNT(*) as count FROM \"{SCHEMA}\".orders WHERE status = 'new'")
                new_orders = dict(cur.fetchone())
                cur.execute(f"SELECT COUNT(*) as count FROM \"{SCHEMA}\".menu_items WHERE is_active = TRUE")
                menu_data = dict(cur.fetchone())
                conn.close()
                return self.send_json(200, {"orders": orders_data, "newOrders": new_orders, "menu": menu_data})

            elif path.endswith("/categories"):
                cur.execute(f'SELECT * FROM "{SCHEMA}".categories ORDER BY sort_order, id')
                rows = [dict(r) for r in cur.fetchall()]
                conn.close()
                return self.send_json(200, rows)

            elif path.endswith("/menu"):
                category_id = query.get("category_id", [None])[0]
                if category_id:
                    cur.execute(
                        f'SELECT m.*, c.name as category_name FROM "{SCHEMA}".menu_items m LEFT JOIN "{SCHEMA}".categories c ON m.category_id = c.id WHERE m.category_id = %s ORDER BY m.sort_order, m.id',
                        (category_id,)
                    )
                else:
                    cur.execute(f'SELECT m.*, c.name as category_name FROM "{SCHEMA}".menu_items m LEFT JOIN "{SCHEMA}".categories c ON m.category_id = c.id ORDER BY m.sort_order, m.id')
                rows = [dict(r) for r in cur.fetchall()]
                conn.close()
                return self.send_json(200, rows)

            elif path.endswith("/orders"):
                status = query.get("status", [None])[0]
                if status:
                    cur.execute(f'SELECT * FROM "{SCHEMA}".orders WHERE status = %s ORDER BY created_at DESC', (status,))
                else:
                    cur.execute(f'SELECT * FROM "{SCHEMA}".orders ORDER BY created_at DESC')
                rows = [dict(r) for r in cur.fetchall()]
                conn.close()
                return self.send_json(200, rows)

            conn.close()
            self.send_json(404, {"error": "Not found"})
        except Exception as e:
            print(f"GET error: {e}")
            self.send_json(500, {"error": "Ошибка сервера"})

    def do_POST(self):
        user = self.authenticate()
        if not user:
            return self.send_json(401, {"error": "Не авторизован"})

        path = urlparse(self.path).path
        body = self.get_body()

        try:
            conn = get_db()
            cur = conn.cursor()

            if path.endswith("/categories"):
                cur.execute(
                    f'INSERT INTO "{SCHEMA}".categories (name, slug, sort_order, is_active) VALUES (%s, %s, %s, %s) RETURNING *',
                    (body.get("name"), body.get("slug"), body.get("sort_order", 0), body.get("is_active", True))
                )
                conn.commit()
                row = dict(cur.fetchone())
                conn.close()
                return self.send_json(201, row)

            elif path.endswith("/menu"):
                cur.execute(
                    f'''INSERT INTO "{SCHEMA}".menu_items (category_id, name, description, price, weight, image_url, is_new, is_hot, is_active, sort_order)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING *''',
                    (body.get("category_id"), body.get("name"), body.get("description"), body.get("price"),
                     body.get("weight"), body.get("image_url"), body.get("is_new", False), body.get("is_hot", False),
                     body.get("is_active", True), body.get("sort_order", 0))
                )
                conn.commit()
                row = dict(cur.fetchone())
                conn.close()
                return self.send_json(201, row)

            conn.close()
            self.send_json(404, {"error": "Not found"})
        except Exception as e:
            print(f"POST error: {e}")
            self.send_json(500, {"error": "Ошибка сервера"})

    def do_PUT(self):
        user = self.authenticate()
        if not user:
            return self.send_json(401, {"error": "Не авторизован"})

        path = urlparse(self.path).path
        body = self.get_body()

        try:
            conn = get_db()
            cur = conn.cursor()

            cat_match = re.match(r".*/categories/(\d+)$", path)
            menu_match = re.match(r".*/menu/(\d+)$", path)
            order_status_match = re.match(r".*/orders/(\d+)/status$", path)

            if cat_match:
                cid = cat_match.group(1)
                cur.execute(
                    f'UPDATE "{SCHEMA}".categories SET name=%s, slug=%s, sort_order=%s, is_active=%s WHERE id=%s RETURNING *',
                    (body.get("name"), body.get("slug"), body.get("sort_order"), body.get("is_active"), cid)
                )
                conn.commit()
                row = dict(cur.fetchone())
                conn.close()
                return self.send_json(200, row)

            elif menu_match:
                mid = menu_match.group(1)
                cur.execute(
                    f'''UPDATE "{SCHEMA}".menu_items SET category_id=%s, name=%s, description=%s, price=%s, weight=%s,
                    image_url=%s, is_new=%s, is_hot=%s, is_active=%s, sort_order=%s, updated_at=NOW()
                    WHERE id=%s RETURNING *''',
                    (body.get("category_id"), body.get("name"), body.get("description"), body.get("price"),
                     body.get("weight"), body.get("image_url"), body.get("is_new"), body.get("is_hot"),
                     body.get("is_active"), body.get("sort_order"), mid)
                )
                conn.commit()
                row = dict(cur.fetchone())
                conn.close()
                return self.send_json(200, row)

            elif order_status_match:
                oid = order_status_match.group(1)
                cur.execute(
                    f'UPDATE "{SCHEMA}".orders SET status=%s, updated_at=NOW() WHERE id=%s RETURNING *',
                    (body.get("status"), oid)
                )
                conn.commit()
                row = dict(cur.fetchone())
                conn.close()
                return self.send_json(200, row)

            conn.close()
            self.send_json(404, {"error": "Not found"})
        except Exception as e:
            print(f"PUT error: {e}")
            self.send_json(500, {"error": "Ошибка сервера"})

    def do_DELETE(self):
        user = self.authenticate()
        if not user:
            return self.send_json(401, {"error": "Не авторизован"})

        path = urlparse(self.path).path

        try:
            conn = get_db()
            cur = conn.cursor()

            cat_match = re.match(r".*/categories/(\d+)$", path)
            menu_match = re.match(r".*/menu/(\d+)$", path)

            if cat_match:
                cid = cat_match.group(1)
                cur.execute(f'DELETE FROM "{SCHEMA}".categories WHERE id=%s', (cid,))
                conn.commit()
                conn.close()
                return self.send_json(200, {"success": True})

            elif menu_match:
                mid = menu_match.group(1)
                cur.execute(f'DELETE FROM "{SCHEMA}".menu_items WHERE id=%s', (mid,))
                conn.commit()
                conn.close()
                return self.send_json(200, {"success": True})

            conn.close()
            self.send_json(404, {"error": "Not found"})
        except Exception as e:
            print(f"DELETE error: {e}")
            self.send_json(500, {"error": "Ошибка сервера"})


if __name__ == "__main__":
    server = HTTPServer(("0.0.0.0", PORT), Handler)
    print(f"Admin service running on port {PORT}")
    server.serve_forever()