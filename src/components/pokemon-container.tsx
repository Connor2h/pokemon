import type { FC } from "react";
import type { PokemonContainerProps } from "../types/types";

export const PokemonContainer: FC<PokemonContainerProps> = ({children}: PokemonContainerProps) => {
  return (
    <div>
      {children}
    </div>
  )
};