import CategoryTemplate from "./CategoryTemplate";
import Button from "../UI/Button";
import { useState } from "react";
import {
  PeopleInterface,
  initialPeople,
  swCategPeople,
} from "../store/categories-inits";
import ModalPeople from "../Layout/ModalPeople";

const People = () => {
  const [details, setDetails] = useState<PeopleInterface>(initialPeople);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = (val: PeopleInterface) => {
    setShowModal(true);
    setDetails({
      name: val.name,
      birth_year: val.birth_year,
      eye_color: val.eye_color,
      gender: val.gender,
      hair_color: val.hair_color,
      height: val.height,
      mass: val.mass,
      skin_color: val.skin_color,
    });
  };

  const listingFce = (data: PeopleInterface[]) => {
    const list = data.map((value, index) => (
      <Button
        key={index}
        name={value.name}
        onClick={handleClick.bind(null, value)}
      />
    ));
    return list;
  };

  const closeDetails = () => {
    setShowModal(false);
  };

  return (
    <CategoryTemplate
      listingFce={listingFce}
      url={swCategPeople.url}
      pages={swCategPeople.pages}
    >
      {showModal ? (
        <ModalPeople details={details} onClose={closeDetails} />
      ) : (
        ""
      )}
    </CategoryTemplate>
  );
};

export default People;
