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
      <div id="About"></div>
      <About />
      <div id="Skills"></div>
      <Skills />
      <h2 id="Projects" className="text-white mb-5">
        My Projects
      </h2>
      <Project />
      <div id="Contact"></div>
    </Container>
  );
}

export default App;
