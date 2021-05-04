import styled from "styled-components/macro";
import { Feature, Header, Navbar, Offer } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Header />
      <Feature />
      <Offer />
    </Application>
  );
};

export default App;

const Application = styled.div``;