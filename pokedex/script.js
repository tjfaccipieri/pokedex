const poke_container = document.getElementById('pokeContainer');
const number = 151;


const fetchPokemon = async () => {
  for (let i = 1; i <= number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(api);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
  const pokemonDiv = document.createElement('div');
  pokemonDiv.classList.add('pokemon');

  const poke_types = pokemon.types.map(type => type.type.name)
  const type = main_types.find(type => poke_types.indexOf(type) > -1)
  const color = colors[type]

  pokemonDiv.style.backgroundColor = color;

  const pokeInnerHTML = `
    <p class="nome">${pokemon.name} </p>
    <div class="imgContainer"> <img src="${
      pokemon.sprites.other.dream_world.front_default
    }"/> </div>
    <p>Numero: #${pokemon.id}
    <p class="">Tipo: ${type}</p>
    `;
  pokemonDiv.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonDiv);
}

fetchPokemon();

const colors = {
	fire: '#d86963',
	grass: '#98d7a5',
	electric: '#FCF7DE',
	water: '#86a7ce',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#9999FF',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const main_types = Object.keys(colors)




