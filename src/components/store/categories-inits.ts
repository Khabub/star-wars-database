import { swCategories } from "../store/sw-data";

interface SWCategories {
  url: string;
  pages: number;
}

// Films inits
export interface FilmsInterface {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

export const initialFilms: FilmsInterface = {
  title: "",
  episode_id: 0,
  opening_crawl: "",
  director: "",
  producer: "",
  release_date: "",
};

export const swCategFilms: SWCategories = {
  url: swCategories.films.url,
  pages: swCategories.films.pages,
};


// People inits
export interface PeopleInterface {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
}

export const initialPeople: PeopleInterface = {
  name: "",
  birth_year: "",
  eye_color: "",
  gender: "",
  hair_color: "",
  height: "",
  mass: "",
  skin_color: "",
};

export const swCategPeople: SWCategories = {
  url: swCategories.people.url,
  pages: swCategories.people.pages,
};


// Planets inits
export interface PlanetsInterface {
  name: string;
  climate: string;
  diameter: number;
  rotation_period: number;
  orbital_period: number;
  gravity: number;
  population: number;
  terrain: string;
  surface_water: number;
}

export const initialPlanets: PlanetsInterface = {
  name: "",
  climate: "",
  diameter: 0,
  rotation_period: 0,
  orbital_period: 0,
  gravity: 0,
  population: 0,
  terrain: "",
  surface_water: 0,
};

export const swCategPlanets: SWCategories = {
  url: swCategories.planets.url,
  pages: swCategories.planets.pages,
};


// Species inits
export interface SpeciesInterface {
  name: string;
  classification: string;
  designation: string;
  average_height: number;
  average_lifespan: number;
  language: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
}

export const initialSpecies: SpeciesInterface = {
  name: "",
  classification: "",
  designation: "",
  average_height: 0,
  average_lifespan: 0,
  language: "",
  eye_colors: "",
  hair_colors: "",
  skin_colors: "",
};

export const swCategSpecies: SWCategories = {
  url: swCategories.species.url,
  pages: swCategories.species.pages,
};


// Starships inits
export interface StarshipsInterface {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  crew: number;
  passengers: number;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: number;
  consumables: string;  
}

export const initialStarships: StarshipsInterface = {
  name: "",
  model: "",
  starship_class: "",
  manufacturer: "",
  cost_in_credits: 0,
  length: 0,
  crew: 0,
  passengers: 0,
  max_atmosphering_speed: "",
  hyperdrive_rating: "",
  MGLT: "",
  cargo_capacity: 0,
  consumables: "",  
}

export const swCategStarships: SWCategories = {
  url: swCategories.starships.url,
  pages: swCategories.starships.pages,
};


// Vehicles inits
export interface VehiclesInterface {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: number;
  cost_in_credits: number;
  crew: number;
  passengers: number;
  max_atmosphering_speed: number;
  cargo_capacity: number;
  consumables: string;
}

export const initialVehicles: VehiclesInterface = {
  name: "",
  model: "",
  vehicle_class: "",
  manufacturer: "",
  length: 0,
  cost_in_credits: 0,
  crew: 0,
  passengers: 0,
  max_atmosphering_speed: 0,
  cargo_capacity: 0,
  consumables: "",
};

export const swCategVehicles: SWCategories = {
  url: swCategories.vehicles.url,
  pages: swCategories.vehicles.pages,
};