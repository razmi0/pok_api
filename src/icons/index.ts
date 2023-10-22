type TypeData = {
  [key: string]: {
    color: string;
  };
};

const white = "#ffffffde";

// Color by pokemon type families
export const typeData: TypeData = {
  bug: {
    color: "#44b820",
  },
  electric: {
    color: "#F8D030",
  },
  fire: {
    color: "#F08030",
  },
  grass: {
    color: "#78C850",
  },
  water: {
    color: "#6890F0",
  },
  normal: {
    color: "#A8A878",
  },
  poison: {
    color: "#A040A0",
  },
  ground: {
    color: "#E0C068",
  },
  flying: {
    color: "#A890F0",
  },
  psychic: {
    color: "#F85888",
  },
  ghost: {
    color: "#705898",
  },
  rock: {
    color: "#B8A038",
  },
  fairy: {
    color: "#EE99AC",
  },
  fighting: {
    color: "#C03028",
  },
  ice: {
    color: "#98D8D8",
  },
  dragon: {
    color: "#7038F8",
  },
  dark: {
    color: "#4a4a4a",
  },
  steel: {
    color: "#B8B8D0",
  },
};

export type IconNameType = "heart" | "sword" | "shield" | "spSword" | "spShield" | "speed" | string;
export type SvgStatDataType = {
  size: [string, string];
  filter: [string, string];
  scale: string;
  transition: string;
  icons: {
    [key in IconNameType]: {
      color: string;
      stat: string;
    };
  };
};

export const svgStatData: SvgStatDataType = {
  size: ["24px", "24px"],
  filter: ["5px", "3px"],
  scale: "1.1",
  transition: "all 0.2s ease-in-out",
  icons: {
    heart: {
      color: "#ff5959",
      stat: "Hp",
    },
    sword: {
      color: "#f08030",
      stat: "Attack",
    },
    shield: {
      color: "#f8d030",
      stat: "Defense",
    },
    spsword: {
      color: "#6890f0",
      stat: "Special-attack",
    },
    spshield: {
      color: "#78c850",
      stat: "Special-defense",
    },
    speed: {
      color: "#f85888",
      stat: "Speed",
    },
    weight: {
      color: white,
      stat: "Weight",
    },
    height: {
      color: white,
      stat: "Height",
    },
    xp: {
      color: white,
      stat: "Base experience",
    },
  },
};
