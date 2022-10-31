import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

const useAxios = <T extends object>(url: string, n: number = 1) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);
  //const [error, setError] = useState<string>("");

  useEffect(() => {
    
    // UDĚLAT REF !!!!
    //--------------------------------------------
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
          // console.log(response.data.results);
        } catch (err) {
          //let message: string;
          // const errors = err as Error | AxiosError;

         /*  if (axios.isCancel(errors)) {
            setError(errors.message);
          } */
          console.log(err);

          if (axios.isAxiosError(err)) {
            if (err.code) {
              console.log(err);
              //message = String(err);
              
            }
          } else {
            console.log("normal errors, not axios error");
            //message = "normal error";
           
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
    
  };
};

export default useAxios;
