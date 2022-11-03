import Select, { PropsValue, SingleValue, StylesConfig } from "react-select";
import { useState, useContext, useEffect } from "react";
import { CSSProperties } from "styled-components";
import {MyContext} from "../store/context";

interface Options {
  value: string;
  label: string;
}

const options: Options[] = [
  { value: "index", label: "Sort by Index" },
  { value: "A-Z", label: "Sort A-Z" },
];

const customControlStyles: CSSProperties = {
  width: "100%",
  height: "20px",
  cursor: "pointer",
  borderWidth: "3px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0",
  marginTop: "0.5rem",
};

const customSingleValueStyles: CSSProperties = {
  color: "rgb(50, 160, 155)",
  fontWeight: "bold",   
  translate: "0 -2px",
};

type isMulti = false;

const customStyles: StylesConfig<Options, isMulti> = {
  control: (provided, state) => {
    return {
      ...provided,
      ...customControlStyles,
    };
  },
  singleValue: (provided) => {
    return {
      ...provided,
      ...customSingleValueStyles,
    };
  },
};

const SelectMenu = () => {
  const [select, setSelect] = useState<string>("");
  const ctx = useContext(MyContext);

  const selectHandler= (event: SingleValue<Options>) => {
    setSelect(event!.value); 
    ctx.setValue(select);
    console.log("SelectMenu: ", ctx.myValue);
  }

  return (
    <Select
        options={options}               
        isSearchable={false}
        styles={customStyles}     
        onChange={selectHandler} 
        placeholder={"Choose sorting"}          
      />
  )
}

export default SelectMenu;