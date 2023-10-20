import { Pokemon, PokemonsResult } from "../types";

export const callApi = async (limit: number = 10, offset: number = 0): Promise<Pokemon[]> => {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    let data = await res.json();
    const pokemons: Pokemon[] = [];
    const fetches: Promise<Response>[] = data.results.map((pokemon: PokemonsResult) => {
      return fetch(pokemon.url); //Promise<Response>[]
    });
    // const fetches = urls.map((url) => fetch(url));

    await Promise.all(fetches)
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        data.map((pokemon) => {
          pokemons.push(buildPokemon(pokemon));
        });
      });

    return pokemons;
  } catch (e: any) {
    throw new Error(e);
  }
};

//
const buildPokemon = (data: any): Pokemon => {
  return {
    name: data.name,
    baseXp: data.base_experience,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    specialAttack: data.stats[3].base_stat,
    specialDefense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
    type: data.types[0].type.name,
    // ability: data.abilities[0].ability.name,
    height: data.height,
    weight: data.weight,
    image: data.sprites.other["official-artwork"].front_default,
    id: data.id,
  };
};
