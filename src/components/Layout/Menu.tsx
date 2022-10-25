import { NavLink } from "react-router-dom";
import styled from "styled-components";
import planetsImage from "../../assets/sw-planets.jpg";
import speciesImage from "../../assets/sw-species-unsplash.jpg";
import peopleImage from "../../assets/sw-people.png";
import moviesImage from "../../assets/sw-movies-unsplash.jpg";
import starshipsImage from "../../assets/sw-starships.png";
import vehiclesImage from "../../assets/sw-vehicles.png";

const Menu = () => {
  return (
    <Container>
      <ul>
        <li>          
          <NavLink to="planets">         
            <img src={planetsImage} alt="button"></img>
          </NavLink>         
          <NavLink to="species">         
            <img src={speciesImage} alt="button"></img>
          </NavLink>
          <NavLink to="people">
            <img src={peopleImage} alt="button"></img>
          </NavLink>
          <NavLink to="films">
            <img src={moviesImage} alt="button"></img>
          </NavLink>
          <NavLink to="starships">
            <img src={starshipsImage} alt="button"></img>
          </NavLink>
          <NavLink to="vehicles">
            <img src={vehiclesImage} alt="button"></img>
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  width: 100vw;
  text-align: center;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      a {
        
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
  }
`;
