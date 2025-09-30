//const funcoesMatematicas = require('./funcoesMatematicas');
//const calculaidade = require('./calculaidade');

//console.log('Soma:', funcoesMatematicas.somar(5, 3));
//console.log('Subtração:', funcoesMatematicas.subtrair(10, 4));
//console.log('Multiplicação:', funcoesMatematicas.multiplicar(7, 6));
//console.log('Divisão:', funcoesMatematicas.dividir(20, 5));

import{soma,subtracao,multiplicacao,divisao} from './modulos/funcoes_matematicas.js';
import * as calculaidade from './modulos/calculaidade.js'

console.log('Soma:' + soma(5, 3));
console.log('Subtração:' + subtracao(10, 4));
console.log('Multiplicação:' + multiplicacao(7, 6));
console.log('Divisão:' + divisao(20, 5));

console.log(calculaidade.idade("Karen",2025,1532));
