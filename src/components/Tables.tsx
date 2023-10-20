import { svgStatData } from "../icons";
import { Heart, Shield, SpShield, SpSword, Speed, Sword, Icon } from "../icons/svg";
import type { Pokemon } from "../types";

export const StatsTable = ({ pokemon }: { pokemon: Pokemon }) => {
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
          <div className="grid-item" key={i}>
            {icon}
            <div className="grid-item-stat">{stat}</div>
          </div>
        ))}
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
