import useAxios from "./hooks/useAxios";
import Loading from "./UI/Loading";
import Button from "./UI/Button";
import { PagesContainer } from "./Pages.styles";
import { swCategories } from "./store/sw-data";

interface FilmsInterface {
  title: string;
  
}

const Films = () => {
  const { loading, data } = useAxios<FilmsInterface>(
    swCategories.films.url,
    swCategories.films.pages
  );

  const list = data.map((value, index) => (
    <Button key={index} name={value.title} />
  ));

  return <PagesContainer>{loading ? <Loading /> : list}</PagesContainer>;
};

export default Films;
