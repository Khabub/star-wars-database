import useAxios from "../hooks/useAxios";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import { PagesContainer } from "../Layout/Pages.styles";
import { swCategories } from "../store/sw-data";
import { useState } from "react";
import ModalPeople from "../Layout/ModalPeople";
import { Error } from "./Category.styles";

export interface PeopleInterface {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: number;
  mass: number;
  skin_color: string;
}

const initial: PeopleInterface = {
  name: "",
  birth_year: "",
  eye_color: "",
  gender: "",
  hair_color: "",
  height: 0,
  mass: 0,
  skin_color: "",
};

const People = () => {
  const { loading, data, error } = useAxios<PeopleInterface>(
    swCategories.people.url,
    swCategories.people.pages
  );

  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<PeopleInterface>(initial);

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

  const closeDetails = () => {
    setShowModal(false);
  };

  const list = data.map((value, index) => (
    <Button
      key={index}
      name={value.name}
      onClick={handleClick.bind(null, value)}
    />
  ));

  return (
    <PagesContainer>
      {error.isError && <Error>{error.errorMessage}</Error>}
      {loading ? <Loading /> : list}
      {showModal ? (
        <ModalPeople details={details} onClose={closeDetails} />
      ) : (
        ""
      )}
    </PagesContainer>
  );
};

export default People;
