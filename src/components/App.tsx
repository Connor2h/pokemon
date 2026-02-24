import {  useState } from 'react'
import { usePokemonListQuery } from '../hooks/usePokemonData';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse{
  results: Pokemon[];
}

export function App() {
  const { data: pokemonData, isLoading, isSuccess } = usePokemonListQuery();
  const [pokemon, setPokemon] = useState<Pokemon[]>();

  const handleClick = () => {
    if(pokemonData){
      console.log(pokemonData)
      setPokemon(pokemonData);
    }
  }

  return (
    <>
      <button onClick={handleClick}>Fetch Pokemon</button>
      {pokemon && pokemon.map(({name : pokemonName}) => <div key={pokemonName}>{pokemonName}</div>)}
    </>
  )
};