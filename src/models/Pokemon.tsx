export interface PokemonPage {
  count: number,
  next: string,
  previous: string,
  results: {
    name: string,
  }[]
}

export interface Pokemon {
  name: string,
  types: {
    type: {
      name: string
    }
  }[],
  weight: number,
  height: number,
  sprites: {
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
}
