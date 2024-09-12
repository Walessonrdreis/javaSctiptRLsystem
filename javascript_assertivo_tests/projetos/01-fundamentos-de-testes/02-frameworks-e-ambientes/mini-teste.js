
const somaHorasExtras = (salario,valorHorasExtras) => {
    return (salario + valorHorasExtras);
}

const calcularDesconto = (salario,valorDesconto) => {
    return salario - valorDesconto;
}


const esperado = 10;
const retorno = somaHorasExtras(5,9);

if (esperado === retorno) {
    console.log('Parabéns seu teste passou')
    
} else {
    console.log('Algo deu ruim')
}

export default {somaHorasExtras, calcularDesconto}