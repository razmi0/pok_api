import { useState } from "react";
import { callApi, Pokemon } from "./services";
import { Loader } from "./components/Loader";
import "./App.css";

type Logo = {
  [key: string]: {
    color: string;
  };
};
const logos: Logo = {
  bug: {
    color: "#44b820",
  },
  electric: {
    color: "#F8D030",
  },
  fire: {
    color: "#F08030",
  },
  grass: {
    color: "#78C850",
  },
  water: {
    color: "#6890F0",
  },
  normal: {
    color: "#A8A878",
  },
  poison: {
    color: "#A040A0",
  },
  ground: {
    color: "#E0C068",
  },
  flying: {
    color: "#A890F0",
  },
  psychic: {
    color: "#F85888",
  },
  ghost: {
    color: "#705898",
  },
  rock: {
    color: "#B8A038",
  },
  fairy: {
    color: "#EE99AC",
  },
  fighting: {
    color: "#C03028",
  },
};

const POKEMONS_LIMIT = 100;
const POKEMON_OFFSET = 0;

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemons = async () => {
    setLoading(true);
    setPokemons(await callApi(POKEMONS_LIMIT, POKEMON_OFFSET));
    setLoading(false);
  };

  return (
    <>
      <Button onClick={getPokemons} loading={loading} />
      {pokemons &&
        pokemons.map((pokemon) => {
          const { id, type, image, name } = pokemon;
          const color = logos[type].color || logos["fire"].color;

          return (
            <div key={id}>
              <Heading title={name} color={color} />
              <div className="pokemon-ctn">
                <div className="tables">
                  <GlobalStatsTable pokemon={pokemon} />
                  <StatsTable pokemon={pokemon} />
                </div>
                <img src={image} alt={name} />
              </div>
            </div>
          );
        })}
    </>
  );
};
type ButtonProps = {
  onClick: () => void;
  loading: boolean;
};
const Button = ({ onClick, loading }: ButtonProps) => {
  return (
    <button className="App" onClick={onClick}>
      {loading ? <Loader /> : "Get them all !"}
    </button>
  );
};
type HeadingProps = {
  title: string;
  color: string;
};
const Heading = ({ title, color }: HeadingProps) => {
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <>
      <style>
        {`
          .heading {
            display: flex;
            flex-direction: row;
            place-items : center;
            justify-content: center;
            gap: 10px;
            width: 100%;
          }
          .heading h2 {
            font-size: 40px;
          }
          .logo-container {
            opacity: 0.8;
            border-radius: 50%;
            width: fit-content;
            height: fit-content;
            padding: 5px;
            display: flex;
            place-items: center;
            z-index: 9;
            min-width: 30px;
            min-height: 30px;
          }
          .logo-container img {
            z-index: 10;
            width: 30px;
          }
        `}
      </style>

      <div className="heading">
        <h2 style={{ color: color }}>{title}</h2>
        <div className="logo-container" style={{ backgroundColor: color }}></div>
      </div>
    </>
  );
};
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
