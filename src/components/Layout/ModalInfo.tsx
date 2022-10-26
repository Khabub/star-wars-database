import styled from "styled-components";
import { FilmsInterface } from "../Categories/Films";
import Modal from "../UI/Modal";

interface Props {
  children?: React.ReactNode;
  films: FilmsInterface;
}

const ModalInfo = (props: Props) => {
  return (
    <Modal>
      <Container>
        <H1>{props.films.title}</H1>
        <H1>Epizoda: {props.films.episode_id}</H1>
        <H1>Text: {props.films.opening_crawl}</H1>
      </Container>
    </Modal>
  );
};

export default ModalInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h5`
  color: orange;
`;
