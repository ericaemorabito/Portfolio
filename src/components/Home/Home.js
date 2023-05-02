import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./home.css";

const Home = () => {
  // const [project, setProject ] = useState('');

  return (
    <Row fluid className="screen gx-0">
      <Col lg={8} md={10} sm={12} xs={12} className="main">
        <Row className="body">

          {/* WELCOME AND ABOUT TEXT */}
          <Col lg={7} md={6} sm={12} xs={12} className="body-col about-col">
            <h1 id="welcome-text">Welcome</h1>
            <p id="about-text">
              I'm a full-stack web developer specialized in the MERN stack based in Austin, Texas.
              <br></br>I’m passionate about using code to
              solve problems and improve the lives of others.
            </p>
          </Col>

          {/* PROJECTS LISTED */}
          <Col lg={5} md={6} sm={12} xs={12} className="body-col projects-col">
            <h2 id="projects-title">Projects</h2>
            <ul>
              <li>
              <button>First Project</button>
              </li>
              <li>
              <button>First Project</button>
              </li>
              <li>
              <button>First Project</button>
              </li>
            </ul>
          </Col>
          
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
