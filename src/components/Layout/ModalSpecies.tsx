import { SpeciesInterface } from "../Categories/Species";
import Modal from "../UI/Modal";
import { Container, H1, H2, P } from "./ModalCategory";

interface Props {
  children?: React.ReactNode;
  details: SpeciesInterface;
  onClose: () => void;
}

const ModalSpecies = (props: Props) => {
  return (
    <Modal onClose={props.onClose}>
      <Container onClick={props.onClose}>        
        <H1>{props.details.name}</H1>  
        <H2>Classification</H2>
        <P>{props.details.classification}</P>
        <H2>Designation</H2>
        <P>{props.details.designation}</P>
        <H2>Average height</H2>
        <P>{props.details.average_height}</P>
        <H2>Average lifespan</H2>
        <P>{props.details.average_lifespan}</P>
        <H2>Language</H2>
        <P>{props.details.language}</P>
        <H2>Eye colors</H2>
        <P>{props.details.eye_colors}</P>
        <H2>Hair colors</H2>
        <P>{props.details.hair_colors}</P>
        <H2>Skin colors</H2>
        <P>{props.details.skin_colors}</P>
      </Container>
    </Modal>
  );
};

export default ModalSpecies;
