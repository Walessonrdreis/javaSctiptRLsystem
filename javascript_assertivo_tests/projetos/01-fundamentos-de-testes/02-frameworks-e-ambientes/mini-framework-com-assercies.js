// Asserção de test
const checkThat = (value) =>{
    // Precisa retorna um objeto
        const assertions = {

            //função ehExaamenteIgualA
            andExactTheSameAs(esperado){
                if  (valor  ===  esperado)  {

                    console .log(`✅ ${titulo} Teste  passou`);
            
              }  else  {
            
                    console .error(`🚨 ${titulo} Ih,  deu  ruim...`);
            
              }

            }
        };

        return assertions;

};
//Refatoração da  função teste 
const  teste  =  (titulo,  esperado,  retornado)  =>  {

    if  (esperado  ===  retornado)  {

        console .log(`✅ ${titulo} Teste  passou`);

  }  else  {

        console .error(`🚨 ${titulo} Ih,  deu  ruim...`);

  }

}



