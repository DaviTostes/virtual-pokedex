import './styles.css'

const PokeCard = (props) => {
  return (
    <div className="PokeCard">
      <img src={props.img} alt="" />
      <p className="name">{props.name}</p>
      <p className="type">{props.type}</p>
    </div>
  )
}

export default PokeCard