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

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Container className="text-white mt-5" style={{ marginBottom: 140 }}>
      <h2 className="mb-5">My Skills</h2>
      <Container className="flex-container">
        <div className="flex-item">
          <Image src={html} />
          <div className="image-label">HTML</div>
        </div>
        <div className="flex-item">
          <Image src={css} />
          <div className="image-label">CSS</div>
        </div>
        <div className="flex-item">
          <Image src={js} />
          <div className="image-label">JavaScript</div>
        </div>
        <div className="flex-item">
          <Image src={react} />
          <div className="image-label">React</div>
        </div>
        <div className="flex-item">
          <Image src={java} />
          <div className="image-label">Java</div>
        </div>
        <div className="flex-item">
          <Image src={python} />
          <div className="image-label">Python</div>
        </div>
        <div className="flex-item">
          <Image src={cpp} />
          <div className="image-label">C++</div>
        </div>
        <div className="flex-item">
          <Image src={bootstrap} />
          <div className="image-label">Bootstrap</div>
        </div>
      </Container>

      <div
        className="underline"
        style={{ width: `${scrollPercentage + 10}%` }}
      ></div>
    </Container>
  );
};

export default Skills;
