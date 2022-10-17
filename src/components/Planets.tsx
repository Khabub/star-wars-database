// const axios = require("axios").default;
import axios from "axios";
import { useEffect, useState } from "react";

interface PlanetsInterface {
  name: string;
  climate: string;
}

const Planets = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<PlanetsInterface[]>([]);

  useEffect(() => {
    const getData = async () => {
      for (let i = 1; i <= 6; i++) {
        try {
          const response = await axios.get("https://swapi.dev/api/planets/", {
            params: { page: i },
          });
          setData((prev) => [...prev, ...response.data.results]);
          console.log(response.data);
        } catch (e) {
          console.error(e);
        }
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
          >{`${index}, Name: ${value.name}, Climate: ${value.climate}`}</p>
        );
      })
    : null;

  return (
    <div>
      <h1>Planets</h1>
      {loading ? <h1>LOADING...</h1> : list}
    </div>
  );
};

export default Planets;
