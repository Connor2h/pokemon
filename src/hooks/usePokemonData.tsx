import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { Pokemon, PokemonDetail, PokemonListResponse } from "../types/types";

export function usePokemonListQuery(): UseQueryResult<Pokemon[], Error> {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: async (): Promise<Pokemon[]> => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

      if (!response.ok) {
        throw new Error(`Failed to fetch 151 pokemons: ${response.status}`);
      }
      const pokemonObjects: PokemonListResponse = await response.json();
      // console.log(pokemonObjects.results);
      return pokemonObjects.results;
    },
  });
};

export const usePokemonImagesQuery = (url: string) => {
  return useQuery<PokemonDetail>({
    queryKey: ['pokemon-detail', url],
    queryFn: async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch pokemon detail: ${response.status}`);
      }

      return response.json();
    },
    enabled: !!url,
    staleTime: 1000 * 60 * 5, // 5 min cache freshness
  });
}

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