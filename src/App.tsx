import Menu from "./components/Menu";
import styled from "styled-components";
import Pages from "./components/Pages";

const App = (): JSX.Element => {
  console.log("Update");
  return (
    <Container>
      <h1>Hello</h1>
      <Menu />
      <Pages />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
`;
