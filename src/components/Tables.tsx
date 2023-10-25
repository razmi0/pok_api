import { svgStatData } from "./icons";
import {
  Heart,
  Shield,
  SpShield,
  SpSword,
  Speed,
  Sword,
  Icon,
  Weight,
  Height,
  Xp,
} from "./icons/svg";
import type { Pokemon } from "../types";

type StatTableProps = {
  pokemon: Pokemon;
  handleHoverStats: (indexedPokemon: number, indexedStat: number) => void;
  indexedPokemon: number;
};
export const StatsTable = ({ pokemon, handleHoverStats, indexedPokemon }: StatTableProps) => {
  const { hp, attack, defense, specialAttack, specialDefense, speed } = pokemon;
  const statsWithIcons = [
    { stat: hp, icon: <Icon icon={Heart} svgData={svgStatData} /> },
    { stat: attack, icon: <Icon icon={Sword} svgData={svgStatData} /> },
    { stat: specialAttack, icon: <Icon icon={SpSword} svgData={svgStatData} /> },
    { stat: defense, icon: <Icon icon={Shield} svgData={svgStatData} /> },
    { stat: specialDefense, icon: <Icon icon={SpShield} svgData={svgStatData} /> },
    { stat: speed, icon: <Icon icon={Speed} svgData={svgStatData} /> },
  ];

  return (
    <>
      <div className="grid-ctn">
        {statsWithIcons.map(({ stat, icon }, i) => (
          <div
            className="grid-item"
            key={i}
            onMouseEnter={() => handleHoverStats(indexedPokemon, i)}
            onMouseLeave={() => handleHoverStats(indexedPokemon, i)}
          >
            {icon}
            <div className="grid-item-stat">{stat}</div>
          </div>
        ))}
      </div>
      <style>
        {`
        .grid-ctn {
          display: flex;
          flex-direction: row;
          gap: 10px;
          width: 100%;
          height: fit-content;
        }
        .grid-item {
          display: flex;
          flex-direction: column;
          gap: 0.2em;
          justify-content: space-between;
          align-items: center;
          font-size: 15px;
          text-align: center;
        }
      `}
      </style>
    </>
  );
};

export const GlobalStatsTable = ({ pokemon }: { pokemon: Pokemon }) => {
  const { baseXp, height, weight } = pokemon;
  const statWithIcon = [
    { stat: weight, icon: <Icon icon={Weight} svgData={svgStatData} /> },
    { stat: height, icon: <Icon icon={Height} svgData={svgStatData} /> },
    { stat: baseXp, icon: <Icon icon={Xp} svgData={svgStatData} /> },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div className="global-grid-ctn ">
          {statWithIcon.map(({ stat, icon }, i) => (
            <div className="global-grid-item" key={i}>
              {icon}
              <div className="global-grid-item-stat">{stat}</div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
      .global-grid-ctn {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 3fr;
        gap: 10px;
        grid-auto-flow: row;
        width: fit-content;
        height: fit-content;
      }
      .global-grid-item {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        /* justify-content: space-between; */
        align-items: center;
        font-size: 15px;
        text-align: left;
      }
      `}
      </style>
    </>
  );
};
