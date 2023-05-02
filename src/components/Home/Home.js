import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./home.css";
import Project from '../Project/Project'
import Welcome from "../Welcome/Welcome";

const Home = () => {
  const [project, setProject] = useState("home");

  const handleHome = () => {
    console.log("home");
  };

  const handleFirstProject = () => {
    setProject("first");
    console.log(`we are on : ${project}`);
  };

  const handleSecondProject = () => {
    setProject("second");
    console.log(`we are on : ${project}`);
  };

  const handleThirdProject = () => {
    setProject("third");
    console.log(`we are on : ${project}`);
  };

  const handleFourthProject = () => {
    setProject("fourth");
    console.log(`we are on : ${project}`);
  };

  let text;
  if (project === 'home'){
    text = <Welcome />
  } 
  if (project === 'first'){
    text = <Project project={project} />
  } 
  if (project === 'second'){
    text = <Project project={project} />
  } 
  if (project === 'third'){
    text = <Project project={project} />
  } 

  return (
    <Row fluid className="screen gx-0">
      <Col lg={12} md={12} sm={12} xs={12} className="main">
        <Row className="body">

          {/* WELCOME & PROJECT TEXT AREA*/}
          <Col lg={6} md={12} sm={12} xs={12} className="body-col about-col">
            {text}
            
          </Col>

          {/* PROJECTS LISTED */}
          <Col lg={5} md={6} sm={12} xs={12} className="body-col projects-col">
            <h2 id="projects-title">Projects</h2>
            <hr></hr>
            <ul>
              <li>
                <button onClick={handleHome}>home Project</button>
              </li>
              <li>
                <button onClick={handleSecondProject}>Second Project</button>
              </li>
              <li>
                <button onClick={handleThirdProject}>Third Project</button>
              </li>
              <li>
                <button onClick={handleFourthProject}>fourth Project</button>
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
