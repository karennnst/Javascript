// const calculadora = require('./calculadora.js');
import { somar, subtrair, multiplicar, dividir} from './calculadora.js';

const soma = somar(10, 7);
const subtrair = subtrair(10, 7);
const multiplicar = multiplicar(10, 7);
const dividir = dividir(10, 2);

//console.log(`Soma: $(soma)`); essa é maneira antiga de fazer
console.log('Soma:', soma);
console.log('Subtração:', subtrair);
console.log('Multiplicação:', multiplicar);
console.log('Divisão:', dividir);