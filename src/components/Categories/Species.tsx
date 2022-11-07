import CategoryTemplate from "./CategoryTemplate";
import Button from "../UI/Button";
import { useState } from "react";
import {
  SpeciesInterface,
  initialSpecies,
  swCategSpecies,
} from "../store/categories-inits";
import ModalSpecies from "../Layout/ModalSpecies";

const Species = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<SpeciesInterface>(initialSpecies);

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

  const closeDetails = () => {
    setShowModal(false);
  };

  return (
    <CategoryTemplate
      listingFce={listingFce}
      url={swCategSpecies.url}
      pages={swCategSpecies.pages}
    >
      {showModal ? (
        <ModalSpecies details={details} onClose={closeDetails} />
      ) : (
        ""
      )}
    </CategoryTemplate>
  );
};

export default Species;
