//3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
//Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

//Código Condição de pagamento:
//- À vista Débito, recebe 10% de desconto;
//- À vista no Dinheiro ou PIX, recebe 15% de desconto;
//- Em duas vezes, preço normal de etiqueta sem juros;
//- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const precoEtiqueta = 100;
const formaDePagamento = 4;

const condicaoPagemento01 = precoEtiqueta - (precoEtiqueta*0.1);
const condicaoPagamento02 = precoEtiqueta - (precoEtiqueta* 0.15) ;
const condicaoPagamento03 = precoEtiqueta;
const condicaoPagamento04 = precoEtiqueta + (precoEtiqueta*0.1);

if(formaDePagamento === 1){
    console.log('pagamento a vista Débito, ','Valor do produto: R$',precoEtiqueta.toFixed(2), 'recebeu 10% de desconto : R$', condicaoPagemento01.toFixed(2));
}else if(formaDePagamento === 2){
    console.log('pagamento a vista dinheiro ou pix, ','Valor do produto: R$',precoEtiqueta.toFixed(2), 'recebeu 10% de desconto : R$', condicaoPagamento02.toFixed(2));
}else if(formaDePagamento === 3){
    console.log('pagamento em 2x no catão, ','Valor do produto: R$',precoEtiqueta.toFixed(2), 'sem desconto : R$', condicaoPagamento03.toFixed(2));
}else{
    console.log('pagamento a cima de 2X, ','Valor do produto: R$',precoEtiqueta.toFixed(2), 'recebeu 10% de juros : R$', condicaoPagamento04.toFixed(2));
}