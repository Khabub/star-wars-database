import useAxios from "./hooks/useAxios";
import { useEffect } from "react";

const App = (): JSX.Element => {
  const { loading, data, getData } = useAxios();

  useEffect(() => {
    getData("https://swapi.dev/api/planets/");
   

    return () => {
      console.log("cleaning");
    };
  }, [getData]);

  const list = data
    ? data.map((value, index) => {
        return (
          <p key={index}>{`Name: ${value.name}, Climate: ${value.climate}`}</p>
        );
      })
    : null;

  console.log(data)
  return (
    <div>
      <h1>Hello</h1>
      {loading ? <h1>LOADING...</h1> : list}
    </div>
  );
};

export default App;
