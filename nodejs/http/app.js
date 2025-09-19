// Importa o módulo 'http' do Node.js
//let http = require('http');
import http from 'http'

// Cria um servidor HTTP que responde com "Hello World!" para todas as requisições
// O método createServer recebe uma função de callback com os objetos de requisição (req) e resposta (res)
http.createServer(function (req, res) {
  // Define o cabeçalho da resposta com status 200 (OK) e tipo de conteúdo 'text/plain'
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Envia a resposta "Hello World!" e finaliza a resposta  
  res.end('Hello World!');
  // O servidor escuta na porta 8080
}).listen(8080);

console.log('Servidor rodando em http://localhost:8080/');