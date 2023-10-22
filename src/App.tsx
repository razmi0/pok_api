import { useEffect, useState } from "react";
import { callAPI } from "./services/fetch";
import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { StatsTable, GlobalStatsTable } from "./components/Tables";
import { typeData } from "./icons";
import { Pokemon } from "./types";
import { Radar, options } from "./components/Radar";
import "./css/App.css";
import { ChartData } from "chart.js";

type RadarDataset = {
  labels: string[];
  datasets: [
    {
      data: number[];
      backgroundColor: string;
      hitRadius: number;
      pointRadius: number;
      pointHoverRadius: number;
      tension: number;
    }
  ];
};

const POKEMONS_LIMIT = 10; // max has to be the count
const POKEMON_OFFSET = Math.floor(Math.random() * 100);

const dataOptions = {
  hitRadius: 10,
  pointRadius: 0,
  pointHoverRadius: 3,
  tension: 0.1,
};
const labels = ["Hp", "Attack", "Defense", "Sp.Attack", "Sp.Defense", "Speed"];

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [radarDatasets, setRadarDatasets] = useState<RadarDataset[]>([]); // data.datasets.push({})
  const [isOpen, setIsOpen] = useState<boolean[]>(new Array(POKEMONS_LIMIT).fill(false));

  useEffect(() => {
    setRadarDatasets(
      pokemons.map((pokemon) => {
        const { hp, attack, defense, specialAttack, specialDefense, speed, type } = pokemon;
        return {
          labels,
          datasets: [
            {
              data: [hp, attack, defense, specialAttack, specialDefense, speed],
              backgroundColor: typeData[type].color + "b0" ?? "#e8e8e8b0",
              ...dataOptions,
            },
          ],
        };
      })
    );
  }, [pokemons]);

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
        pokemons.map((pokemon, i) => {
          const { image, name, type } = pokemon;
          const color = typeData[type].color;
          const radarData: ChartData<"radar"> = {
            ...radarDatasets[i],
          };

          return (
            <div className="card-ctn" key={i}>
              <div className="card">
                <Heading
                  title={name}
                  color={color}
                  onClick={handleOpen}
                  index={i}
                  isOpen={isOpen[i]}
                />
                <StatsTable pokemon={pokemon} />

                {isOpen[i] && (
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
                      <Radar data={radarData} options={options} />
                    </div>
                  </div>
                )}
              </div>
              {isOpen[i] && (
                <div className="pokemon-ctn">
                  <img src={image} alt={name} loading="lazy" />
                </div>
              )}
            </div>
          );
        })}
    </>
  );
};

export default App;
