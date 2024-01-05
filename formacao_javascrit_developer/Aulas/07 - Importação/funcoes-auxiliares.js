
const entradas = [5,50,10,98,23,50];
let i =0;

function gets(){
    const valor = entradas[i];
    i++
    return valor;
};

function getArrayLength(){
    const arr  = entradas.length;
    return arr;

}


function print(texto){
    console.log(texto);
};

module.exports = {gets, print,getArrayLength};