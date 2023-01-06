import './App.css'
import axios from 'axios'
import { Component, useEffect, useState } from 'react'
import PokeCard from './components/PokeCard'
import { loadPokemons } from './utils/loadPokemons'

class App extends Component {
  state = {
    pokedex: []
  }

  async componentDidMount() {
    const { pokedex } = this.state

    this.setState({ pokedex: await loadPokemons() })
  }

  render() {
    const { pokedex } = this.state

    return (
      <div className="App">
        <div className="input-wrapper">
          <input type="text" className='filter' id='filter' placeholder='Filter'/>
        </div>
        <div className="pokedex-wrapper">
          {
            pokedex.map(pokemon => {
              return (
                <PokeCard
                key={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                img={pokemon.img}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App