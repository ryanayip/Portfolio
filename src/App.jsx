import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavMain from "./components/NavMain";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  return (
    <Container>
      <NavMain />
      <About />
      <Skills />
      <h2 className="text-white mb-5">My Projects</h2>
      <Project />
    </Container>
  );
}

export default App;
