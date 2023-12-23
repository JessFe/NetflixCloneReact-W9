import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

function TopBar() {
  return (
    <div className="top-bar-sticky">
      {/* ^ qui sostituisco container con div per evitare spazi laterali */}
      <Row className="align-items-center px-2 pb-1">
        <Col xs="auto">
          <h2 className="text-light mb-0">TV Shows</h2>
        </Col>
        <Col xs="auto">
          <Dropdown as={Button.Group}>
            <Dropdown.Toggle
              variant="dark"
              id="dropdown-custom-1"
              className="bg-transparent border border-secondary rounded-0 py-1 px-2"
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg-darkgray border border-secondary dropdown-menu-dark">
              <Dropdown.Item className="text-light custom-dropdown-item" href="#">
                Comedy
              </Dropdown.Item>
              <Dropdown.Item className="text-light custom-dropdown-item" href="#">
                Drama
              </Dropdown.Item>
              <Dropdown.Item className="text-light custom-dropdown-item" href="#">
                Thriller
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs="auto" className="text-light ms-auto">
          <Grid className="fs-5 mx-3" style={{ cursor: "pointer" }} />
          <Grid3x3 className="fs-5 mx-3" style={{ cursor: "pointer" }} />
        </Col>
      </Row>
    </div>
  );
}

export default TopBar;
