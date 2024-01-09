
const pokeApi = {}

function convertPokemonApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types;
    pokemon.type = type;
    pokemon.types= types;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;

}
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)// Novo fetch com a url do pokemon que estou querendo acessar 
        .then((response) => response.json())// convertendo a response que que ele me der em um json
        .then(convertPokemonApiDetailToPokemon)

}

pokeApi.getPokemons = (offset = 5, limit=0 ) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)//buscando a lista
        .then((response) => response.json())// recebemos um http response, estamos convertendo para json
        .then((jsonBody) => jsonBody.results)//pegar apenas a lista de pokemons 
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // mapeando essa lista de pokemons em uma lista de requisições do detalhe dos pokemons que é um novo fetch: pokeApi.getPokemonDetail
        .then((detailRequests) => Promise.all(detailRequests))// esperando que todas as requisições terminem

        .then((pokemonsDetails) => pokemonsDetails)//Devolve uma lista de detalhes dos pokemons

        

}