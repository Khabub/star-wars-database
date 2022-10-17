// const axios = require("axios").default;
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Button from "./UI/Button";

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
        } catch (e) {
          console.error(e);
        }
      }

      setLoading(false);
    };
    getData();

    return () => {};
  }, []);

  const list = data
    ? data.map((value, index) => {
        return <Button key={index} name={value.name} />;
      })
    : null;

  return (
    <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>         
      {loading ? <Loading /> : list}
    </div>
  );
};

export default Planets;
