export default function PokemonCard(props){

  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.weight}</p>
    </div>
  )
}