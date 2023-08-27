import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavMain from "./components/NavMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <NavMain />
    </Container>
  );
}

export default App;
