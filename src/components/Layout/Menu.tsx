import styled from "styled-components";
import { menuButtons } from "../store/menu";
import MenuButton from "../UI/MenuButton";

const Menu = () => {
  const list = menuButtons.map((value, index) => (
    <MenuButton key={index} name={value.name} image={value.image} />
  ));

  return <Container>{list}</Container>;
};

export default Menu;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  text-align: center;  
`;
