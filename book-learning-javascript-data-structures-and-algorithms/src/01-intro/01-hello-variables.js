let print = document.getElementById('print');
console.log(print);
const price = 1.5;//number
const publisher = 'packt'//string
const javaScriptBook = true;//boolean
const nullVar = null; // null
let und; // undefined

print.innerHTML ='Hello, Variables' +'<br>' + 'price: ' + price + '<br>' + 'publisher: ' + publisher + '<br>' + 'javaScriptBook: ' + javaScriptBook + '<br>' + 'nullVar: ' + nullVar + '<br>' + 'und: ' + und;

function printOut(value){
    console.log(value);
    print = document.getElementById('print-1');
    print.innerHTML = value + '<br>';
    
}
printOut(price);

const book = {
    title: 'Learning JavaScript Data Structures and Algorithms',
}
let book2 = {
    title: 'Mastering JavaScript',
}
book2 ={
    title: 'Mastering JavaScript ES6',
} 

console.log('book title: ' + book.title);
console.log('book title: ' + book2.title);

const title = Symbol('title');
const book3 = {
    [title]: 'Learning JavaScript Data Structures and Algorithms',
}

console.log('Title book3: '+book3[title]);

//Conditionally
let number = 0;
if(number === 1){
    console.log('number is equal to 1');
}else{
    console.log('Number is not equal to 1, the of number is: '+number);
}

// ternary operator for if else
if(number === 1){
    number--;
    console.log('usando if...else Number: '+number)
}else{
    number++
    console.log('number usando if...else number é : '+ number)
}
//if output is console.log is for variable in number 
numberTernary = number === 1 ? number-- : number++;
console.log('Usando operador ternário: '+ numberTernary);

let month = 5;
if(month === 1){
    console.log('janeiro');
}else if(month === 2){
    console.log('fevereiro');

}else if(month === 3){
    console.log('março');
    
}else {
    console.log('Month is not January, February or March');
}

switch(month){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, Fefruary or March');    
}
console.log('switch result: '+ month);

//Loop for
for(let i = 0; i < 10; i++){
    console.log('loop for ex: '+ i)
}
//loop while
let i = 0;
while(i < 10){
    console.log('loop while ex: '+ i);
    i++;
}
//do...while
i = 0;
do{
    console.log('loop do...while ex: '+ i);
    i++;
}while (i < 10);

// for...in
const obj = {a: 1, b: 2, c: 3};
for (const key in obj){
    console.log('loop for...in ex: '+ key +' = '+ obj[key]);
}

// for...of
const arr = [1, 2, 3];
for (const value of arr){
    console.log('loop for...of ex: '+ value);
}

function sayHello(name){
    console.log('Hello, '+ name);
}
sayHello('JavaScript');

function sum(num1, num2){
    return num1 + num2;
}

const result = sum(1,2);
console.log('resultado da função sum: '+ result);

//Função com valor default
function sumDefault(num1 = 1, num2 = 2){
    return  num1 + num2;
}
console.log('Resultado da função sumDefault ' + sumDefault(1))
console.log('Resultado da função sumDefault ' + sumDefault(1,3));

//Escopo de variáveis
let movie = 'Lord of the Rings';
function starWarsFan(){
    const movie = 'Star Wars';
    return movie;
}

function marvelFan(){
    movie = 'The Avengers';
    return movie;
}

console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);

// Escopo de variáveis outro exemplo
function blizzardFan(){
    const isFan = true;
    let phrase = 'Warcraft';
    console.log('Before if: ' + phrase);
    if (isFan){
        let phrase = 'initial text';
        phrase = 'For the Horde!';
        console.log('Inside if: ' + phrase);
    }
    phrase = 'For the Alliance!';
    console.log('After if: '+ phrase);

}
// função para mostrar diretamente na div
function blizzardFan(){
    const isFan  = true;
    let phrase = 'Warcraft';
    let output = [];// Array para armazenar as frases

    output.push('Before if: ' + phrase);

    if(isFan){
        let phrase = 'initial text'; //variavel local
        phrase = 'For the Horde!';
        output.push('Inside if: ' + phrase);
    }
    phrase = 'For the Alliance!';//variavel global
    output.push('After if: '+ phrase);
    return output; //retorna o array com a frases

}
const resultados = blizzardFan();
document.getElementById('print-3').innerHTML = resultados.join('<br>');
