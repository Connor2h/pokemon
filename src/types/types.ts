export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse{
  results: Pokemon[];
}

export interface PokemonDetail{
  name: string;
  cries?: {
    latest?: string | null;
    legacy?: string | null;
  };
  sprites: {
    front_default: string | null;
    other?: {
      ['official-artwork']?: {
        front_default: string | null;
      };
    };
  };
};