import CategoryTemplate from "./CategoryTemplate";
import Button from "../UI/Button";
import { useState } from "react";
import {
  StarshipsInterface,
  initialStarships,
  swCategStarships,
} from "../store/categories-inits";
import ModalStarships from "../Layout/ModalStarships";

const Starships = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<StarshipsInterface>(initialStarships);

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

  const listingFce = (data: StarshipsInterface[]) => {
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
      url={swCategStarships.url}
      pages={swCategStarships.pages}
    >
      {showModal ? (
        <ModalStarships details={details} onClose={closeDetails} />
      ) : (
        ""
      )}
    </CategoryTemplate>
  );
};

export default Starships;
