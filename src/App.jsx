import './App.css'
import axios from 'axios'
import { Component, useEffect, useState } from 'react'
import PokeCard from './components/PokeCard'
import { loadPokemons } from './utils/loadPokemons'

class App extends Component {
  state = {
    pokedex: [],
    filter: ''
  }

  async componentDidMount() {
    const { pokedex } = this.state

    this.setState({ pokedex: await loadPokemons() })
  }

  componentDidUpdate() {
    const { pokedex, filter } = this.state

    for(let i=0; i<pokedex.length; i++) {
      var poke = document.querySelector(`#poke${pokedex[i].id}`)
      if(filter != '') {
        if(pokedex[i].name.includes(filter)) {
          poke.style.display = 'block'
        } else {
          poke.style.display = 'none'
        }
      } else {
        poke.style.display = 'block'
      }
    }
  }

  render() {
    const { pokedex, filter } = this.state

    return (
      <div className="App">
        <div className="input-wrapper">
          <input type="text" className='filter' id='filter' placeholder='Filter' onChange={e => this.setState({ filter: e.target.value })}/>
        </div>
        <div className="pokedex-wrapper">
          {
            pokedex.map(pokemon => {
              return (
                <div className="pokecard" key={pokemon.id} id={`poke${pokemon.id}`}>
                  <PokeCard
                    name={pokemon.name}
                    types={pokemon.types}
                    img={pokemon.img}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App