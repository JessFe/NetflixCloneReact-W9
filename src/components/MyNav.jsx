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
            <div class="d-lg-none mb-3">
              <hr class="text-gray my-1" />
              <Nav.Link href="#" className="opacity-75 py-1">
                Search
              </Nav.Link>
              <Nav.Link href="#" className="text-uppercase opacity-75 py-1">
                Kids
              </Nav.Link>
              <Nav.Link href="#" className="opacity-75 py-1">
                Notifications
              </Nav.Link>
              <Nav.Link href="#" className="opacity-75 py-1">
                Profile
              </Nav.Link>
            </div>
          </Nav>
          <div className="d-none d-lg-flex align-items-center text-light">
            <Search className="fs-5 mx-2" />
            <div className="text-uppercase small fw-bold mx-2">Kids</div>
            <Bell className="fs-5 mx-2" />
            <PersonCircle className="fs-5 mx-3" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
