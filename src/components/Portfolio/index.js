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
      <Col xs={12} md={6}className="portfolio-2">
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gamebuy143.herokuapp.com/"
                  id="app-2"
                  className="portfolio-items"
        >
            <h4>
                GameBuy
            </h4>
        </a>
        </Col>
      </Row>

      <Row className="portfolio-list">
          {/* App 2 */}
        <Col xs={12} md={12} className="portfolio-1">
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://morning-woodland-90591.herokuapp.com/"
                  id="app-1"
                  className="portfolio-item"
        >
            <h4>
                Pet Beauty
                <br/>
                 Pagent
            </h4>
        </a>
        </Col>
          {/* App 3 */}
        <Col xs={12} md={6}className="portfolio-3">
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kylekilmartin371.github.io/group-project/"
                  id="app-2"
                  className="portfolio-items"
        >
            <h4>
                Walk in
                <br/>
                 the Park
            </h4>
        </a>
        </Col>
        {/* App 4 */}
        <Col xs={12} md={6} className="portfolio-4">
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/KyleKilmartin371/budget-tracker"
                  id="app-3"
                  className="portfolio-items"
        >
            <h4>
                Budget
                <br/>
                 Tracker
            </h4>
        </a>
        </Col>
        {/* App 5 */}
        <Col xs={12} md={6} className="portfolio-5">
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/KyleKilmartin371/the_social_net"
                  id="app-4"
                  className="portfolio-items"
        >
            <h4>
                The Social 
                <br/>
                 Net
            </h4>
        </a>
        </Col>
        {/* App 6 */}
        <Col xs={12} md={6} className="portfolio-6">
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/KyleKilmartin371/employee-tracker"
                  id="app-5"
                  className="portfolio-items"
        >
            <h4>
                Employee
                <br/>
                 Tracker
            </h4>
        </a>
        </Col>
        {/* App 7 */}
        <Col xs={12} md={6} className="portfolio-7">
        <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/KyleKilmartin371/password-challenge"
                  id="app-6"
                  className="portfolio-items"
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
