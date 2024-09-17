// Asserção de test
const verifiqueQue = (value) =>{
    // Precisa retorna um objeto
        const assertions = {

            //função ehExamenteIgualA
            ehExatamenteIgualA(esperado){
                if  (value  !==  esperado)  {
                    throw{};
            
              } 

            }
        };

        return assertions;

};
//Refatoração da  função teste 
const  teste  =  (titulo,  functionTeste)  =>  {
    try {
    functionTeste();
    console .log(`✅ ${titulo} Teste  passou`);
        
    } catch (error) {
        console .error(`🚨 ${titulo} Ih,  deu  ruim...`);
        
    }
    const somaHorasExtras = (salario,valorHorasExtras) => {
        return (salario + valorHorasExtras);
    }
    
    const calcularDesconto = (salario,valorDesconto) => {
        return salario - valorDesconto;
    }


}

teste('somaHorasExtras',() =>{
    const esperado = 10;
    const retornado = somaHorasExtras(5,5);

    verifiqueQue(retornado).ehExatamenteIgualA(esperado);

});

teste('calcularDesconto',() =>{
    const esperado = 5;
    const retornado = calcularDesconto(10,5)

});



