import CategoryTemplate from "./CategoryTemplate";
import Button from "../UI/Button";
import { useState } from "react";
import {
  PlanetsInterface,
  initialPlanets,
  swCategPlanets,
} from "../store/categories-inits";
import ModalPlanets from "../Layout/ModalPlanets";

const Planets = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<PlanetsInterface>(initialPlanets);

  const handleClick = (val: PlanetsInterface) => {
    setShowModal(true);
    setDetails({
      name: val.name,
      climate: val.climate,
      diameter: val.diameter,
      rotation_period: val.rotation_period,
      orbital_period: val.orbital_period,
      gravity: val.gravity,
      population: val.population,
      terrain: val.terrain,
      surface_water: val.surface_water,
    });
  };

  const listingFce = (data: PlanetsInterface[]) => {
    const list = data.map((value, index) => (
      <Button
        key={index}
        name={value.name}
        onClick={handleClick.bind(null, value)}
      />
    ));
    return list;
  };

  const closeDetails = () => {
    setShowModal(false);
  };

  return (
    <CategoryTemplate
      listingFce={listingFce}
      url={swCategPlanets.url}
      pages={swCategPlanets.pages}
    >
      {showModal ? (
        <ModalPlanets details={details} onClose={closeDetails} />
      ) : (
        ""
      )}
    </CategoryTemplate>
  );
};

export default Planets;
