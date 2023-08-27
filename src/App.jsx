import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavMain from "./components/NavMain";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <Container>
      <NavMain />
      <About />
      <Skills />
    </Container>
  );
}

export default App;
