import CategoryTemplate from "./CategoryTemplate";
import Button from "../UI/Button";
import { useState } from "react";
import {
  FilmsInterface,
  initialFilms,
  swCategFilms,
} from "../store/categories-inits";
import ModalFilms from "../Layout/ModalFilms";

const Films = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<FilmsInterface>(initialFilms);

  // Show modal window and set data from database to variables
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

  // Assign mapped data to variable
  const listingFce = (data: FilmsInterface[]) => {
    const list = data.map((value, index) => (
      <Button
        key={index}
        name={value.title}
        onClick={handleClick.bind(null, value)}
      />
    ));
    return list;
  };

  // Hide modal window
  const closeDetails = () => {
    setShowModal(false);
  };

  return (
    <CategoryTemplate
      listingFce={listingFce}
      url={swCategFilms.url}
      pages={swCategFilms.pages}
    >
      {showModal ? <ModalFilms details={details} onClose={closeDetails} /> : ""}
    </CategoryTemplate>
  );
};

export default Films;
