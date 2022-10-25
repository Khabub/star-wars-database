import useAxios from "../hooks/useAxios";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import { PagesContainer } from "../Layout/Pages.styles";
import { swCategories } from "../store/sw-data";

interface StarshipsInterface {
  name: string;
  
}

const Starships = () => {
  const { loading, data } = useAxios<StarshipsInterface>(
    swCategories.starships.url,
    swCategories.starships.pages
  );

  const list = data.map((value, index) => (
    <Button key={index} name={value.name} />
  ));

  return <PagesContainer>{loading ? <Loading /> : list}</PagesContainer>;
};

export default Starships;
