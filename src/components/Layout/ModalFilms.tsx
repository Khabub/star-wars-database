import { FilmsInterface } from "../store/categories-inits";
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
        <div className="headline">
          <H1>{props.details.title}</H1>
        </div>
        <div className="description">
          <H2>Episode</H2>
          <P>{props.details.episode_id}</P>
          <H2 className="crawlhide">Opening crawl</H2>
          <P className="crawlhide">{props.details.opening_crawl}</P>
          <H2>Director</H2>
          <P>{props.details.director}</P>
          <H2>Producer</H2>
          <P>{props.details.producer}</P>
          <H2>Release</H2>
          <P>{props.details.release_date}</P>
        </div>
      </ContainerBigger>
    </Modal>
  );
};

export default ModalFilms;
