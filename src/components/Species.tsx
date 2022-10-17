// const axios = require("axios").default;
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Button from "./UI/Button";

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
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    getData();

    return () => {};
  }, []);

  const list = data
    ? data.map((value, index) => {
        return (
          <Button
            key={index}
            name={value.name}
          / >
        );
      })
    : null;

  return (
    <div>
      <h2>Species</h2>
      {loading ? <Loading /> : list}
    </div>
  );
};

export default Species;
