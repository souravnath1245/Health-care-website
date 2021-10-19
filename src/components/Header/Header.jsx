import React from "react";

import { Container, Nav, Navbar,Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import Button from "@restart/ui/esm/Button";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar fixed="top" expand='lg' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="#home">
            MedWish
          </Navbar.Brand>
          {/* <Navbar.Toggle /> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end"  id="responsive-navbar-nav">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#service">
              Service
            </Nav.Link>
            <Nav.Link as={HashLink} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={HashLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            {
              user?.email ? <Button onClick={logOut} className="btn-sm m-2" variant="primary">Logout</Button>:

            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            }
            {user.email ? (
              <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName}</a>
              </Navbar.Text>
            ) : (
              <p></p>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
