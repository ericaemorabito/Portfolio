import React from "react";
import { Row, Col } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <Row fluid className="screen gx-0">
      <Col lg={8} md={10} sm={12} xs={12} className="main">
        <Row id="home-title" className="title-row">
          <Col lg={8} md={10} sm={12} xs={12} className="home-title-col">
            <h1 id="home-title-text">
              Hi, I'm Erica Morabito Full Stack Developer
            </h1>
          </Col>
        </Row>
        <Row id="home-buttons" className="body-row">
          <Col lg={12} className="body-col"></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
