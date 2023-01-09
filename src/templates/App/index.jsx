import './styles.css'
import axios from 'axios'
import { Component, useEffect, useState } from 'react'
import PokeCard from '../../components/PokeCard'
import { loadPokemons } from '../../utils/loadPokemons'

class App extends Component {
  state = {
    pokedex: [],
    filter: ''
  }

  async componentDidMount() {
    const { pokedex } = this.state

    for(let i=1; i<1154; i++) {
      var pokemon = await loadPokemons(i)
      var result = pokedex.find(poke => poke.name === pokemon.name)
      if(result === undefined) {
        pokedex.push(pokemon)
        this.setState({ pokedex })
      }
    }
  }

  componentDidUpdate() {
    const { pokedex, filter } = this.state

    for(let i=0; i<pokedex.length; i++) {
      var poke = document.querySelector(`#poke${pokedex[i].id}`)
      if(filter != '') {
        if(pokedex[i].name.toLowerCase().includes(filter.toLowerCase())) {
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