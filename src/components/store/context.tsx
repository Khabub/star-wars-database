import { createContext, useState } from "react";

interface MyContextInterface {
  setValue: (val: string) => void;
  myValue: string;
  setLoad: (val: boolean) => void;
  loadValue: boolean;
}

export const MyContext = createContext<MyContextInterface>({
  setValue: () => {},
  myValue: "",
  setLoad: () => {},
  loadValue: false,
});

interface Props {
  children?: React.ReactNode;
}

const MyContextProvider = (props: Props) => {
  const [state, setState] = useState<string>("index");
  const [stateLoad, setStateLoad] = useState<boolean>(false);

  const setHandler = (val: string) => {
    setState(val);
  };
  const setLoadHandler = (val: boolean) => {
    setStateLoad(val);
  };

  
  const myContext: MyContextInterface = {
    setValue: setHandler,
    myValue: state,
    setLoad: setLoadHandler,
    loadValue: stateLoad,
  };

  return (
    <MyContext.Provider value={myContext}>{props.children}</MyContext.Provider>
  );
};

export default MyContextProvider;
