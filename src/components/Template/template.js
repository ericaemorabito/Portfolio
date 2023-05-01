import React from "react";
import { Row, Col } from "react-bootstrap";
import "./template.css";

const Template = () => {
  return (
    <Row fluid className="screen gx-0"> 
      <Col lg={8} md={10} sm={12} xs={12} className="main">
        <Row className="title-row">
        </Row>
        <Row className="body-row">
          <Col lg={6} md={6} sm={12} xs={12} id="left" className="body-col">
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} id="right" className="body-col">
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Template;
