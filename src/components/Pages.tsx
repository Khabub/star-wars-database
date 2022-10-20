import { Routes, Route, Navigate } from "react-router-dom";
import Planets from "./Planets";
import Species from "./Species";
import styled from "styled-components";
import People from "./People";
import Films from "./Films";
import Starships from "./Starships";
import Vehicles from "./Vehicles";

const Pages = () => {
  return (
    <StyledPages>
      <Routes>
        <Route path="/" element={<Navigate to="planets" />} />
        <Route path="planets" element={<Planets />} />
        <Route path="species" element={<Species />} />
        <Route path="people" element={<People />} />
        <Route path="films" element={<Films />} />
        <Route path="starships" element={<Starships />} />
        <Route path="vehicles" element={<Vehicles />} />
      </Routes>
    </StyledPages>
  );
};

export default Pages;


const StyledPages = styled.div`   
  background: yellow;
  padding: 1rem 0;
  
`;
