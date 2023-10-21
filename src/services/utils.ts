import type { Pokemon } from "../types";

export const buildPokemon = (data: any): Pokemon => {
  return {
    name: data.name,
    baseXp: data.base_experience,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    specialAttack: data.stats[3].base_stat,
    specialDefense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
    type: data.types[0].type.name,
    // ability: data.abilities[0].ability.name,
    height: data.height,
    weight: data.weight,
    image: data.sprites.other["official-artwork"].front_default,
    id: data.id,
  };
};

export class Progress {
  private progress: number;

  constructor(private limit: number) {
    this.limit = limit;
    this.progress = 0;
  }

  reset() {
    this.progress = 0;
  }
  updateStatus() {
    this.progress = 0;
  }
  updateProgress() {
    this.progress++;
  }
  private normalize() {
    return (this.progress * 100) / this.limit;
  }
  getProgress() {
    return this.normalize();
  }
}
