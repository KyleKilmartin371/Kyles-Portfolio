import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Portfolio() {
  return (
    <Container id="portfolio" className="portfolio" >
      <Row>
        <Col>
          <h1>Check out some of my work!</h1>
        </Col>
      </Row>
       {/* App 1 */}
      <Row className="portfolio-list">
        <Col xs={12} md={12}>
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://morning-woodland-90591.herokuapp.com/"
                  id="app-1"
                  className="portfolio-item portfolio-1"
        >
            <h4>
                Pet Beauty
                <br/>
                 Pagent
            </h4>
        </a>
        </Col>
      </Row>

      <Row className="portfolio-list">
          {/* App 2 */}
        <Col xs={12} md={6}>
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kylekilmartin371.github.io/group-project/"
                  id="app-2"
                  className="portfolio-items portfolio-2"
        >
            <h4>
                Walk in
                <br/>
                 the Park
            </h4>
        </a>
        </Col>
        {/* App 3 */}
        <Col xs={12} md={6}>
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/KyleKilmartin371/budget-tracker"
                  id="app-3"
                  className="portfolio-items portfolio-3"
        >
            <h4>
                Budget
                <br/>
                 Tracker
            </h4>
        </a>
        </Col>
        {/* App 4 */}
        <Col xs={12} md={6}>
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/KyleKilmartin371/the_social_net"
                  id="app-4"
                  className="portfolio-items portfolio-4"
        >
            <h4>
                The Social 
                <br/>
                 Net
            </h4>
        </a>
        </Col>
        {/* App 5 */}
        <Col xs={12} md={6}>
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/KyleKilmartin371/employee-tracker"
                  id="app-5"
                  className="portfolio-items portfolio-5"
        >
            <h4>
                Employee
                <br/>
                 Tracker
            </h4>
        </a>
        </Col>
        {/* App 6 */}
        <Col xs={12} md={6}>
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/KyleKilmartin371/password-challenge"
                  id="app-6"
                  className="portfolio-items portfolio-6"
        >
            <h4>
                Password
                <br/>
                 Generator
            </h4>
        </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
