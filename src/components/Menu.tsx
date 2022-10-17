import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <>
      <UL>
        <li>
          <NavLink to="planets">Planets</NavLink>
          <NavLink to="species">Species</NavLink>
        </li>
      </UL>
    </>
  );
};

export default Menu;


const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  

  a {
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.5rem;
    background: #dadada;
    border-radius: 0.3rem;


    &:hover,
    &.active,
    &:active {
      color: #548fe9;
      box-shadow: 2px 2px 8px black;
    }
  }
`;