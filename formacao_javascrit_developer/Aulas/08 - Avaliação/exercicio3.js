/*
    3- Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário salário a ser transferido é calculado da seguinte maneira: 
   
   valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as alíquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a	R$ 2500.00 = 10.00%
    Maior que 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00


*/

const { getArrayLength, gets, print, getArray } = require('./funcoes-auxiliares3');


const valorSalario = gets();
const valorBeneficios = gets();

function calcularPorcentagem(salario, porcentagem) {
    const valor = salario * (porcentagem / 100);
    return valor;

}

function pegarAliquota(salario) {
    if (valorSalario >= 0 && valorSalario <= 1000) {

        return 5
    } else if (valorSalario >= 1100.01 && valorSalario <= 2500.00) {
        return 10;

    } else {
        return 15;

    }
    
    
    
    
}
    const aliquotaImposto = pegarAliquota(valorSalario)
    const valorImposto = calcularPorcentagem(valorSalario,aliquotaImposto);

    const valorTransferir =(valorSalario - valorImposto ) + valorBeneficios;

print('valor do salario depositado foi R$ '+valorTransferir +',00')

