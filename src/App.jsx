import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavMain from "./components/NavMain";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
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
      </Container>
      <div id="Contact"></div>
      <Contact />
    </>
  );
}

export default App;
