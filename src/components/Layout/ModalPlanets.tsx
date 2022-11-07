import { PlanetsInterface } from "../store/categories-inits";
import Modal from "../UI/Modal";
import { H1, H2, P, ContainerBigger } from "./ModalCategory";

interface Props {
  children?: React.ReactNode;
  details: PlanetsInterface;
  onClose: () => void;
}

const ModalPlanets = (props: Props) => {
  return (
    <Modal onClose={props.onClose}>
      <ContainerBigger onClick={props.onClose}>
        <div className="headline">
          <H1>{props.details.name}</H1>
        </div>
        <div className="description">
          <H2>Climate</H2>
          <P>{props.details.climate}</P>
          <H2>Diameter</H2>
          <P>{props.details.diameter}</P>
          <H2>Rotation period</H2>
          <P>{props.details.rotation_period}</P>
          <H2>Orbital period</H2>
          <P>{props.details.orbital_period}</P>
          <H2>Gravity</H2>
          <P>{props.details.gravity}</P>
          <H2>Population</H2>
          <P>{props.details.population}</P>
          <H2>Terrain</H2>
          <P>{props.details.terrain}</P>
          <H2>Surface water</H2>
          <P>{props.details.surface_water}</P>
        </div>
      </ContainerBigger>
    </Modal>
  );
};

export default ModalPlanets;
