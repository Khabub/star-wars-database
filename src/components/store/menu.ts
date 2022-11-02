import planetsImage from "../../assets/sw-planets.jpg";
import speciesImage from "../../assets/sw-species.png";
import peopleImage from "../../assets/sw-people.png";
import moviesImage from "../../assets/sw-movies-unsplash.jpg";
import starshipsImage from "../../assets/sw-starships.png";
import vehiclesImage from "../../assets/sw-vehicles.png";

interface MenuButtons {
  name: string;
  image: string;
}

export const menuButtons: MenuButtons[] = [
  {
    name: "planets",
    image: planetsImage,
  },
  {
    name: "species",
    image: speciesImage,
  },
  {
    name: "people",
    image: peopleImage,
  },
  {
    name: "films",
    image: moviesImage,
  },
  {
    name: "starships",
    image: starshipsImage,
  },
  {
    name: "vehicles",
    image: vehiclesImage,
  },
];
