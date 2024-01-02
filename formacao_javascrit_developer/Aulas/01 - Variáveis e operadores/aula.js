const valor_combustivel = 5.44;
const km_por_litros = 12;
const distancia_em_km = 1200;

const valor_viagem = (distancia_em_km/km_por_litros)*valor_combustivel;


console.log('O valor gasto na viagem foi: R$ '+valor_viagem.toFixed(2) +',00');