/*export function idade(ano, anonasc){
    return ano - anonasc;
} */

    export function idade(nome,anoatual, anonasc){
        idade=anoatual - anonasc;
        return `Olá ${nome}, sua idade é ${idade} anos.`;
    }