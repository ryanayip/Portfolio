import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import icon from "../assets/coding.png";
import Nav from "react-bootstrap/Nav";
import "./NavMain.css";

function NavMain() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <div>
            {" "}
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
              <span
                className="text-white"
                style={{ marginLeft: 18, fontSize: 16 }}
              >
                Ryan Yip | Software Engineer
              </span>
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#About" className="text-white ">
                  About
                </Nav.Link>
                <Nav.Link href="#Projects" className="text-white">
                  Projects
                </Nav.Link>
                <Nav.Link href="#Contact" className="text-white">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMain;
