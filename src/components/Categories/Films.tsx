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
}

const Films = () => {
  const { loading, data } = useAxios<FilmsInterface>(
    swCategories.films.url,
    swCategories.films.pages
  );

  const [showModal, setShowModal] = useState<boolean>(false);
  const [titleFilm, setTitleFilm] = useState<FilmsInterface>();

  const handleEnter = (val: FilmsInterface) => {
    setShowModal(true);
    setTitleFilm({
      title: val.title,
      episode_id: val.episode_id,
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
      {showModal ? <ModalInfo titleMy={titleFilm!} /> : ""}
    </PagesContainer>
  );
};

export default Films;
