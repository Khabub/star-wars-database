import axios, { AxiosError } from "axios";
import { useState, useEffect, useRef } from "react";

const useAxios = <T extends object>(url: string, n: number = 1) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    setLoading(true);
    setData([]);

    const getData = async () => {
      for (let i = 1; i <= n; i++) {
        try {
          const response = await axios.get(url, {
            params: { page: i },
            cancelToken: source.token,
            signal: controller.signal,
          });
          setData((prev) => [...prev, ...response.data.results]);
          console.log(response.data.results);
        } catch (err) {
          let message: string;
          const errors = err as Error | AxiosError;

          if (axios.isCancel(errors)) {
            setError(errors.message);
          }

          if (axios.isAxiosError(err)) {
            if (err.code) {
              console.log("Cannot find a page");
              message = err.code;
              setError(message);
            }
          } else {
            console.log("normal errors, not axios error", errors.message);
            message = "normal error";
            setError(message);
          }
        }
      }
      setLoading(false);
    };

    
    getData();
    

    return () => {
      controller.abort();      
    };
  }, [url, n]);

  return {
    loading,
    data,
    error,
  };
};

export default useAxios;
