// const axios = require("axios").default;
import axios from "axios";
import { useState, useCallback } from "react";

interface Planets {
  name: string;
  climate: string;
  films?: string[];
}

interface Species {
  name: string;
  language: string;
}

const useAxios = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Planets[]>([]);

  const getData = useCallback(async (url: string) => {
    for (let i = 1; i <= 6; i++) {
      try {
        const response = await axios.get(url, { params: { page: i } });
        setData((prev) => [...prev, ...response.data.results]);        
      } catch (e) {
        console.error(e);
      }
    }
    setLoading(false);
  }, []);

  return {
    loading,
    data,
    getData,
  };
};

export default useAxios;
