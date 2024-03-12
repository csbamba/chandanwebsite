import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiWindows,
  SiFlutter,
  SiIntellijidea,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <span className="tech-name">Windows</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <span className="tech-name">IntelliJ IDEA</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="tech-name">Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <span className="tech-name">GitHub</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <span className="tech-name">Flutter</span>
      </Col>
    </Row>
  );
}

export default Toolstack;