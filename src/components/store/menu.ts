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
    name: "Planets",
    image: planetsImage,
  },
  {
    name: "Species",
    image: speciesImage,
  },
  {
    name: "People",
    image: peopleImage,
  },
  {
    name: "Films",
    image: moviesImage,
  },
  {
    name: "Starships",
    image: starshipsImage,
  },
  {
    name: "Vehicles",
    image: vehiclesImage,
  },
];
