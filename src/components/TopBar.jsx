import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

function TopBar() {
  return (
    <Container fluid>
      <Row className="align-items-center">
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

            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs="auto" className="text-light ms-auto">
          <Grid className="fs-5 mx-3" />
          <Grid3x3 className="fs-5 mx-3" />
        </Col>
      </Row>
    </Container>
  );
}

export default TopBar;
