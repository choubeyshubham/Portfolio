import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={chatify}
                  isBlog={false}
                  title="Shopping Cart Api"
                  description="Developed a shopping cart backend using Spring Boot for a seamless e-commerce experience.Designed and implemented RESTful APIs for managing cart ,cart item, category, order, product, user"
                  ghLink="https://github.com/choubeyshubham/dream-shops"
                  demoLink="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={bitsOfCode}
                  isBlog={false}
                  title="Beer Rest Api"
                  description="Designed and developed a Beer REST API using Spring Boot, allowing efficient management of beer inventory and sales.Created and implemented RESTful endpoints for CRUD operations on beer data, including beer types, stock levels, and suppliers."
                  ghLink="https://github.com/choubeyshubham/spring-6-rest-mvc"
                  demoLink="#"
              />
            </Col>






          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
