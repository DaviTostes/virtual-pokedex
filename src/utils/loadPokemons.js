import axios from 'axios'

export const loadPokemons = async () => {
  var pokemons = []

  const pokeApi = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
  
  for(let i=0; i<pokeApi.data.results.length; i++) {
    var pokemon = await axios.get(pokeApi.data.results[i].url)
    pokemons.push(pokemon.data)
  }

  pokemons = pokemons.map(pokemon => { 
    return { name: pokemon.name, 
             id: pokemon.id, 
             types: pokemon.types.map(type => { return type.type.name }), 
             img: pokemon.sprites.front_default }
  })
  return pokemons
}