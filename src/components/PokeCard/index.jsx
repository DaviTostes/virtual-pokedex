import './styles.css'

const PokeCard = (props) => {
  return (
    <div className="pokeCard">
      <img src={props.img} alt="" />
      <p className="name">{props.name}</p>
      <div className="types"> 
      {
        props.types.map((type, index) => <p key={index}>{type}</p>)
      } 
      </div>
    </div>
  )
}

export default PokeCard