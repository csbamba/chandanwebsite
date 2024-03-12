import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Screenshot 2024-03-12 132040.png";
import Ecart from "../../Assets/Screenshot 2024-03-12 132528.png";
import ExpenseTracker from "../../Assets/Screenshot 2024-03-12 131615.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="BOOK api"
              description="This is a fully functional Social website that Connect my Database to my server and by using spring i am able to perform C.R.U.D"
              ghLink="https://t"
              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Currency Exchange Website"
              description="My Currency convertor website that convert any currency to inr and from inr to any currency"
              ghLink="https://github.com/"
              demoLink="https://r/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Vartalaap"
              description="A Personal Chat Application to share resources and hangout with friends build with  React.js + MUI and CSS in the front end and Spring Boot  in backend and MYSQL as Database. Have features which allows user for realtime messaging, image sharing and search user."
              ghLink="#"
              demoLink="https:\ "
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="portfolio website"
              description="My personal portfolio wesite  "
              ghLink="https://"
              demoLink="https:"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
