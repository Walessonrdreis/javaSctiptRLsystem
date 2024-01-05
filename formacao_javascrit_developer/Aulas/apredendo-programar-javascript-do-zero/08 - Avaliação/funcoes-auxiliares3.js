
const salarioEAdicional = [3000,250];
let i = 0;
function gets(){
    const value = salarioEAdicional[i];
    i++;
    return value;

}
function getArrayLength(){
    const arr = salarioEAdicional.length;
    return arr;
}
function getArray(){
    return salarioEAdicional;
}

function print(texto){
    console.log(texto);

}








module.exports = {getArrayLength,gets,print,getArray}