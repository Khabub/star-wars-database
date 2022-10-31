import axios, { AxiosError } from "axios";
import { useState, useEffect, useRef } from "react";

const useAxios = <T extends object>(url: string, n: number = 1) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");

  const abortControllerRef = useRef<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    setData([]);

    const getData = async (signal: AbortSignal) => {
      for (let i = 1; i <= n; i++) {
        try {
          const response = await axios.get(url, {
            params: { page: i },
            signal: signal,
          });
          setData((prev) => [...prev, ...response.data.results]);
          console.log(response.data.results);
        } catch (err) {
          let message: string;
          const errors = err as Error | AxiosError;

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

    if (abortControllerRef.current) {
      getData(signal);
    }

    return () => {
      controller.abort();
      abortControllerRef.current = true;
    };
  }, [url, n]);

  return {
    loading,
    data,
    error,
  };
};

export default useAxios;
