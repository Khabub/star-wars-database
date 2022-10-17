import { Routes, Route, Navigate } from "react-router-dom";
import Planets from "./Planets";
import Species from "./Species";
import styled from "styled-components";

const Pages = () => {
  return (
    <StyledPages>
      <Routes>
        <Route path="/" element={<Navigate to="planets" />} />
        <Route path="planets" element={<Planets />} />
        <Route path="species" element={<Species />} />
      </Routes>
    </StyledPages>
  );
};

export default Pages;


const StyledPages = styled.div`
  
  display: flex;  
  justify-content: space-between;
  background: yellow;
  
 
`;
