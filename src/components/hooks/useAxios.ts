import axios, { AxiosError } from "axios";
import { useState, useEffect, useRef, useContext, useCallback } from "react";
import { MyContext } from "../store/context";
interface ErrorInterface {
  errorMessage: string;
  isError: boolean;
}

const errorInit: ErrorInterface = {
  errorMessage: "",
  isError: false,
};

const useAxios = <T extends { name: string }>(url: string, n: number = 1) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<ErrorInterface>(errorInit);

  const ctx = useContext(MyContext);

  const firstRunRef = useRef<boolean>(true);

/*   const dataCallback = useCallback(() => {
    const sortedData = [...data];
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
    setData(sortedData);
  }, [data]); */

  useEffect(() => {
    const controller = new AbortController();
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const getData = async () => {
      setLoading(true);
      for (let i = 1; i <= n; i++) {
        try {
          const response = await axios.get(url, {
            params: { page: i },
            cancelToken: source.token,
            signal: controller.signal,
          });
          setData((prev) => [...prev, ...response.data.results]);
        } catch (err) {
          const errors = err as Error | AxiosError;
          if (errors.message === "canceled") {
            return;
          }
          console.error("Error: ", errors);
          setError({ errorMessage: String(errors), isError: true });
        }
      }
      setLoading(false);
    };

    getData();

    

    return () => {
      controller.abort();
      firstRunRef.current = false;
    };
  }, [url, n]);

  /*const sortedData = [...data];
  sortedData.sort((a, b) => a.name.localeCompare(b.name));

  if (ctx.myValue === "A-Z"){
   setData(sortedData);
  }*/

  return {
    loading,
    data,
    error,
  };
};

export default useAxios;
