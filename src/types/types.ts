import type { ReactNode } from "react";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonContainerProps {
  children: ReactNode
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

export interface PokemonListResponse{
  results: Pokemon[];
}