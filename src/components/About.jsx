import React from "react";
import Container from "react-bootstrap/Container";
import "./About.css";
const About = () => {
  return (
    <Container style={{ marginTop: 140 }} className="text-white">
      <h1>
        Hello, I'm <span id="headerName">Ryan Yip</span>
      </h1>
      <h2>Full-Stack Software Engineer</h2>
      <p className="mt-5">
        I have a passion for creating. My fascination for technology led me to
        the world of software engineering. I'm constantly hungry to learn,
        always eager to grasp new technologies, and consistently looking broaden
        my skill set. Outside of coding, I enjoy retro video games, sci-fi
        movies, and pickleball!
      </p>
    </Container>
  );
};

export default About;
