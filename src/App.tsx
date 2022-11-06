import Menu from "./components/Layout/Menu";
import styled from "styled-components";
import Pages from "./components/Layout/Pages";
import backgroundImage from "./assets/sw-background-unsplash.jpg";
import SelectMenu from "./components/UI/SelectMenu";
import MyContextProvider from "./components/store/context";

const App = (): JSX.Element => {
  return (
    <MyContextProvider>
      <Container>
        <img className="bgImage" src={backgroundImage} alt="background"></img>
        <h1>Star Wars Database</h1>
        <Menu />
        <SelectMenu />
        <Pages />
      </Container>
    </MyContextProvider>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin: 0 auto;

  .bgImage {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;

    position: fixed;
    z-index: -5;
    filter: blur(0.2rem) opacity(80%);
  }

  h1 {
    text-align: center;
    font-size: 1.9rem;
    color: #eeaf3b;
    text-shadow: 3px 3px 3px black;
  }
`;
