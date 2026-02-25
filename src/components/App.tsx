import { usePokemonListQuery } from '../hooks/usePokemonData';
import { PokemonImage } from './pokemon-image';

export function App() {
  const { data: pokemonData, isSuccess } = usePokemonListQuery();

  return (
    <>
      <h1>GEN 1 Pokemon</h1>
      {isSuccess && 
      pokemonData.map(({name : pokemonName, url}) => {
        console.log(url);
        return (
          <div key={pokemonName}>
            {pokemonName}
            <PokemonImage name={pokemonName} url={url}></PokemonImage>
          </div>
          )
      })}
    </>
  )
};