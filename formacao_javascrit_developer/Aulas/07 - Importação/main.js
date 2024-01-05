//modo normal
//const funcoes = require('./funcoes-auxiliares');
//modo object Destructuring
const {gets, print } = require('./funcoes-auxiliares');

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
const numerosSorteados = gets();
let maiorValorEncontrado = 0;
for (let i = 0; i < numerosSorteados; i++) {
    const numeroSorteado = gets();

    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
  
    
}
print(maiorValorEncontrado);
