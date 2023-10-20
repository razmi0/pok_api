import { useState } from "react";
import { getPokemons, Pokemon } from "./services";
import "./App.css";
type Logo = {
  [key: string]: {
    logo: string;
    color: string;
  };
};
const logos: Logo = {
  bug: {
    logo: "./bug.svg",
    color: "#A8B820",
  },
  elec: {
    logo: "./elec.svg",
    color: "#F8D030",
  },
  fire: {
    logo: "./fire.svg",
    color: "#F08030",
  },
  grass: {
    logo: "./grass.svg",
    color: "#78C850",
  },
  water: {
    logo: "./water.svg",
    color: "#6890F0",
  },
};

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const callApi = async () => {
    setLoading(true);
    setPokemons(await getPokemons());
    setLoading(false);
  };

  return (
    <>
      <Button onClick={callApi} loading={loading} />
      {pokemons &&
        pokemons.map((pokemon) => {
          const { id, type, image, name } = pokemon;
          return (
            <div key={id}>
              <Heading title={name} logo={logos[type].logo} color={logos[type].color} />
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
}
type ButtonProps = {
  onClick: () => void;
  loading: boolean;
};
const Button = ({ onClick, loading }: ButtonProps) => {
  return (
    <button className="App" onClick={onClick}>
      {loading ? "Loading..." : "Call API"}
    </button>
  );
};
type HeadingProps = {
  title: string;
  logo: string;
  color: string;
};
const Heading = ({ title, logo, color }: HeadingProps) => {
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <>
      <style>
        {`
          .heading {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
          }
          .heading h2 {
            color: ${color};
          }
          .logo-container {
            background-color: ${color};
            opacity: 0.6;
            border-radius: 50%;
            width: fit-content;
            height: fit-content;
            padding: 10px;
          }
        `}
      </style>

      <div className="heading">
        <h2>{title}</h2>
        <div className="logo-container">
          <img src={logo} alt={"pokemon : " + title} />
        </div>
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
