//2) Crie uma classe para representar pessoas.
//Para cada pessoa teremos os atributos nome, peso e altura.
//As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
//Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
//do seu IMC;

//Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

//IMC em adultos Condição:
//- Abaixo de 18.5 Abaixo do peso;
//- Entre 18.5 e 25 Peso normal;
//- Entre 25 e 30 Acima do peso;
//- Entre 30 e 40 Obeso;
//- Acima de 40 Obesidade Grave;

class Person {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    };

    calculateBMI(){
        const bmi = this.weight /(Math.pow(this.height,2)); 
        return bmi.toFixed(2);
    }

    displayBMI(){
        const bmi = this.calculateBMI();
        console.log(`${this.name} Seu IMC é ${bmi}`);
    }

    rateBMI(){
        const IMC = this.calculateBMI();
        const IMCFormatado = IMC.toLocaleString('pt-BR',{ minimumFractionDigits: 2, maximumFractionDigits: 2});
    const IMCFormatadoSubstituido = IMCFormatado.replace('.', ',');
    if(IMC < 18.5){
    return `Seu Índice de massa corporal é: ${IMCFormatadoSubstituido} Abaixo do peso`;
    }else if(IMC >= 18.5&& IMC < 25){
    return `Seu Índice de massa corporal é: ${IMCFormatadoSubstituido} Peso normal`;    
    }else if(IMC >= 25 && IMC < 30){
    return `Seu Índice de massa corporal é: ${IMCFormatadoSubstituido} Acima do peso`;
    }else if(IMC >= 30 && IMC < 40){
    return `Seu Índice de massa corporal é: ${IMCFormatadoSubstituido} Obeso`;
    }else{
    return `Seu Índice de massa corporal é: ${IMCFormatadoSubstituido} Obesidade Grave`;
    }

    }
};

(function() {

    const Jose = new Person('José', 70, 1.75);
    console.log(Jose.rateBMI());

})();