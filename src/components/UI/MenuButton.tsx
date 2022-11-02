import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  name: string;
  image: string;
}

const MenuButton = (props: Props) => {
  return (
    <UL>
      <li>
        <NavLinkStyled
          to={`${props.name}`}
          className={(isActive) => (isActive.isActive ? "active" : "")}
        >
          <h4>{props.name}</h4>
          <img src={`${props.image}`} alt="button"></img>
        </NavLinkStyled>
      </li>
    </UL>
  );
};

export default MenuButton;

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  .active img {
    border-color: #90b331;
    border-width: 4px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  /*  -webkit-touch-callout: none;
      -webkit-text-size-adjust: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-user-select: none; */

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

    &:hover {
      border-color: #bb831c;
      border-width: 4px;
    }
  }
`;
