import type { Pokemon, } from "../types/types";
import { usePokemonImagesQuery } from "../hooks/usePokemonData";
import styled from "@emotion/styled";

export const PokemonImage = ({ url, name }: Pokemon) => {
  const { data, isLoading, isError } = usePokemonImagesQuery(url);

  if (isLoading) {
    return <span>Loading image...</span>;
  }

  if (isError) {
    return <span>Failed to load image</span>;
  }

  const imageUrl = data?.sprites.other?.['official-artwork']?.front_default ?? data?.sprites.front_default;

  if (!imageUrl) {
    return <span>No image available</span>;
  }

  return <StyledImage src={imageUrl} alt={name} />;
};

const StyledImage = styled.img`
  width: 96px;
  height: 96px;
  display: block;
`