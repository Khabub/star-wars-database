interface SwItems {
  url: string;
  pages: number;
}

type SwCategory =
  | "planets"
  | "species"
  | "people"
  | "films"
  | "starships"
  | "vehicles";

//const urlMain: string = "https://swapi.py4e.com/api/";
const urlMain: string = "https://swapi.dev/api";

// const urlMain = "../../assets/films.json";

export const swCategories: Record<SwCategory, SwItems> = {
  planets: {
    url: `${urlMain}/planets/`,
    pages: 6,
  },

  species: {
    url: `${urlMain}/species/`,
    pages: 4,
  },

  people: {
    url: `${urlMain}/people/`,
    pages: 9,
  },

  films: {
    url: `${urlMain}/films/`,
    pages: 1,
  },

  starships: {
    url: `${urlMain}/starships/`,
    pages: 4,
  },

  vehicles: {
    url: `${urlMain}/vehicles/`,
    pages: 4,
  },
};
