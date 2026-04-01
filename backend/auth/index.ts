// Auth Service v6 - minimal test
import { createServer } from "http";

const PORT = parseInt(process.env.PORT || "3000");

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: true }));
});

server.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});