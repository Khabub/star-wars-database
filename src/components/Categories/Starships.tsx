import useAxios from "../hooks/useAxios";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import { PagesContainer } from "../Layout/Pages.styles";
import { swCategories } from "../store/sw-data";
import { useState } from "react";
import { Error } from "./Category.styles";
import ModalStarships from "../Layout/ModalStarships";

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

const initial: StarshipsInterface = {
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

const Starships = () => {
  const { loading, data, error } = useAxios<StarshipsInterface>(
    swCategories.starships.url,
    swCategories.starships.pages
  );

  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<StarshipsInterface>(initial);

  const handleClick = (val: StarshipsInterface) => {
    setShowModal(true);
    setDetails({
      name: val.name,
      model: val.model,
      starship_class: val.starship_class,
      manufacturer: val.manufacturer,
      cost_in_credits: val.cost_in_credits,
      length: val.length,
      crew: val.crew,
      passengers: val.passengers,
      max_atmosphering_speed: val.max_atmosphering_speed,
      hyperdrive_rating: val.hyperdrive_rating,
      MGLT: val.MGLT,
      cargo_capacity: val.cargo_capacity,
      consumables: val.consumables, 
    });
  };

  const closeDetails = () => {
    setShowModal(false);
  };

  const list = data.map((value, index) => (
    <Button key={index} name={value.name} onClick={handleClick.bind(null, value)}/>
  ));

  return <PagesContainer>{error.isError && <Error>{error.errorMessage}</Error>}
  {loading ? <Loading /> : list}
  {showModal ? (
    <ModalStarships details={details} onClose={closeDetails} />
  ) : (
    ""
  )}</PagesContainer>;
};

export default Starships;
