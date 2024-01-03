


function calcularImc(peso,altura){
    return peso /Math.pow(altura,2);

}
function classificarImc(IMC){
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
function main(){
const peso = 80;
const altura = 1.78;
const IMC = calcularImc(peso,altura);

console.log(classificarImc(IMC)); 
}

main();
