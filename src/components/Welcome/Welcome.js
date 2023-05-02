import React from "react";
import { Col } from "react-bootstrap";
import './welcome.css'

const Welcome = () => {
  return (
    <>
     <h1 id="name">Erica Morabito</h1>
      <hr></hr>
      <p id="about-text">
        I'm a full-stack web developer specialized in the MERN stack based in
        Austin, Texas.
        <br></br>I’m passionate about using code to solve problems and improve
        the lives of others.
      </p>
    </>
    // <Col lg={6} md={12} sm={12} xs={12} className="body-col about-col">
     
    // </Col>
  );
};

export default Welcome;
