import type { Pokemon } from "../types";

export const StatsTable = ({ pokemon }: { pokemon: Pokemon }) => {
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

export const GlobalStatsTable = ({ pokemon }: { pokemon: Pokemon }) => {
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
