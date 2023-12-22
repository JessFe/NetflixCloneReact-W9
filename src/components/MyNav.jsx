import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";

function MyNav() {
  return (
    <Navbar expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="./assets/logo.png" alt="Logo" id="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-light fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center text-light">
            <Search className="fs-5 mx-2" />
            <div className="small fw-bold mx-2">KIDS</div>
            <Bell className="fs-5 mx-2" />
            <PersonCircle className="fs-5 mx-3" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
