import useAxios from "../hooks/useAxios";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import { PagesContainer } from "../Layout/Pages.styles";
import { swCategories } from "../store/sw-data";
import { useState, useContext } from "react";
import { Error } from "./Category.styles";
import ModalSpecies from "../Layout/ModalSpecies";
import { MyContext } from "../store/context";

export interface SpeciesInterface {
  name: string;
  classification: string;
  designation: string;
  average_height: number;
  average_lifespan: number;
  language: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
}

const initial: SpeciesInterface = {
  name: "",
  classification: "",
  designation: "",
  average_height: 0,
  average_lifespan: 0,
  language: "",
  eye_colors: "",
  hair_colors: "",
  skin_colors: "",
};

const Species = () => {
  const { loading, data, error, sortedData } = useAxios<SpeciesInterface>(
    swCategories.species.url,
    swCategories.species.pages
  );

  const ctx = useContext(MyContext);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<SpeciesInterface>(initial);

  const handleClick = (val: SpeciesInterface) => {
    setShowModal(true);
    setDetails({
      name: val.name,
      classification: val.classification,
      designation: val.designation,
      average_height: val.average_height,
      average_lifespan: val.average_lifespan,
      language: val.language,
      eye_colors: val.eye_colors,
      hair_colors: val.hair_colors,
      skin_colors: val.skin_colors,
    });
  };

  const closeDetails = () => {
    setShowModal(false);
  };

  const listingFce = (data: SpeciesInterface[]) => {
    const list = data.map((value, index) => (
      <Button
        key={index}
        name={value.name}
        onClick={handleClick.bind(null, value)}
      />
    ));
    return list;
  };

  const listing =
    ctx.myValue === "A-Z" ? listingFce(sortedData) : listingFce(data);

  return (
    <PagesContainer>
      {" "}
      {error.isError && <Error>{error.errorMessage}</Error>}
      {loading ? <Loading /> : listing}
      {showModal ? (
        <ModalSpecies details={details} onClose={closeDetails} />
      ) : (
        ""
      )}
    </PagesContainer>
  );
};

export default Species;
