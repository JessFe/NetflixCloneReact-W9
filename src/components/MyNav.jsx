import React from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { Search, Bell } from "react-bootstrap-icons";

function MyNav({ onNavigation }) {
  return (
    <Navbar expand="lg" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand onClick={() => onNavigation("home")} style={{ cursor: "pointer" }}>
          <img src="./assets/logo.png" alt="Logo" id="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => onNavigation("home")} className="fw-bold">
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
            <div className="d-lg-none mb-1">
              <hr className="text-gray my-1" />
              <Nav.Link href="#" className="custom-dropdown-item opacity-75 py-1">
                Search
              </Nav.Link>
              <Nav.Link href="#" className="custom-dropdown-item text-uppercase opacity-75 py-1">
                Kids
              </Nav.Link>
              <Nav.Link href="#" className="custom-dropdown-item opacity-75 py-1">
                Notifications
              </Nav.Link>
              <Nav.Link
                onClick={() => onNavigation("profile")}
                className="text-danger text-opacity-75 custom-dropdown-item"
              >
                Profile
              </Nav.Link>
              <Nav.Link
                onClick={() => onNavigation("settings")}
                className="text-danger text-opacity-75 custom-dropdown-item"
              >
                Settings
              </Nav.Link>
            </div>
          </Nav>
          <div className="d-none d-lg-flex align-items-center text-light">
            <Search className="fs-5 mx-2" style={{ cursor: "pointer" }} />
            <div className="text-uppercase small fw-bold mx-2" style={{ cursor: "pointer" }}>
              Kids
            </div>
            <Bell className="fs-5 mx-2" style={{ cursor: "pointer" }} />
            <Dropdown as="span" className="ms-3">
              <Dropdown.Toggle as="a" href="#" role="button" className="nav-link">
                <img src="./assets/avatar.png" alt="avatar" width="30" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-dark dropdown-menu-end bg-darkgray border-secondary">
                <Dropdown.Item onClick={() => onNavigation("profile")} className="custom-dropdown-item link-danger">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="#" className="custom-dropdown-item">
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#" className="custom-dropdown-item">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onNavigation("settings")} className="custom-dropdown-item link-danger">
                  Settings
                </Dropdown.Item>
                <Dropdown.Divider className="text-bg-secondary" />
                <Dropdown.Item href="#" className="custom-dropdown-item">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
