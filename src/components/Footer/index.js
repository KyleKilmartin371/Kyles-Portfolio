import  React  from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer(){
    return(
        <Container>
            <Row>
                <Col className="col-md-6 offset-md-3">
        <h2>❤️ Made with love by Kyle Kilmartin. &copy; 2021</h2>
        </Col>
        </Row>
        <Row>
            <Col>
            <a
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          href="www.linkedin.com/in/kyle-kilmartin"
        >
            LinkedIn
          </a>
            </Col>
            <Col>
            <a
          className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/KyleKilmartin371"
        >
            Github 
          </a>
            </Col>
            <Col>
            <a
          className="email"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:kylekilmartin371@gmail.com"
        >
            Email
          </a>
            </Col>
        </Row>
        </ Container>
    )
};

export default Footer;