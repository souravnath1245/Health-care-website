import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar  fixed="top"  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Navbar
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/service#service">
              Service
            </Nav.Link>
            <Nav.Link as={HashLink} to="/about#about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
