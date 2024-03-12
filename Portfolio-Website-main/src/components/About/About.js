import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "space-evenly", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}

          > <h1 data-aos="fade-right">
          <span className="primary-header">Skillset</span> I Work With
        </h1>

        <div data-aos="fade-up">
          <Techstack />
        </div>

        <h1 data-aos="fade-right">
          <span className="primary-header">Tools</span> I use
        </h1>
        <div data-aos="fade-up">
          <Toolstack data-aos="fade-up" />
        </div>
           
          </Col>
          {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col> */}
        </Row>
       

        <Github />
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
