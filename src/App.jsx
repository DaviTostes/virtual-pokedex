import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import PokeCard from './components/PokeCard'

function App() {
  const [pokedex, setPokedex] = useState([])
  var k=0

  const HandleSearch = async () => {
    const pokeAPI = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    setPokedex(pokeAPI.data.results)
  }

  HandleSearch()

  return (
    <div className="App">
      <div className="input-wrapper">
        <input type="text" className='filter' id='filter' placeholder='Filter' />
      </div>
      <div className="pokedex-wrapper">
        {
          pokedex.map(poke => <PokeCard name={pokedex[k].name} 
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${k+1}.png`}
          key={k+=1} />)
        }
      </div>
    </div>
  )
}

export default App