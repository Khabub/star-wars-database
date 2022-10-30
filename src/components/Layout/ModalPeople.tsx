import styled from "styled-components";
import { PeopleInterface } from "../Categories/People";
import Modal from "../UI/Modal";

interface Props {
  children?: React.ReactNode;
  details: PeopleInterface;
  onClose: () => void;
}

const ModalPeople = (props: Props) => {
  return (
    <Modal onClose={props.onClose}>
      <Container onClick={props.onClose}>
        <H1>Name: {props.details.name}</H1>        
        <H1>Birth year: {props.details.birth_year}</H1>        
        <H1>Eye color: {props.details.eye_color}</H1>        
      </Container>
    </Modal>
  );
};

export default ModalPeople;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h5`
  color: orange;
`;
