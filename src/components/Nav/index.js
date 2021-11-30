import  React  from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Container className="navbar">
      <Row className="navbar-row">
        <Col xs={12} md={5}>
          <h1>
            <a href="/"> Kyle Kilmartin </a>
          </h1>
        </Col>

        <Col xs={12} md={2}>
            <h2>
          <Link to="/About">About me</Link>
          </h2>
        </Col>
        <Col xs={12} md={3}>
            <h2>
          <Link to="/portfolio">Portfolio</Link>
          </h2>
        </Col>
        <Col xs={12} md={1}>
            <h2>
          <Link to="/contact">Contact</Link>
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Nav;
