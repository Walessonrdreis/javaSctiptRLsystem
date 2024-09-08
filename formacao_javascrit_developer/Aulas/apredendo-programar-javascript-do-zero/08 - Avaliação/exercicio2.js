/*
    2- Faça um programa que receba N quantidade de números e seus respectivos valores.
    Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1
*/

const { gets, print } = require('./funcoes-auxiliares2');

let maiorNumeroPar = 0;
let menorNumeroImpar = 0;
const n = gets();




for (let i = 0; i < n; i++) {
    const numero = gets();
    print(numero);

    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }

    } else {
        if (numero === 0) {
            menorNumeroImpar = numero;
        } else if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero;

        }
    }
}

print(`O Maior número par é ${maiorNumeroPar}`)
print(`O Menor número impar: ${menorNumeroImpar}`);
