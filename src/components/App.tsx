import { useState } from 'react'


export function App() {

  interface Pokemon {
    name: string;
    url: string;
  }

  const pokemons: Pokemon[] = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" }
  ];

  return (
    <>
      <button onClick={() => console.log(pokemons)}>Click Me</button>
    </>
  )
}