import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import icon from "../assets/coding.png";

function NavMain() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              alt="Icon"
              src={icon}
              width="26"
              height="26"
              className="d-inline-block align-top"
            />
            <span style={{ marginLeft: 18, fontSize: 16, color: "white" }}>
              Ryan Yip | Software Engineer
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMain;
