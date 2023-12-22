import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

function MyFooter() {
  return (
    <footer className="mt-5 mb-2">
      <Container fluid className="text-gray">
        <Row className="justify-content-center mt-3">
          <Col xs={10} sm={8} lg={6} className="justify-content-center">
            <Row>
              <Col xs={10} className="mb-2 text-start">
                <Facebook className="footer-icon me-3" />
                <Instagram className="footer-icon me-3" />
                <Twitter className="footer-icon me-3" />
                <Youtube className="footer-icon" />
              </Col>
            </Row>
            <Row className="row-cols-2 row-cols-md-4 g-4">
              <Col className="footer-links">
                <a href="#" className="d-block text-gray fw-normal mb-2">
                  Audio and Subtitles
                </a>
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Media Center
                </a>
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Privacy
                </a>
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Contact us
                </a>
              </Col>
              <Col className="footer-links">
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Audio Description
                </a>
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Investor Relations
                </a>
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Legal Notices
                </a>
              </Col>
              <Col className="footer-links">
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Help Center
                </a>
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Jobs
                </a>
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Cookie Preferences
                </a>
              </Col>
              <Col className="footer-links">
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Gift Cards
                </a>
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Terms of Use
                </a>
                <a href="#" className="d-block text-gray fw-normal mb-1">
                  Corporate Information
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="mt-3">
                <Button variant="outline-secondary" className="footer-button text-gray border-gray rounded-0 py-1 px-2">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="mt-2">
                <small style={{ fontSize: "0.6rem" }}>© 1997-2023 Netflix, Inc.</small>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
