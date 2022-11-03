import { createContext, useState } from "react";

interface MyContextInterface {
  setValue: (val: string) => void;
  myValue: string;
}

export const MyContext = createContext<MyContextInterface>({
  setValue: () => {},
  myValue: "",
});

interface Props {
  children?: React.ReactNode;
}

const MyContextProvider = (props: Props) => {
  const [state, setState] = useState<string>("index");

  const setHandler = (val: string) => {
    setState(val);
  };

  
  const myContext: MyContextInterface = {
    setValue: setHandler,
    myValue: state,
  };

  return (
    <MyContext.Provider value={myContext}>{props.children}</MyContext.Provider>
  );
};

export default MyContextProvider;
