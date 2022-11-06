import useAxios from "../hooks/useAxios";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import { PagesContainer } from "../Layout/Pages.styles";
import { swCategories } from "../store/sw-data";
import { useState, useContext } from "react";
import { Error } from "./Category.styles";
import ModalPlanets from "../Layout/ModalPlanets";
import { MyContext } from "../store/context";

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

const initial: PlanetsInterface = {
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

const Planets = () => {
  const { loading, data, error, sortedData } = useAxios<PlanetsInterface>(
    swCategories.planets.url,
    swCategories.planets.pages
  );

  const ctx = useContext(MyContext);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<PlanetsInterface>(initial);

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

  const closeDetails = () => {
    setShowModal(false);
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

  const listing =
    ctx.myValue === "A-Z" ? listingFce(sortedData) : listingFce(data);

  return (
    <PagesContainer>
      {error.isError && <Error>{error.errorMessage}</Error>}
      {loading ? <Loading /> : listing}
      {showModal ? (
        <ModalPlanets details={details} onClose={closeDetails} />
      ) : (
        ""
      )}
    </PagesContainer>
  );
};

export default Planets;
