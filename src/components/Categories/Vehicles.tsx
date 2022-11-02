import useAxios from "../hooks/useAxios";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import { PagesContainer } from "../Layout/Pages.styles";
import { swCategories } from "../store/sw-data";
import { useState } from "react";
import { Error } from "./Category.styles";
import ModalVehicles from "../Layout/ModalVehicles";

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

const initial: VehiclesInterface = {
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

const Vehicles = () => {
  const { loading, data, error } = useAxios<VehiclesInterface>(
    swCategories.vehicles.url,
    swCategories.vehicles.pages
  );

  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<VehiclesInterface>(initial);

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

  const closeDetails = () => {
    setShowModal(false);
  };

  const list = data.map((value, index) => (
    <Button
      key={index}
      name={value.name}
      onClick={handleClick.bind(null, value)}
    />
  ));

  return (
    <PagesContainer>
      {error.isError && <Error>{error.errorMessage}</Error>}
      {loading ? <Loading /> : list}
      {showModal ? (
        <ModalVehicles details={details} onClose={closeDetails} />
      ) : (
        ""
      )}
    </PagesContainer>
  );
};

export default Vehicles;
