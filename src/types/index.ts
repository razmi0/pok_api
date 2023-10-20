export type PokemonsResult = {
  name: string;
  url: string;
}; //: Pick<PokemonsResult, "url">[]

export type Pokemon = {
  name: string;
  baseXp: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  type: string;
  ability?: string;
  height: number;
  weight: number;
  image: string;
  id: number;
};
