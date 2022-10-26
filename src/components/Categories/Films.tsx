import useAxios from "../hooks/useAxios";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import { PagesContainer } from "../Layout/Pages.styles";
import { swCategories } from "../store/sw-data";
import { useState } from "react";
import ModalInfo from "../Layout/ModalInfo";

export interface FilmsInterface {
  title: string;
  episode_id: number;
  opening_crawl: string;
}

const initial: FilmsInterface = {
  title: "",
  episode_id: 0,
  opening_crawl: "",
}

const Films = () => {
  const { loading, data } = useAxios<FilmsInterface>(
    swCategories.films.url,
    swCategories.films.pages
  );

  const [showModal, setShowModal] = useState<boolean>(false);
  const [films, setFilms] = useState<FilmsInterface>(initial);

  const handleEnter = (val: FilmsInterface) => {
    setShowModal(true);
    setFilms({
      title: val.title,
      episode_id: val.episode_id,
      opening_crawl: val.opening_crawl,
    });
  };

  const handleLeave = () => {
    setShowModal(false);
  };

  const list = data.map((value, index) => (
    <Button
      key={index}
      name={value.title}
      onEnter={handleEnter.bind(null, value)}
      onLeave={handleLeave.bind(null, value)}
    />
  ));

  return (
    <PagesContainer>
      {loading ? <Loading /> : list}
      {showModal ? <ModalInfo films={films} /> : ""}
    </PagesContainer>
  );
};

export default Films;
