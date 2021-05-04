import styled from "styled-components/macro";
import { About, Contact, Feature, Header, Navbar, Offer } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </Application>
  );
};

export default App;

const Application = styled.div``;