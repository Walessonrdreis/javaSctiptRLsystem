//1) Crie uma classe para representar carros. 
//Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
//Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
//gasto em reais para realizar este percurso.

class Car {
    name;
    brand;
    color;
    kmPerLiter;

    constructor(name, brand, color, kmPerLiter) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.kmPerLiter = kmPerLiter;

    }

    costOfTravel(distance, fuelPrice) {
        const kmPerLiter = this.kmPerLiter;
        const litersSpent = (distance / kmPerLiter);
        const value = litersSpent * fuelPrice;

        return `Foram andados ${distance} km, gastos ${litersSpent.toFixed(2)} litros de combustível. O gasto na viagem foi R$ ${value.toFixed(2)} `
    };
};

const car1 = new Car('car1', 'ford', 'Red', 12);

console.log(car1.costOfTravel(1000, 5.50));