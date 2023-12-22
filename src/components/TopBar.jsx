import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

function TopBar() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col md="auto">
          <h2 className="text-light mb-0">TV Shows</h2>
        </Col>
        <Col md="auto">
          <Dropdown as={Button.Group} className="border border-secondary px-2">
            <Button variant="dark" className="bg-transparent px-0 py-0 pb-1">
              Genres
            </Button>

            <Dropdown.Toggle variant="dark" className="bg-transparent px-0 ps-1 py-0" />

            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md="auto" className="text-light ms-auto">
          <Grid className="fs-5 mx-3" />
          <Grid3x3 className="fs-5 mx-3" />
        </Col>
      </Row>
    </Container>
  );
}

export default TopBar;
