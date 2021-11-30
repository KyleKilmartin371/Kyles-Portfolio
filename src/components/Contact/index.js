import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container id="contact">
      <Row>
        <h2>Contact Me</h2>
      </Row>

      <Row>
        <p>
        For more information, download my resume *here*
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
