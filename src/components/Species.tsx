import useAxios from "./hooks/useAxios";
import Loading from "./UI/Loading";
import Button from "./UI/Button";
import { PagesContainer } from "./Pages.styles";
import { swCategories } from "./store/sw-data";

interface SpeciesInterface {
  name: string;
  language: string;
}

const Species = () => {
  const { loading, data } = useAxios<SpeciesInterface>(
    swCategories.species.url,
    swCategories.species.pages
  );

  const list = data.map((value, index) => (
    <Button key={index} name={value.name} />
  ));

  return <PagesContainer>{loading ? <Loading /> : list}</PagesContainer>;
};

export default Species;
