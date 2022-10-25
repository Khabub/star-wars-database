import useAxios from "../hooks/useAxios";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import { PagesContainer } from "../Layout/Pages.styles";
import { swCategories } from "../store/sw-data";
import { useState } from "react";
import ModalInfo from "../Layout/ModalInfo";

interface FilmsInterface {
  title: string;
}

const Films = () => {
  const { loading, data } = useAxios<FilmsInterface>(
    swCategories.films.url,
    swCategories.films.pages
  );

  const [showModal, setShowModal] = useState<boolean>(false);
  const [titleFilm, setTitleFilm] = useState<string>("");

  const handleEnter = (val: string) => {
    setShowModal(true);
    setTitleFilm(val);
  };

  const handleLeave = () => {
    setShowModal(false);
  };

  const list = data.map((value, index) => (
    <Button
      key={index}
      name={value.title}
      onEnter={handleEnter.bind(null, value.title)}
      onLeave={handleLeave.bind(null, value.title)}
    />
  ));

  return (
    <PagesContainer>
      {loading ? <Loading /> : list}
      {showModal ? <ModalInfo title={titleFilm} /> : ""}
    </PagesContainer>
  );
};

export default Films;
