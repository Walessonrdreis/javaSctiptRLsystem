// um objeto é uma estrutura dinâmica de chave e valor, e dentro desses valores pode se ter funções também 

// A classe é como aquele objeto deve ser,
// Uma instancia é uma ocorrência de pessoa

class Pessoa{
    name;
    age;
    yearOfBirth;
    
    constructor(name,age){// Obriga ser adicionado nome e idade. quando a classe for instanciada new Pessoa('nome',age)
        this.name = name;
        this.age = age;
        this.yearOfBirth = 2024 - age;
        
    }
    //Não precisa do function, pois é um método
    describe(){
        return `Meu nome é ${this.name} e minha idade é ${this.age}`;
    }
};

function comparePeople(p1,p2){
    if(p1.age > p2.age){
        return `${p1.name} é mais velho que ${p2.name}`;
    }else if(p2.age > p1.age){
        return `${p2.name} é mais velho que ${p1.name}`;
    } else{
        return `${p1.name} e ${p2.name} possuem a mesma idade`;
    }

}

(function() {
   const walesson = new Pessoa('Walesson', 29);
   const daniela = new Pessoa('Daniela',31);

  console.log(comparePeople(walesson,daniela)) ;
 

   



})();