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
};

// export type UsePokemonListQueryOptions<TData = Pokemon[]> = Omit<
//   UseQueryOptions<Pokemon[], Error, TData>,
//   'queryKey' | 'queryFn'
// >;

// Wrapper for useQuery that allows you to pass in a optional options object
// https://tkdodo.eu/blog/react-query-data-transformations
// Can be used like usePokemonListQuery({select: (data) => data.map((todo) => todo.name.toUpperCase())});
// export const usePokemonListQuery = <TData = Array<Pokemon>>(options?: UsePokemonListQueryOptions<TData>): UseQueryResult<TData, Error> => {
//   return useQuery({
//     queryKey: ['pokemons'],
//     queryFn: async (): Promise<Array<Pokemon>> => {
//       const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
//       const pokemonObjects: PokemonListResponse = await response.json();
//       console.log(pokemonObjects.results);
//       return pokemonObjects.results;
//     },
//     ...options,
//   });
// };