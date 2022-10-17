import { Routes, Route, Navigate } from "react-router-dom";
import Planets from "./Planets";
import Species from "./Species";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="planets" />} />
        <Route path="planets" element={<Planets />} />
        <Route path="species" element={<Species />} />
      </Routes>
    </>
  );
};

export default Pages;
