import { PagesContainer } from "../Layout/Pages.styles";
import Loading from "../UI/Loading";
import { Error } from "./Category.styles";
import { useContext, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { MyContext } from "../store/context";
interface Props<T> {
  children?: React.ReactNode;
  listingFce: (v: T[]) => JSX.Element[];
  url: string;
  pages: number;
}

const CategoryTemplate = <T extends object>(props: Props<T>) => {
  const { loading, data, error, sortedData } = useAxios<T>(
    props.url,
    props.pages
  );

  const ctx = useContext(MyContext);

  const listing =
    ctx.myValue === "A-Z"
      ? props.listingFce(sortedData)
      : props.listingFce(data);

  useEffect(() => {
    ctx.setLoad(loading);
  }, [ctx, loading]);

  return (
    <PagesContainer>
      {error.isError && <Error>{error.errorMessage}</Error>}
      {loading ? <Loading /> : listing}
      {props.children}
    </PagesContainer>
  );
};

export default CategoryTemplate;
