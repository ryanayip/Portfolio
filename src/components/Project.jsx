import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./Project.css";
import Image from "react-bootstrap/Image";
import rpg from "../assets/projects/rpgpic.png";
import grocery from "../assets/projects/grocerypal.png";

const Project = () => {
  return (
    <Container className="main-cont">
      <Container className="text-white project-cont">
        <Container className="cont-left">
          <h2 className="mb-4">PantryPlate</h2>
          <ul className="techItems">
            <li className="techUsed">React</li>
            <li className="techUsed">Bootstrap</li>
            <li className="techUsed">Axios</li>
            <li className="techUsed">RESTful API</li>
            <li className="techUsed">JavaScript</li>
            <li className="techUsed">HTML</li>
            <li className="techUsed">CSS</li>

            <li className="techUsed">Netlify</li>
          </ul>
          <Button size="lg" className="view-btn">
            View Project
          </Button>
          <p>
            This project is being described in this paragraph. It's such a cool
            project. I used a buynch of stuff. It can do cool stuff
          </p>
        </Container>
        <Container className="cont-right">
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image src={rpg} className="project-pic" />
          </a>{" "}
        </Container>
      </Container>
      <Container className="text-white project-cont">
        <Container className="cont-left">
          <h2 className="mb-4">GroceryPal</h2>
          <ul className="techItems">
            <li className="techUsed">JavaScript</li>
            <li className="techUsed">HTML</li>
            <li className="techUsed">CSS</li>
            <li className="techUsed">Firebase</li>
            <li className="techUsed">Netlify</li>
          </ul>
          <Button
            size="lg"
            className="view-btn"
            href="https://yipsgrocerypal.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            as="a"
          >
            View Project
          </Button>
          <p>
            A grocery app that allows users to create a grocery list, add items,
            and check them off as they shop. The app is built using Vanilla
            JavaScript, HTML, and Vanilla CSS. The data is stored in Firebase
            and deployed on Netlify. The currently link brings you to a version
            than implements local storage instead of Firebase.
          </p>
        </Container>
        <Container className="cont-right">
          <a
            href="https://yipsgrocerypal.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={grocery} className="project-pic" />
          </a>{" "}
        </Container>
      </Container>
      <Container className="text-white project-cont">
        <Container className="cont-left">
          <h2 className="mb-4">RPG</h2>
          <ul className="techItems">
            <li className="techUsed">JavaScript</li>
            <li className="techUsed">HTML</li>
            <li className="techUsed">CSS</li>
            <li className="techUsed">Netlify</li>
          </ul>
          <Button
            size="lg"
            className="view-btn"
            href="https://ryanayiprpg.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            as="a"
          >
            View Project
          </Button>
          <p>
            A simple RPG game where you battle your way through three enemies to
            win the game. The damage is determined by random dice rolls and the
            data is pulled from a hard-coded JSON file. The game is built using
            Vanilla JavaScript, HTML, and Vanilla CSS. Deployed on Netlify.
          </p>
        </Container>
        <Container className="cont-right">
          <a
            href="https://ryanayiprpg.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={rpg} className="project-pic" />
          </a>{" "}
        </Container>
      </Container>
    </Container>
  );
};

export default Project;
