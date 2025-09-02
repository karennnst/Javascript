// Importa o módulo 'fs' (file system) do Node.js
const fs = require('fs');

//essa ai é uma função callback, faz um retorno, escrita com uma arrow function. lê o arquivo de forma assíncrona
fs.readFile('example.txt', 'utf8', (err, data) => {
    // caso ocorra um erro na leitura do arquivo, ele exibe o erro no console
    if (err) {
        //retorna o erro no console
        console.error('Erro ao ler o arquivo: ', err);
        //e volta para não executar o restante do código
        return;
    }
    //se não houver erro, ele exibe o conteúdo do arquivo no console
    console.log('Conteúdos do arquivo: ', data);
});
//mensagem simples no console
console.log('Este é um exemplo simples de app js');