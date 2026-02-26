import type { Pokemon } from "../types/types"

export const PokemonName = ({name}: Omit<Pokemon, 'url'>) => {
    return (
        <span>{name}</span>
    )
}