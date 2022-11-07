import { PeopleInterface } from "../store/categories-inits";
import Modal from "../UI/Modal";
import { ContainerBigger, H1, H2, P } from "./ModalCategory";

interface Props {
  children?: React.ReactNode;
  details: PeopleInterface;
  onClose: () => void;
}

const ModalPeople = (props: Props) => {
  return (
    <Modal onClose={props.onClose}>
      <ContainerBigger onClick={props.onClose}>
        <div className="headline">
          <H1>{props.details.name}</H1>
        </div>
        <div className="description">
          <H2>Birth year</H2>
          <P>{props.details.birth_year}</P>
          <H2>Eye color</H2>
          <P>{props.details.eye_color}</P>
          <H2>Gender</H2>
          <P>{props.details.gender}</P>
          <H2>Hair color</H2>
          <P>{props.details.hair_color}</P>
          <H2>Height</H2>
          <P>{props.details.mass}</P>
          <H2>Skin color</H2>
          <P>{props.details.skin_color}</P>
        </div>
      </ContainerBigger>
    </Modal>
  );
};

export default ModalPeople;
