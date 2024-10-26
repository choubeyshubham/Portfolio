import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiPostman,

} from "react-icons/si";


import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiIntellijidea } from "react-icons/si";
import { FaGithub } from "react-icons/fa";



function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <FaWindows />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaLinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaGithub />
            </Col>
        </Row>
    );
}

export default Toolstack;
