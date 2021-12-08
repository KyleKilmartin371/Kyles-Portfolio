import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container id="contact" className="contact">
      <Row>
        <h1>Contact Me</h1>
      </Row>

      <Row>
        <p>
          For more information, download my resume
          <a
            href="resume.pdf"
            download="KyleKilmartinResume"
          >
            Here
          </a>
        </p>
      </Row>

      {/* Email form */}
      <Row>
        <p>
          Please, If you have any questions, don't hesitate to contact me!
          <br />
          <a
            className="email"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:kylekilmartin371@gmail.com"
          >
            ✉️ kylekilmartin371@gmail.com
          </a>
        </p>
      </Row>
    </Container>
  );
}

export default Contact;
