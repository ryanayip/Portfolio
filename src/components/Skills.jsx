import React from "react";
import Container from "react-bootstrap/Container";
import html from "../assets/skill-icons/html.png";
import css from "../assets/skill-icons/css.png";
import js from "../assets/skill-icons/js.png";
import react from "../assets/skill-icons/react.png";
import bootstrap from "../assets/skill-icons/bootstrap.png";
import cpp from "../assets/skill-icons/cpp.png";
import python from "../assets/skill-icons/python.png";
import java from "../assets/skill-icons/java.png";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Skills.css";
import { useEffect, useState } from "react";

const Skills = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", onScroll);

    // Clean up the listener when the component is unmounted
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Container className="text-white mt-5">
      <h2>My Skills</h2>
      <Container className="image-container">
        <Row className="gx-4 gy-4">
          <Col className="img-wrapper">
            <Image src={html} />
            <div className="image-label">HTML</div>
          </Col>
          <Col className="img-wrapper">
            <Image src={css} />
            <div className="image-label">CSS</div>
          </Col>
          <Col className="img-wrapper">
            <Image src={js} />
            <div className="image-label">JavaScript</div>
          </Col>
          <Col className="img-wrapper">
            <Image src={react} />
            <div className="image-label">React</div>
          </Col>
        </Row>
        <Row className="gx-4 gy-4">
          <Col className="img-wrapper">
            <Image src={java} />
            <div className="image-label">Java</div>
          </Col>
          <Col className="img-wrapper">
            <Image src={python} />
            <div className="image-label">Python</div>
          </Col>
          <Col className="img-wrapper">
            <Image src={cpp} />
            <div className="image-label">C++</div>
          </Col>
          <Col className="img-wrapper">
            <Image src={bootstrap} />
            <div className="image-label">Bootstrap</div>
          </Col>
        </Row>
      </Container>

      <div
        className="underline"
        style={{ width: `${scrollPercentage - 60}%` }}
      ></div>
    </Container>
  );
};

export default Skills;
