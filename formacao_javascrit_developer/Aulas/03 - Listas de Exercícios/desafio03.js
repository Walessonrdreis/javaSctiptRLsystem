
//1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

//Média = (nota 1 + nota 2 + nota 3) / 3;

//Classificação:
//- Média menor que 5, reprovação;
//- Média entre 5 e 7, recuperação;
//- Média acima de 7, passou de semestre;

const primeiraNota = 10;
const segundaNota = 5;
const terceiraNota = 10;

const media = (primeiraNota+segundaNota+terceiraNota)/3;

if (media < 5) {
    console.log('Sua media final do semestre foi',media.toFixed(2),'REPROVADO');
}else if(media >= 5 && media <= 7){
    console.log('Sua media final do semestre foi',media.toFixed(2),'RECUPERAÇÃO');
}else if(media >= 9 ){
    console.log('Sua media final do semestre foi',media.toFixed(2),' PARABÉNS PASSOU DE SEMESTRE COM NOTA EXCELENTE')
}else{
    console.log('Sua media final do semestre foi',media.toFixed(2),'PASSOU DE SEMESTRE');
}