import styled from "styled-components";
import { FilmsInterface } from "../Categories/Films";
import Modal from "../UI/Modal";

interface Props {
  children?: React.ReactNode;
  details: FilmsInterface;
  onClose: () => void;
}

const ModalFilms = (props: Props) => {
  return (
    <Modal onClose={props.onClose}>
      <Container>
        <H1>{props.details.title}</H1>
        <H1>Epizoda: {props.details.episode_id}</H1>
        <H1>Text: {props.details.opening_crawl}</H1>
        <H1>Director: {props.details.director}</H1>
        <H1>Producer: {props.details.producer}</H1>
        <H1>Release: {props.details.release_date}</H1>
      </Container>
    </Modal>
  );
};

export default ModalFilms;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h5`
  color: orange;
`;
