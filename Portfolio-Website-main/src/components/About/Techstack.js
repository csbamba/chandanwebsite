import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJava,
  DiMysql,
  DiHtml5,
  DiReact,
  
} from "react-icons/di";
import {
  SiSpring,
  SiJsonwebtokens,
  SiHibernate,
  SiPostman,
  SiSpringsecurity,
  SiCss3,
} from "react-icons/si";
import "./about.css"; 
function Techstack() {
  return (
    <Row style={{ justifyContent: "center" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <span className="tech-name">Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        <span className="tech-name">Spring</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <span className="tech-name">MySQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="tech-name">React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <span className="tech-name">CSS3</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate />
        <span className="tech-name">Hibernate</span>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiJsonwebtokens />
        <span className="tech-name">JWT</span>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringsecurity />
        <span className="tech-name">Spring Security</span>
      </Col>
    </Row>
  );
}

export default Techstack;
