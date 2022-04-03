import React from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";
const Navbars = () => {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark ">
      <Container>
        <Navbar.Brand href="/">
          <div className="nav-brand "></div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto  navbar-ul">
            <Link to="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Nav.Link to="/service">Services</Nav.Link>
            <Nav.Link to="/join">Join Us!</Nav.Link>
            <Nav.Link to="/gallery">Our Gallery</Nav.Link>
            <Nav.Link to="/about">About Us</Nav.Link>
            <Link to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="btn-nav me-4 ms-4" variant="danger">
          00971562360047
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navbars;
