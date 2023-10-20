import { svgStatData } from "../icons";
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
} from "../icons/svg";
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
            <div className="grid-item-stat ">{stat}</div>
          </div>
        ))}
      </div>
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
    </>
  );
};
