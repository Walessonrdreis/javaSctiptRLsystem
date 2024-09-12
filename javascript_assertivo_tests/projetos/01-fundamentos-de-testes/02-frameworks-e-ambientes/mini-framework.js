
const  teste  =  (titulo,  esperado,  retornado)  =>  {

    if  (esperado  ===  retornado)  {

        console .log(`✅ ${titulo} Teste  passou`);

  }  else  {

        console .error(`🚨 ${titulo} Ih,  deu  ruim...`);

  }

}


const somaHorasExtras = (salario,valorHorasExtras) => {
    return (salario + valorHorasExtras);
}

const calcularDesconto = (salario,valorDesconto) => {
    return salario - valorDesconto;
}

teste('somaHorasExtras',10,somaHorasExtras(5,5));
teste('calcularDesconto',5,calcularDesconto(10,5));