import { FilmsInterface } from "../Categories/Films";
import Modal from "../UI/Modal";
import { H1, H2, P, ContainerBigger } from "./ModalCategory";

interface Props {
  children?: React.ReactNode;
  details: FilmsInterface;
  onClose: () => void;
}

const ModalFilms = (props: Props) => {
  return (
    <Modal onClose={props.onClose}>
      <ContainerBigger onClick={props.onClose}>
        <H1>{props.details.title}</H1>
        <H2>Episode</H2>
        <P>{props.details.episode_id}</P>
        <H2>Opening crawl</H2>
        <P>{props.details.opening_crawl}</P>
        <H2>Director</H2>
        <P>{props.details.director}</P>
        <H2>Producer</H2>
        <P>{props.details.producer}</P>
        <H2>Release</H2>
        <P>{props.details.release_date}</P>
      </ContainerBigger>
    </Modal>
  );
};

export default ModalFilms;
