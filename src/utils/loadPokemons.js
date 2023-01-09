import axios from 'axios'

const url = 'https://pokeapi.co/api/v2/pokemon'

export const loadPokemons = async (i) => {
    var pokemon = await axios.get(`${url}/${i}`)
    return  { 
              name: pokemon.data.name, 
              id: i, 
              types: pokemon.data.types.map(type => { return type.type.name }), 
              img: pokemon.data.sprites.front_default 
            }
}