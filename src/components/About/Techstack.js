import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

import { FaJava,FaAws  } from "react-icons/fa";
import { SiApachemaven ,SiApachekafka,SiSpringboot} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsFiletypeSql } from "react-icons/bs";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";




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
                <SiApachekafka />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaAws />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <GrMysql />
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