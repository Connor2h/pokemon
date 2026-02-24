import { useQuery } from '@tanstack/react-query';
import {  useState } from 'react'

interface Pokemon {
  name: string;
  url: string;
}

export function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>();

  const getPokemonData = useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      return await response.json();
    },
  });

  const handleClick = () => {
    if(getPokemonData.data){
      console.log(getPokemonData.data.results)
      setPokemon(getPokemonData.data.results);
    }
  }

  return (
    <>
      <button onClick={handleClick}>Fetch Pokemon</button>
      {pokemon && pokemon.map(({name : pokemonName}) => <div key={pokemonName}>{pokemonName}</div>)}
    </>
  )
};