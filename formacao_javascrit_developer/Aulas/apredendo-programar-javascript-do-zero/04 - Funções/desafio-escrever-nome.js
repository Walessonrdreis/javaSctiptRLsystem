//função escrever meu nome
function writeYourName(name){
return 'meu nome é '+  name;
}
//Função classificar idade
function calcularIdadePorAnoDeNascimento(anoNascimento){
    const dataAtual = new Date();
    const anoAtual = dataAtual.getUTCFullYear();

    return  anoAtual - anoNascimento;


}
function classificarIdade(idade){
    if (idade <= 17){
        return writeYourName('walesson ReisBa') + 'Tenho '+ idade +'. Sou Menor de Idade'
    }else if (idade >= 18 & idade < 60){
        return writeYourName('walesson ReisBa') + ' Tenho '+ idade + ' anos. Sou Adulto'
    }else{
            return writeYourName('walesson ReisBa') +' Tenho'+ idade + '. Sou um Coroa'
    }
    
}




(function (){
    const idade = calcularIdadePorAnoDeNascimento(1994);
    const idadeClassificada= classificarIdade(idade);
    console.log(idadeClassificada);
})();