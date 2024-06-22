import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        {/* <Button variant="outline-light" className="ml-2">Get Started</Button> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
