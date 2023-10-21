import { useState } from "react";
import { callAPI } from "./services/fetch";
import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { StatsTable, GlobalStatsTable } from "./components/Tables";
import { typeData } from "./icons";
import { Pokemon } from "./types";
import { Radar, data, options } from "./components/Radar";
import "./App.css";

const POKEMONS_LIMIT = 200; // Math.floor(Math.random() * 100)
const POKEMON_OFFSET = Math.floor(Math.random() * 100);
console.log(`limit : ${POKEMONS_LIMIT} offset : ${POKEMON_OFFSET}`);

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isOpen, setIsOpen] = useState<boolean[]>(new Array(POKEMONS_LIMIT).fill(false));

  const getPokemons = async () => {
    setLoading(true);
    setPokemons(await callAPI(POKEMONS_LIMIT, POKEMON_OFFSET));
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
          console.log(type);
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

                {isOpen[index] && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <GlobalStatsTable pokemon={pokemon} />
                    <div
                      style={{
                        width: "max-content",
                      }}
                    >
                      <Radar data={data} options={options} />
                    </div>
                  </div>
                )}
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
