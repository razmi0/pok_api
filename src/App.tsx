import { useEffect, useState } from "react";
import { callAPI } from "./services/fetch";
import { ChartData } from "chart.js";
import { Button, Heading, StatsTable, GlobalStatsTable, Radar } from "./components";
import { options, communDataOptions, labels } from "./components/charts/chartData";
import { typeData } from "./icons";
import { Pokemon } from "./types";
import "./css/App.css";

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

const nStats = labels.length;

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [radarDatasets, setRadarDatasets] = useState<RadarDataset[]>([]);
  const [isOpen, setIsOpen] = useState<boolean[]>(new Array(POKEMONS_LIMIT).fill(false));
  const [isStatHovered, setIsStatHovered] = useState<boolean[][]>(
    Array.from({ length: POKEMONS_LIMIT }, () => Array(nStats).fill(false))
  );

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
              ...communDataOptions,
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

  const handleHoverStats = (id: Pokemon["id"], indexedStat: number) => {
    setIsStatHovered((prev) => {
      const newIsStatHovered = [...prev];
      console.log(newIsStatHovered[id - 1]);
      newIsStatHovered[id - 1][indexedStat] = !newIsStatHovered[id - 1][indexedStat];
      return newIsStatHovered;
    });
  };

  return (
    <>
      {pokemons.length == 0 && <Button onClick={getPokemons} loading={loading} />}
      {pokemons &&
        pokemons.map((pokemon, i) => {
          const { image, name, type, id } = pokemon;
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
                <StatsTable pokemon={pokemon} handleHoverStats={handleHoverStats} id={id} />

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
