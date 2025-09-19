//const funcoesMatematicas = require('./funcoesMatematicas');
//const calculaidade = require('./calculaidade');

//console.log('Soma:', funcoesMatematicas.somar(5, 3));
//console.log('Subtração:', funcoesMatematicas.subtrair(10, 4));
//console.log('Multiplicação:', funcoesMatematicas.multiplicar(7, 6));
//console.log('Divisão:', funcoesMatematicas.dividir(20, 5));

import{somar,subtrair,multiplicar,dividir} from './funcoes_matematicas';
import * as calculaidade from './calculaidade.js'

console.log('Soma:' + somar(5, 3));
console.log('Subtração:' + subtrair(10, 4));
console.log('Multiplicação:' + multiplicar(7, 6));
console.log('Divisão:' + dividir(20, 5));

console.log('Sua idade é:', calculaidade.idade(2025,1532));
