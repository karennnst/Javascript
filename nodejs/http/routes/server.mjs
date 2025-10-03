import http from "http";
import url from "url";

// Importando "páginas"
import Home from "./home.mjs";
import Login from "./login.mjs";
import About from "./about.mjs";

const routes = {
  "/": Home,
  "/login": Login,
  "/about": About,
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  if (routes[path]) {
    res.end(routes[path]());
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404 - Página não encontrada");
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
