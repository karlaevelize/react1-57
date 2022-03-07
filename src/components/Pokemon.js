// import pokemons from "../data/pokemons"
import PokemonCard from "./PokemonCard"

export default function Pokemon(){

  const pokemons = { name: "Karla" }

  console.log("pokemns", pokemons)

  return(
    <div>
      Pokemon List
      {pokemons.map((pokemon, index) => {
        return <PokemonCard key={index} name={pokemon.name} weight={pokemon.weight}/>
      })}
    </div>
  )
}