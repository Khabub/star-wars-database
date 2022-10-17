// const axios = require("axios").default;
import axios from "axios";
import { useEffect, useState } from "react";

interface SpeciesInterface {
  name: string;
  language: string;
}

const Species = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<SpeciesInterface[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/species/");
        setData(response.data.results);
        console.log(response.data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    getData();

    return () => {
      console.log("cleaning");
    };
  }, []);

  const list = data
    ? data.map((value, index) => {
        return (
          <p
            key={index}
          >{`Name: ${value.name}, Language: ${value.language}`}</p>
        );
      })
    : null;

  return (
    <div>
      <h1>Species</h1>
      {loading ? <h1>LOADING...</h1> : list}
    </div>
  );
};

export default Species;
