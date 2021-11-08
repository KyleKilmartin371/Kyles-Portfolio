import React from "react";
import profileImage from "../../assets/profile-image.jpg";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container id="about" className="about">
      <Row>
        <Col xs={12} md={6}>
          <h1 id="about">About Kyle Kilmartin</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <p>
            I am a young and energetic worker that is able to work both on my
            own and well with others.
            <br />
            As a truly self-motivated individual, I have performed well working
            with others in group settings as well as taking charge as a leader
            and accomplishing tasks on my own.
            <br />I can describe myself as an outgoing, social individual that
            loves to communicate with others and build relationships that will
            increase workflow.
          </p>
          <br />
          <h4>Skills</h4>
          <ul>
            <li>JavaScript</li>
            <li>Node</li>
            <li>Express</li>
            <li>JSON</li>
            <li>RESTful API's</li>
            <li>Handlebars</li>
            <li>Sequelize</li>
            <li>MySQL database</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>Jest testing</li>
            <li>Git / GitHub</li>
          </ul>
        </Col>
        <Col>
          <img src={profileImage} style={{ width: "70%" }} alt="profile" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
