import styled from "styled-components/macro";
import { Header, Navbar } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Header />
    </Application>
  );
};

export default App;

const Application = styled.div``;