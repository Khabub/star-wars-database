import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = <T extends object>(url: string, n: number = 1) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    setLoading(true);
    setData([]);

    const getData = async () => {
      for (let i = 1; i <= n; i++) {
        try {
          const response = await axios.get(url, { params: { page: i } });
          setData((prev) => [...prev, ...response.data.results]);
          console.log(response);
        } catch (e) {
          console.error(e);
        }
      }
      setLoading(false);
    };

    getData();

    return () => {};
  }, [url, n]);

  return {
    loading,
    data,
  };
};

export default useAxios;
