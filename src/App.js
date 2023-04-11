import styled from "styled-components";
import Main from "./components/Main";

const AppStyled = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <AppStyled>
      <Main />
    </AppStyled>
  );
}

export default App;
