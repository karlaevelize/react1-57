import pokemons from "../data/pokemons"
import PokemonCard from "./PokemonCard"

export default function Pokemon(){

  //check if we are getting the data
  console.log("pokemns", pokemons)

  return(
    <div>
      Pokemon List
      {pokemons.map((pokemon, index) => {
        // display the pokemons using a card component
        return <PokemonCard key={index} name={pokemon.name} weight={pokemon.weight}/>
      })}
    </div>
  )
}