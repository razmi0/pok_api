import { Pokemon, Context } from "../types";
import { buildPokemon, Progress } from "./utils";

export const callAPI = async (limit: number = 10, offset: number = 0): Promise<Pokemon[]> => {
  const progress = new Progress(limit); /**INITIALISE*/
  const pokemons: Pokemon[] = Array.from({ length: limit });
  const contextUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const { results } = await fetchContext(contextUrl);

  try {
    progress.updateStatus(/**FETCHING*/);
    const fetches: Promise<Response>[] = results.map((source: Context) => {
      progress.updateProgress();
      return fetch(source.url);
    });

    await Promise.all(fetches)
      .then((responses) => {
        progress.updateStatus(/**PARSING*/);
        return Promise.all(
          responses.map((response) => {
            progress.updateProgress();
            return response.json();
          })
        );
      })
      .then((data) => {
        progress.updateStatus(/**BUILDING*/);
        data.map((completePokemon, i) => {
          progress.updateProgress();
          pokemons[i] = buildPokemon(completePokemon);
        });
      });

    progress.reset(/**DONE*/);
    return pokemons;
  } catch (e: any) {
    throw new Error(e);
  }
};

const fetchContext = async (url: string) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};

//

// try {
//   let res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
//   let data = await res.json();
//   const pokemons: Pokemon[] = [];
//   const fetches: Promise<Response>[] = data.results.map((pokemon: PokemonsResult) => {
//     return fetch(pokemon.url); //Promise<Response>[]
//   });

//   return pokemons;
// } catch (e: any) {
//   throw new Error(e);
// }
