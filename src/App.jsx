import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <div>Let's goooo</div>
    </Container>
  );
}

export default App;
