import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              style={{ marginRight: "40px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTba7S9EFWmxrBU0u6OV3fhh2yYJmqjTFee6Q&s"
              alt="Google Chrome Logo"
              height="40"
              className="d-inline-block align-top"
            />
            <span className="ms-3 fw-bold">Home</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="fw-bold">The Browser by Google</Nav.Link>
            <Nav.Link href="#features" className="fw-bold">Features</Nav.Link>
            <Nav.Link href="#support" className="fw-bold">Support</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
