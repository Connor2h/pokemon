export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse{
  results: Pokemon[];
}