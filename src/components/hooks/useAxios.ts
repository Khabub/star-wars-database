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
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<ErrorInterface>(errorInit);

  const effectRef = useRef<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    setLoading(true);
    setData([]);

    if (effectRef.current) {
      effectRef.current = false;
      return;
    }

    const getData = async () => {      
      for (let i = 1; i <= n; i++) {
        try {
          const response = await axios.get(url, {
            params: { page: i },
            cancelToken: source.token,
            signal: controller.signal,
          });
          setData((prev) => [...prev, ...response.data.results]);          
          
        } catch (err) {
          let message: string;
          const errors = err as Error | AxiosError;

          if (axios.isCancel(errors)) {
            setError({ errorMessage: errors.message, isError: true });
          }

          if (axios.isAxiosError(err)) {
            if (err.code) {
              console.log(err);
              message = String(err);
              setError({ errorMessage: message, isError: true });
            }
          } else {
            console.log("normal errors, not axios error");
            message = "normal error";
            setError({ errorMessage: message, isError: true });
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
