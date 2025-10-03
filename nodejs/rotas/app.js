//Importa o módulo http nativo do Node.js
const http = require('http');

const PORT=3000;

//Cria o servidor
const server = http.createServer((request, response) =>{
    const url= request.url;
    const method = request.method;

    //define cabeçalho como resposta html
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    //roteamento básico
    if(url === '/') {
        response.statusCode = 200; //OK
        response.end('<h1>Página Inicial</h1>');

    } else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200; //OK
        response.end('<h1>Sobre nós</h1> <p>Esta é uma aplicação de exemplo com Node.js puro</p>');
    
    } else if(url === '/contato') {
        response.statusCode =200; //OK
        response.end('<h1>Fale conosco</h1>');

    } else if(url === '/fotos') {
        response.statusCode =200; //OK
        response.end('<h1>Aqui estão as fotos do site</h1>');
        
    }else {
        //se nenhuma rota corresponder
        response.statusCode = 404; //Not Found
        response.end('<h1>Página não encontrada</h1>');
    }
});

//INICIA O SERVIDOR PARA OUVIR NA PORTA DEFINIDA
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});