//modo normal
//const funcoes = require('./funcoes-auxiliares');
//modo object Destructuring
const {gets, print, getArrayLength } = require('./funcoes-auxiliares');

/* forma mais longa 
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
    
}

let maiorNumero = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    
    if(numeroSorteado > maiorNumero){
        maiorNumero = numeroSorteado;
       
    }
    
}*/
// curta
const tamanhoArray = getArrayLength();

let maiorValorEncontrado = 0;

for (let i = 0; i < tamanhoArray; i++) {
    const numeroSorteado = gets();

    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
  
    print(numeroSorteado); 
}
print(`O maior número entre os números sorteados é ${maiorValorEncontrado}`);
