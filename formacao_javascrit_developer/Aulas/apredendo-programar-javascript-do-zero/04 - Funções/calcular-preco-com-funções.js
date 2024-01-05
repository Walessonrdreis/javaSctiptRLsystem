


function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto/100))

}
function aplicarJuros(valor, juros){
    return valor + (valor * (juros/100));
}

function calcularPreco(preco,formaDePagamento) {
    

    if(formaDePagamento === 1){
        return 'pagamento a vista Débito, ' + 'Valor do produto: R$ '+ preco.toFixed(2)+ 'recebeu 10% de desconto : R$ ' + aplicarDesconto(preco,10).toFixed(2);
    }else if(formaDePagamento === 2){
        return 'pagamento a vista dinheiro ou pix, '+'Valor do produto: R$ '+ preco.toFixed(2)+  'recebeu 10% de desconto : R$ ' + aplicarDesconto(preco, 15).toFixed(2);
    }else if(formaDePagamento === 3){
         return 'pagamento em 2x no catão, '+ 'Valor do produto: R$ '+ preco.toFixed(2)+ ' sem desconto : R$ '+ aplicarDesconto(preco,0).toFixed(2);
    }else{
        return 'pagamento a cima de 2X, '+ 'Valor do produto: R$ '+preco.toFixed(2)+ ' recebeu 10% de juros : R$'+ aplicarJuros(preco,10).toFixed(2);
    }

}







(function(){

    const precoEtiqueta = 100;
    const formaDePagamento = 1;
    
    console.log(calcularPreco(precoEtiqueta,formaDePagamento)); 

})();


