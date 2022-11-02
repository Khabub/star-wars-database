import axios, { AxiosError } from "axios";
import { useState, useEffect, useRef } from "react";
interface ErrorInterface {
  errorMessage: string;
  isError: boolean;
}

const errorInit: ErrorInterface = {
  errorMessage: "",
  isError: false,
};

const useAxios = <T extends object>(url: string, n: number = 1) => {
  const firstRunRef = useRef<boolean>(true);

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<ErrorInterface>(errorInit);

  useEffect(() => {
    const controller = new AbortController();
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    console.log("firstrun", firstRunRef.current);

    const getData = async () => {
      setLoading(true);
      console.log("In getData function");
      for (let i = 1; i <= n; i++) {
        try {
          const response = await axios.get(url, {
            params: { page: i },
            cancelToken: source.token,
            signal: controller.signal,
          });
          setData((prev) => [...prev, ...response.data.results]);
          setLoading(false);
        } catch (err) {
          
          const errors = err as Error | AxiosError;
          if (errors.message === "canceled"){
            return;
          }
          console.log("normal errors, not axios error", errors);
          setError({ errorMessage: String(errors), isError: true });
        }
      }
    };

    getData();

    return () => {
      controller.abort();
      firstRunRef.current = false;
      console.log("useEffect cleaning", firstRunRef.current);
    };
  }, [url, n]);

  return {
    loading,
    data,
    error,
  };
};

export default useAxios;
