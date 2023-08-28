import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./Project.css";
import Image from "react-bootstrap/Image";
import rpg from "../assets/skill-icons/react.png";

const Project = () => {
  return (
    <Container className="text-white project-cont">
      <Container className="cont-left">
        <h2 className="mb-4">Project Title</h2>
        <ul className="techItems">
          <li className="techUsed">React</li>
          <li className="techUsed">JavaScript</li>
          <li className="techUsed">HTML</li>
          <li className="techUsed">CSS</li>
          <li className="techUsed">Firebase</li>
          <li className="techUsed">Netlify</li>
        </ul>
        <Button
          size="lg"
          style={{ backgroundColor: "#FF6A6A", border: "none", width: 200 }}
        >
          View Project
        </Button>
        <p>
          This project is being described in this paragraph. It's such a cool
          project. I used a buynch of stuff. It can do cool stuff
        </p>
      </Container>
      <Container className="cont-right">
        <Image src={rpg} />
      </Container>
    </Container>
  );
};

export default Project;
