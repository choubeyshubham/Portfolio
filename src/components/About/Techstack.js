import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiGit,
} from "react-icons/di";

import { FaJava,FaAws  } from "react-icons/fa";
import {SiApachemaven, SiSpringboot, SiAngular} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FaDocker } from "react-icons/fa";
    import { SiKubernetes,SiMysql  } from "react-icons/si";




function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <FaJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiApachemaven />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAngular />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaAws />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BsFiletypeSql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaDocker />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes />
            </Col>

        </Row>
    );
}

export default Techstack;