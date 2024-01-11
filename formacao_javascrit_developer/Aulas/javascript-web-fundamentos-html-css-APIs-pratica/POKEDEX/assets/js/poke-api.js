
const pokeApi = {}


function convertPokemonApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    pokemon.height = pokeDetail.height;
    pokemon.weight = pokeDetail.weight;
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
  

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types;
    pokemon.type = type;
    pokemon.types= types;
    const moves = pokeDetail.moves.map((moveSlot) =>{
    const moveSlotName= moveSlot.move.name
    const moveSlotURL = moveSlot.move.url
    return moveSlotName.toUpperCase() 
   } );
   pokemon.moves = moves
   const stats = pokeDetail.stats.map((statsSlot) =>{
    const name = statsSlot.stat.name
    const base_stat = statsSlot.base_stat
    return `<thead>
        <tr>
            <th>${name.toUpperCase()}</th>
        </tr>
            </thead>
            <tbody>
        <tr>
            <td>${base_stat}</td>
        </tr>
            </tbody>
        `
            
   });
   pokemon.stats = stats;

    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name.toUpperCase()) //
    pokemon.abilities = abilities;
  
    return pokemon;

}
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)// Novo fetch com a url do pokemon que estou querendo acessar 
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .then((pokeDetail) => {
      
        if (!pokeDetail) {
            throw new Error('Detalhes do Pokémon não disponíveis');
        }
        return convertPokemonApiDetailToPokemon(pokeDetail);
    });
        

}

pokeApi.getPokemons = (offset = 5, limit = 0) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url) // buscando a lista
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then((jsonBody) => jsonBody.results) 
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests)) 
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => {
            console.error(`Erro ao obter lista de pokémons: ${error.message}`);
        
            throw error; 
        });
}