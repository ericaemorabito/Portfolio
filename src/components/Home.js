import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/home.css";
import Project from "./Project";
import About from "./About";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  // CHANGING THE STATE OF PROJECT
  const [project, setProject] = useState("home");

  // const handleHome = () => {
  //   setProject('home');
  //   console.log(`state is : ${project}`)
  // };

  // const handleFirstProject = () => {
  //   setProject("first");
  //   console.log(`state is : ${project}`);
  // };

  // const handleSecondProject = () => {
  //   setProject("second");
  //   console.log(`state is : ${project}`);
  // };

  // const handleThirdProject = () => {
  //   setProject("third");
  //   console.log(`state is : ${project}`);
  // };

  // const handleFourthProject = () => {
  //   setProject("fourth");
  //   console.log(`state is : ${project}`);
  // };

  // CONDITIONAL RENDERING BASED ON THE STATE
  // let text;

  // if (project === "home") {
  //   text = <About />;
  // }
  // if (project === "first") {
  //   text = <Project project="1" />;
  // }
  // if (project === "second") {
  //   text = <Project project="2" />;
  // }
  // if (project === "third") {
  //   text = <Project project="3" />;
  // }

  const leftVariants = {
    hidden: { x: 100 },
    visible: { x: 1, duration: 1 },
    exit: { x: -100, duration: 1 },
  };

  return (
    <Row fluid className="screen gx-0">
      <Col lg={12} md={12} sm={12} xs={12} className="main">
        <Row className="body">
          {/* WELCOME & PROJECT TEXT AREA*/}
          <Col
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="body-col about-col"
          >
            <AnimatePresence>
            {project === "home" && <About />}
            </AnimatePresence>
            <AnimatePresence>
            {project !== "home" && <Project project={project} />}
            </AnimatePresence>
          </Col>
          {/* PROJECTS LISTED */}
          <Col lg={5} md={6} sm={12} xs={12} className="body-col projects-col">
            <h2 id="projects-title">Projects</h2>
            <hr></hr>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setProject("home");
                  }}
                >
                  Home Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setProject("first");
                  }}
                >
                  First Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setProject("second");
                  }}
                >
                  Second Project
                </button>
              </li>
              <li>
                <button onClick={() => setProject("third")}>
                  Third Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setProject("fourth");
                  }}
                >
                  Fourth Project
                </button>
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
