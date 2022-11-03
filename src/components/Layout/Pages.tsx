import { Routes, Route, Navigate } from "react-router-dom";
import Planets from "../Categories/Planets";
import Species from "../Categories/Species";
import styled from "styled-components";
import People from "../Categories/People";
import Films from "../Categories/Films";
import Starships from "../Categories/Starships";
import Vehicles from "../Categories/Vehicles";



const Pages = () => {
  return (
    <StyledPages>
      <Routes>
        <Route path="/" element={<Navigate to="films" />} />
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
  
  padding: 1rem 0;
  
`;
