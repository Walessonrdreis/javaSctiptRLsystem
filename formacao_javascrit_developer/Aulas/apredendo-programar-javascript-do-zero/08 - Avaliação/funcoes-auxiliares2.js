
const numeros = [5,3,4,1,10,8];


let i = 0;

function gets() {
    const value = numeros[i];
    i++;
    return value;
}

function print(texto){
    console.log(texto)
}













module.exports = {gets,print};