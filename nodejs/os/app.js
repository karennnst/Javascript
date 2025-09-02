// Importa o módulo 'os' do Node.js
const os = require('os');

// Exibe informações sobre o sistema operacional    
console.log('Sistema operacional:', os.type());

// Arquitetura do sistema
 console.log('Arquitetura:', os.arch());

// Quantidade de CPUs
 console.log('CPUs:', os.cpus().length);

// Memória total em bytes
 console.log('Memória total (bytes):', os.totalmem());

// Memória livre em bytes
 console.log('Memória livre (bytes):', os.freemem());