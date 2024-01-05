/*const number = 0

const isNumberDivideFortwo= (number % 2) === 0;
if(number === 0){
    console.log('invalid number')

}else if(number === 5){console.log('invalid number')

}else if(isNumberDivideFortwo){
    console.log('yes');
} else {
    console.log('No')
}*/

/*
 * Faça um programa para calcular o valor de uma viagem.

*Você terá 5 variáveis. Sendo elas:

*1 - Preço do etanol;
*2 - Preço da Gasolina;
*3 - O tipo de combustível;
*4 - Gasto médio de combustível do carro por KM;
*5 - Distância em KM da Viagem;

* Imprima no console o valor que será gasto para realizar está viagem.
 */

const precoEtanol = 4.30;
const precoGasolina = 5.30;
const isTipoCombustivel = 'Gasolina';
const litrosPorKM = 12;
const distancia_em_km = 1200;
const litrosConsumidos = distancia_em_km / litrosPorKM;

if (isTipoCombustivel === 'Etanol') {
    const valorViagem = litrosConsumidos * precoEtanol;
    console.log('Usando', isTipoCombustivel, ' O valor gasto em combustível  na viagem foi R$', valorViagem.toFixed(2));

} else if (isTipoCombustivel === 'Gasolina') {
    const valorViagem = litrosConsumidos * precoGasolina;

    console.log('Usando ', isTipoCombustivel, 'O valor da viagem foi R$', valorViagem.toFixed(2));

} else {
    console.log('Não foi possível realizar a viagem;')
}
