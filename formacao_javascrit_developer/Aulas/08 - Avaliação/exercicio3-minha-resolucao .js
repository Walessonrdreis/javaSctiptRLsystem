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

const { getArrayLength, gets, print, getArray} = require('./funcoes-auxiliares3');


const salarioBruto = gets();
const adicionalSalario = gets();

function imprimirSalario(salarioBruto, adicional){

    
    if(salarioBruto >= 0 && salarioBruto <= 1000){
        const desconto = salarioBruto * (5/100);
        const salario = (salarioBruto - desconto) + adicional;
        return `Você Recebeu R$ ${salario},00 de Salario `;

     }else if(salarioBruto >= 1100.01 && salarioBruto <= 2500.00){
        const desconto = salarioBruto * (10/100);
            const salario = (salarioBruto - desconto) + adicional;
            return `Você Recebeu R$ ${salario},00 de Salario `;
     }else{
        if(salarioBruto > 2500){
            const desconto = salarioBruto * (15/100);
            const salario = (salarioBruto - desconto) + adicional;
            return `Você Recebeu R$ ${salario},00 de Salario `;

        }
     }
    
}
print(imprimirSalario(salarioBruto,adicionalSalario))