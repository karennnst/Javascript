function soma(a,b){
    return a+b;
}

function subtracao(a,b){
return a-b;
}

function multiplicacao(a,b){
    return a*b;
}

function divisao(a,b){
    if (b === 0) {
        throw new Error("Erro: divisão por zero.");
    }
    return a / b;
}

function idade(ano, anonasc){
    return ano - anonasc;
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    idade
};