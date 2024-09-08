//const nome = 'Wálesson Rocha dos Reis'

//for (let i = 0; i < nome.length; i++) { //Dentro do for as duas primeiras ações acontecem retornado o console.. o que está dentro do {} e volta para o i++, que vai adicionar um numero ao primeiro i, passando para a proximalogica que verifica se o numero de i é menor que o tamanho do array, se for, pegar o valor imprime e vai para o i++, até o valor do primeiro i ser maior que o tamanho do array.
   
//    console.log(nome[i]);
//}
const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);
let soma = 0;


for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    


}
const media = soma / notas.length;
console.log(media.toFixed(2));
