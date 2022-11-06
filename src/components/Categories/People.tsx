import CategoryTemplate from "./CategoryTemplate";
import ModalPeople from "../Layout/ModalPeople";
import Button from "../UI/Button";
import { useState } from "react";
import { swCategories } from "../store/sw-data";

export interface PeopleInterface {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
}

const initial: PeopleInterface = {
  name: "",
  birth_year: "",
  eye_color: "",
  gender: "",
  hair_color: "",
  height: "",
  mass: "",
  skin_color: "",
};

interface SWCategories {
  url: string;
  pages: number;  
}

const swCateg: SWCategories = {
  url: swCategories.people.url,
  pages: swCategories.people.pages,
}

const People = () => {
  const [details, setDetails] = useState<PeopleInterface>(initial);
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
    <CategoryTemplate listingFce={listingFce} url={swCateg.url} pages={swCateg.pages}>
      {showModal ? (
        <ModalPeople details={details} onClose={closeDetails} />
      ) : (
        ""
      )}
    </CategoryTemplate>
  );
};

export default People;
