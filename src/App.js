import styled from "styled-components/macro";
import { About, Feature, Header, Navbar, Offer } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
    </Application>
  );
};

export default App;

const Application = styled.div``;