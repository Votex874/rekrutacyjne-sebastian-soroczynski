export interface SwapiSkywalkersResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: [
    {
      name: string;
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      homeworld: string;
      films: string;
      species: string;
      vehicles: string;
      starships: string;
      created: string;
      edited: string;
      url: string;
    },
    {
      name: string;
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      homeworld: string;
      films: string;
      species: string;
      vehicles: string;
      starships: string;
      created: string;
      edited: string;
      url: string;
    },
    {
      name: string;
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      homeworld: string;
      films: string;
      species: string;
      vehicles: string;
      starships: string;
      created: string;
      edited: string;
      url: string;
    }
  ]
}

export interface Interface {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string;
  created: string;
  edited: string;
  url: string;
}

export interface SwapiSkywalkersResults {
  results: Skywalker
}

