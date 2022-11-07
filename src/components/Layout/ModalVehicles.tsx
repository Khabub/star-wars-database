import { VehiclesInterface } from "../store/categories-inits";
import Modal from "../UI/Modal";
import { ContainerBigger, H1, H2, P } from "./ModalCategory";

interface Props {
  children?: React.ReactNode;
  details: VehiclesInterface;
  onClose: () => void;
}

const ModalVehicles = (props: Props) => {
  return (
    <Modal onClose={props.onClose}>
      <ContainerBigger onClick={props.onClose}>
        <div className="headline">
          <H1>{props.details.name}</H1>
        </div>
        <div className="description">
          <H2>Model</H2>
          <P>{props.details.model}</P>
          <H2>Vehicle class</H2>
          <P>{props.details.vehicle_class}</P>
          <H2>Manufacturer</H2>
          <P>{props.details.manufacturer}</P>
          <H2>Length</H2>
          <P>{props.details.length}</P>
          <H2>Cost in credits</H2>
          <P>{props.details.cost_in_credits}</P>
          <H2>Crew</H2>
          <P>{props.details.crew}</P>
          <H2>Passengers</H2>
          <P>{props.details.passengers}</P>
          <H2>Max atmospering speed</H2>
          <P>{props.details.max_atmosphering_speed}</P>
          <H2>Cargo capacity</H2>
          <P>{props.details.cargo_capacity}</P>
          <H2>Consumables</H2>
          <P>{props.details.consumables}</P>
        </div>
      </ContainerBigger>
    </Modal>
  );
};

export default ModalVehicles;
