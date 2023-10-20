import { useState } from "react";
import { callApi, Pokemon } from "./services";
import { Loader } from "./components/Loader";
import { Eye } from "./components/Eye";
import { typeData } from "./icons";
import "./App.css";

const POKEMONS_LIMIT = 100;
const POKEMON_OFFSET = 0;

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [open, setOpen] = useState<boolean[]>([]);

  const getPokemons = async () => {
    setLoading(true);
    setPokemons(await callApi(POKEMONS_LIMIT, POKEMON_OFFSET));
    setOpen(new Array(pokemons.length).fill(false));
    setLoading(false);
  };

  const handleOpen = (index: number) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
    <>
      {pokemons.length == 0 && <Button onClick={getPokemons} loading={loading} />}
      {pokemons &&
        pokemons.map((pokemon) => {
          const { id, type, image, name } = pokemon;
          const color = typeData[type].color;
          const index = id - 1;

          return (
            <div key={id}>
              <Heading
                title={name}
                color={color}
                onClick={handleOpen}
                index={index}
                open={open[index]}
              />
              {open[index] && (
                <div className="pokemon-ctn">
                  <div className="tables">
                    <GlobalStatsTable pokemon={pokemon} />
                    <StatsTable pokemon={pokemon} />
                  </div>
                  <img src={image} alt={name} />
                </div>
              )}
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
  onClick: (id: number) => void;
  open: boolean;
  index: number;
};
const Heading = ({ title, color, onClick, open, index }: HeadingProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <div
      className="heading"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => onClick(index)}
      style={{
        cursor: "pointer",
        filter: isHovering ? `drop-shadow(0px 0px 10px ${color})` : `none`,
      }}
    >
      <Eye open={open} color={color} />
      <h2 style={{ color: color }}>{title}</h2>
    </div>
  );
};
const StatsTable = ({ pokemon }: { pokemon: Pokemon }) => {
  const { hp, attack, defense, specialAttack, specialDefense, speed } = pokemon;

  return (
    <>
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
      <div className="global-grid-ctn">
        <div className="global-grid-item">{baseXp}</div>
        <div className="global-grid-item">{height}</div>
        <div className="global-grid-item">{weight}</div>
      </div>
    </>
  );
};

export default App;
