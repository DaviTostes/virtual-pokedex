import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import PokeCard from './components/PokeCard'

function App() {
  const [pokedex, setPokedex] = useState([])
  const [filter, setFilter] = useState('')
  var k=0

  const HandleSearch = async () => {
    const pokeAPI = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    setPokedex(pokeAPI.data.results)
  }

  const handleFilter = () => {
    const cards = document.querySelectorAll('.PokeCard')

    for(var i=0; i<pokedex.length; i++) {
      if(filter != '') {
        if(!pokedex[i].name.toLowerCase().includes(filter.toLowerCase())) {
          cards[i].style.display = 'none'
        } else {
          cards[i].style.display = 'flex'
        }
      } else {
        cards[i].style.display = 'flex'
      }
    }
  }

  HandleSearch()
  handleFilter()

  return (
    <div className="App">
      <div className="input-wrapper">
        <input type="text" className='filter' id='filter' placeholder='Filter' onChange={e => setFilter(e.target.value)} />
      </div>
      <div className="pokedex-wrapper">
        {
          pokedex.map(poke => <PokeCard className="pokeCard" name={pokedex[k].name} 
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${k+1}.png`}
          key={k+=1} />)
        }
      </div>
    </div>
  )
}

export default App