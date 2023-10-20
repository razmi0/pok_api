import { useState } from "react";
import { callApi } from "./services";
import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { StatsTable, GlobalStatsTable } from "./components/Tables";
import { typeData } from "./icons";
import { Pokemon } from "./types";
import "./App.css";

const POKEMONS_LIMIT = 100;
const POKEMON_OFFSET = 0;

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  const getPokemons = async () => {
    setLoading(true);
    setPokemons(await callApi(POKEMONS_LIMIT, POKEMON_OFFSET));

    setIsOpen(new Array(pokemons.length).fill(false));
    setLoading(false);
  };

  const handleOpen = (index: number) => {
    const newOpen = [...isOpen];
    newOpen[index] = !newOpen[index];
    setIsOpen(newOpen);
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
            <div className="card-ctn" key={id}>
              <div className="card">
                <Heading
                  title={name}
                  color={color}
                  onClick={handleOpen}
                  index={index}
                  isOpen={isOpen[index]}
                />
                <StatsTable pokemon={pokemon} />
                {isOpen[index] && <GlobalStatsTable pokemon={pokemon} />}
              </div>
              {isOpen[index] && (
                <div className="pokemon-ctn">
                  <img src={image} alt={name} loading="lazy" />
                  <div className="tables"></div>
                </div>
              )}
            </div>
          );
        })}
    </>
  );
};

export default App;
