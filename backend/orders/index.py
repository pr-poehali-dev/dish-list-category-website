# Orders Service v4
import os
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
import psycopg2
from psycopg2.extras import RealDictCursor

DATABASE_URL = os.environ.get("DATABASE_URL", "")
SCHEMA = os.environ.get("MAIN_DB_SCHEMA", "public")
PORT = int(os.environ.get("PORT", 3000))


def get_db():
    return psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)


def cors_headers():
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
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

    def do_POST(self):
        length = int(self.headers.get("Content-Length", 0))
        body = json.loads(self.rfile.read(length)) if length else {}

        customer_name = body.get("customer_name", "").strip()
        customer_phone = body.get("customer_phone", "").strip()
        items = body.get("items", [])

        if not customer_name or not customer_phone or not items:
            return self.send_json(400, {"error": "Заполните обязательные поля"})

        try:
            conn = get_db()
            cur = conn.cursor()
            cur.execute(
                f'''INSERT INTO "{SCHEMA}".orders (customer_name, customer_phone, customer_address, comment, items, total_price, status)
                VALUES (%s, %s, %s, %s, %s, %s, 'new') RETURNING id, created_at''',
                (
                    customer_name,
                    customer_phone,
                    body.get("customer_address") or None,
                    body.get("comment") or None,
                    json.dumps(items, ensure_ascii=False),
                    body.get("total_price", 0),
                )
            )
            conn.commit()
            row = dict(cur.fetchone())
            conn.close()
            self.send_json(201, {"success": True, "order": row})
        except Exception as e:
            print(f"Orders error: {e}")
            self.send_json(500, {"error": "Внутренняя ошибка сервера"})


if __name__ == "__main__":
    server = HTTPServer(("0.0.0.0", PORT), Handler)
    print(f"Orders service running on port {PORT}")
    server.serve_forever()