import useAxios from "../hooks/useAxios";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import { PagesContainer } from "../Layout/Pages.styles";
import { swCategories } from "../store/sw-data";
import { useState } from "react";
import ModalFilms from "../Layout/ModalFilms";
import { Error } from "./Category.styles";

export interface FilmsInterface {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

const initial: FilmsInterface = {
  title: "",
  episode_id: 0,
  opening_crawl: "",
  director: "",
  producer: "",
  release_date: "",
};

const Films = () => {
  const { loading, data, error } = useAxios<FilmsInterface>(
    swCategories.films.url,
    swCategories.films.pages
  );

  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<FilmsInterface>(initial);

  const handleClick = (val: FilmsInterface) => {
    setShowModal(true);
    setDetails({
      title: val.title,
      episode_id: val.episode_id,
      opening_crawl: val.opening_crawl,
      director: val.director,
      producer: val.producer,
      release_date: val.release_date,
    });
  };

  const closeDetails = () => {
    setShowModal(false);
  };
  
  const list = data.map((value, index) => (
    <Button
      key={index}
      name={value.title}
      onClick={handleClick.bind(null, value)}
    />
  ));

  return (
    <PagesContainer>
      {error.isError && <Error>{error.errorMessage}</Error>}
      {loading ? <Loading /> : list}
      {showModal ? <ModalFilms details={details} onClose={closeDetails} /> : ""}
    </PagesContainer>
  );
};

export default Films;
