import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Nav() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h1>
            <a href="/"> Kyle Kilmartin </a>
          </h1>
        </Col>

        <Col xs={12} md={2}>
          <a href="#about">About me</a>
        </Col>
        <Col xs={12} md={2}>
          <a href="#portfolio">Portfolio</a>
        </Col>
        <Col xs={12} md={2}>
          <a href="#contact">Contact</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Nav;
