import { usePokemonListQuery } from '../hooks/usePokemonData';
import { PokemonImage } from './pokemon-image';
import { PokemonName } from './pokemon-name';
import { PokemonContainer } from './pokemon-container';

export function App() {
  const { data: pokemonData, isSuccess } = usePokemonListQuery();

  return (
    <>
      <h1>GEN 1 Pokemon</h1>
      {isSuccess && 
      pokemonData.map(({name: pokemonName, url}) => {
        return (
          <PokemonContainer key={pokemonName}>
            <PokemonName name={pokemonName} />
            <PokemonImage name={pokemonName} url={url}></PokemonImage>
          </PokemonContainer>
          )
      })}
    </>
  )
};