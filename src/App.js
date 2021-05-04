import styled from "styled-components/macro";
import { Feature, Header, Navbar } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Header />
      <Feature />
    </Application>
  );
};

export default App;

const Application = styled.div``;