
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonContainer = document.getElementById('pokemonContainer')
const maxRecords = 151;
const limit = 1
;
let offset = 0;


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => {
            return `
                <li id="pokemon-${pokemon.number}" class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>

                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            `;
        }).join('');

        pokemonList.innerHTML += newHtml;

        // Adiciona um ouvinte de evento a cada elemento <li> gerado
        pokemons.forEach((pokemon) => {
            const elementId = `pokemon-${pokemon.number}`;
            const listItem = document.getElementById(elementId);

            if (listItem) {
                listItem.addEventListener('click', () => handlePokemonClick(pokemon));
            }
        });
    });
}

// Função chamada quando um Pokémon é clicado
// Função chamada quando um Pokémon é clicado
function handlePokemonClick(pokemon) {
    const body = document.body;
    body.innerHTML = `
        <div id="pokemonDetail" class="${pokemon.type}" >
            <h2 class="pokeTitle" >${pokemon.name.toUpperCase()}</h2>
            <img class="pokePhoto" src="${pokemon.photo}" alt="${pokemon.name}">
            <div class="pokeDetails">
            <spam class="numberPoke" > Número:  ${pokemon.number}</spam>
                <h3>Nome:</h3> 
                <spam class="pokeName" > ${pokemon.name}</spam>

                <h3>Topo(s):</h3>
                <ul class="types">

                ${pokemon.types.map((type) => `<li>${type}</li>`).join('')}
                </ul>
                <h3>Altura:</h3>
                <spam> ${pokemon.height / 10} m</spam>
                <h3>Peso:</h3>
                <spam>${pokemon.weight / 10} kg</spam>
            <h3>Status:</h3>
            <table>
                ${pokemon.stats.map(stat => ` ${stat}`).join(' ')}
            </table>
            <h3>Movimentos:</h3>
            <ol>
                ${pokemon.moves.map(move => `<li> ${move}</li>`).join(' ')}
            </ol>
            
            <h3>Habilidades:</h3>
            <ul>
               ${pokemon.abilities.map((ability) => `<li>${ability}</li>`).join('')}
            </ul>
            <h3>Geração: #1</h3>
            
                ${`<img src ="${pokemon.versions.generation_i.red_blue.front_gray}">`}
            
            </div>
          
        
                <button onclick="voltar()">Voltar</button>

        </div>
    `;

    // Adicione aqui o código adicional que deseja executar quando um Pokémon é clicado
}
function voltar() {
    // Redireciona para a página principal ou realiza a ação desejada
    location.reload(); // Atualiza a página, você pode ajustar conforme necessário
}

loadPokemonItens(offset,limit);

loadMoreButton.addEventListener('click',() =>{
    offset += limit;
    const qtdRecordsWithNexPage = offset + limit

    if(qtdRecordsWithNexPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset,newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset,limit)
    }
})

