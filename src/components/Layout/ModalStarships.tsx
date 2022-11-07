import { StarshipsInterface } from "../store/categories-inits";
import Modal from "../UI/Modal";
import { ContainerBigger, H1, H2, P } from "./ModalCategory";

interface Props {
  children?: React.ReactNode;
  details: StarshipsInterface;
  onClose: () => void;
}

const ModalStarships = (props: Props) => {
  return (
    <Modal onClose={props.onClose}>
      <ContainerBigger onClick={props.onClose}>        
        <H1>{props.details.name}</H1>  
        <H2>Model</H2>
        <P>{props.details.model}</P>
        <H2>Starship class</H2>
        <P>{props.details.starship_class}</P>
        <H2>Manufacturer</H2>
        <P>{props.details.manufacturer}</P>
        <H2>Cost in credits</H2>
        <P>{props.details.cost_in_credits}</P>
        <H2>Length</H2>
        <P>{props.details.length}</P>
        <H2>Crew</H2>
        <P>{props.details.crew}</P>
        <H2>Passengers</H2>
        <P>{props.details.passengers}</P>
        <H2>Max atmosphering speed</H2>
        <P>{props.details.max_atmosphering_speed}</P>
        <H2>Hyperdrive rating</H2>
        <P>{props.details.hyperdrive_rating}</P>
        <H2>MGLT</H2>
        <P>{props.details.MGLT}</P>
        <H2>Cargo capacity</H2>
        <P>{props.details.cargo_capacity}</P>
        <H2>Consumables</H2>
        <P>{props.details.consumables}</P>
      </ContainerBigger>
    </Modal>
  );
};

export default ModalStarships;
