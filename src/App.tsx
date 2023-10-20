import { useState } from "react";
import { call } from "./services";
import "./App.css";

const svgsTypes = {
  bug: "./bug.svg",
  elec: "./elec.svg",
  fire: "./fire.svg",
  grass: "./grass.svg",
  water: "./water.svg",
};

type Pokemon = {
  name: string;
  baseXp: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  type: string;
  ability: string;
  height: number;
  weight: number;
  image: string;
  id: number;
};

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getThem = async () => {
    setLoading(true);
    const pokemons = await call();
    //@ts-ignore
    setPokemons(pokemons);
    setLoading(false);
  };

  return (
    <>
      <button className="App" onClick={getThem}>
        {loading ? "Loading..." : "Call API"}
      </button>
      <div>
        {pokemons?.length > 0 &&
          pokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
              <img src={svgsTypes[pokemon.type]} alt={pokemon.type} />
              <div className="pokemon-ctn">
                <div className="tables">
                  <GlobalStatsTable pokemon={pokemon} />
                  <StatsTable pokemon={pokemon} />
                </div>
                <img src={pokemon.image} alt={pokemon.name} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

const StatsTable = ({ pokemon }: { pokemon: Pokemon }) => {
  const { hp, attack, defense, specialAttack, specialDefense, speed } = pokemon;

  return (
    <>
      <style>
        {`
          .grid-ctn {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;
            gap: 0px 0px;
            grid-auto-flow: row;
            width: 50%;
            height : fit-content;
          }
          .grid-item {
            padding: 10px;
            font-size: 25px;
            text-align: center;
            border: 1px solid #000;
          }
        `}
      </style>
      <div className="grid-ctn">
        <div className="grid-item">{hp}</div>
        <div className="grid-item">{attack}</div>
        <div className="grid-item">{defense}</div>
        <div className="grid-item">{specialAttack}</div>
        <div className="grid-item">{specialDefense}</div>
        <div className="grid-item">{speed}</div>
      </div>
    </>
  );
};
const GlobalStatsTable = ({ pokemon }: { pokemon: Pokemon }) => {
  const { baseXp, height, weight } = pokemon;

  return (
    <>
      <style>
        {`
          .global-grid-ctn {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0px 0px;
            width: 50%;
            height : fit-content;

          }
          .global-grid-item {
            padding: 10px;
            font-size: 25px;
            text-align: center;
            border: 1px solid #000;
          }
        `}
      </style>
      <div className="global-grid-ctn">
        <div className="global-grid-item">{baseXp}</div>
        <div className="global-grid-item">{height}</div>
        <div className="global-grid-item">{weight}</div>
      </div>
    </>
  );
};

export default App;
