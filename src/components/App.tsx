import {  useState } from 'react'
import { usePokemonListQuery } from '../hooks/usePokemonData';
import type { Pokemon } from '../types/types';

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