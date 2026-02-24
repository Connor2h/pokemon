import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { Pokemon, PokemonListResponse } from "../types/types";

export function usePokemonListQuery(): UseQueryResult<Pokemon[], Error>{
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: async (): Promise<Pokemon[]> => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const pokemonObjects: PokemonListResponse = await response.json();
      console.log(pokemonObjects.results);
      return pokemonObjects.results;
    },
  });
}