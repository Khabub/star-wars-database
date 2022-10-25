import useAxios from "../hooks/useAxios";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import { PagesContainer } from "../Layout/Pages.styles";
import { swCategories } from "../store/sw-data";

interface PlanetsInterface {
  name: string;
  climate: string;
}

const Planets = () => {
  const { loading, data } = useAxios<PlanetsInterface>(
    swCategories.planets.url,
    swCategories.planets.pages
  );

  const list = data.map((value, index) => (
    <Button key={index} name={value.name} />
  ));

  return <PagesContainer>{loading ? <Loading /> : list}</PagesContainer>;
};

export default Planets;
