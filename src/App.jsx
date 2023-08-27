import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavMain from "./components/NavMain";
import About from "./components/About";

function App() {
  return (
    <Container>
      <NavMain />
      <About />
    </Container>
  );
}

export default App;
