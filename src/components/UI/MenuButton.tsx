import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  name: string;
  image: string;
  active?: boolean;
}


const MenuButton = (props: Props) => {




  return (
    <UL>
      <li>
        <NavLink to={`${props.name}`}>
          <h4>{props.name}</h4>
          <img src={`${props.image}`} alt="button"></img>
        </NavLink>
      </li>
    </UL>
  );
};

export default MenuButton;

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  

  li {
    
    a {
      text-decoration: none;
      h4 {
        color: #90b331;
        text-shadow: 2px 2px 2px black;
        margin: 0;        
      }
      
      img {        
        margin: 0.3rem;
        width: 100px;
        height: 60px;
        object-fit: cover;
        object-position: center;
        border: 2px solid blue;
        border-radius: 25px;

        &:hover,
        &.active,
        &:active {
          border-color: #77e954;          
        }
      }
    }
  }
`;
