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

export const swCategories: Record<SwCategory, SwItems> = {
  planets: {
    url: "https://swapi.dev/api/planets/",
    pages: 6,
  },

  species: {
    url: "https://swapi.dev/api/species/",
    pages: 4,
  },

  people: {
    url: "https://swapi.dev/api/people/",
    pages: 9,
  },

  films: {
    url: "https://swapi.dev/api/films/",
    pages: 2,
  },

  starships: {
    url: "https://swapi.dev/api/starships/",
    pages: 4,
  },

  vehicles: {
    url: "https://swapi.dev/api/vehicles/",
    pages: 4,
  },
};
