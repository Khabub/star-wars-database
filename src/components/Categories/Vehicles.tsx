import CategoryTemplate from "./CategoryTemplate";
import Button from "../UI/Button";
import { useState } from "react";
import {
  VehiclesInterface,
  initialVehicles,
  swCategVehicles,
} from "../store/categories-inits";
import ModalVehicles from "../Layout/ModalVehicles";

const Vehicles = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<VehiclesInterface>(initialVehicles);

  const handleClick = (val: VehiclesInterface) => {
    setShowModal(true);
    setDetails({
      name: val.name,
      model: val.model,
      vehicle_class: val.vehicle_class,
      manufacturer: val.manufacturer,
      length: val.length,
      cost_in_credits: val.cost_in_credits,
      crew: val.crew,
      passengers: val.passengers,
      max_atmosphering_speed: val.max_atmosphering_speed,
      cargo_capacity: val.cargo_capacity,
      consumables: val.consumables,
    });
  };

  const listingFce = (data: VehiclesInterface[]) => {
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
      url={swCategVehicles.url}
      pages={swCategVehicles.pages}
    >
      {showModal ? (
        <ModalVehicles details={details} onClose={closeDetails} />
      ) : (
        ""
      )}
    </CategoryTemplate>
  );
};

export default Vehicles;
