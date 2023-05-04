import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/home.css";
import Project from "./Project";
import About from "./About";
import Video from "./Video";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const portfolioData = [
    {
      title: "Solo Traveler",
      description:
        "provides solo travelers a place to connect and plan upcoming trips. Hosted on Heroku, please give 20 seconds to spin up.",
      tech1: "JavaScript",
      tech2: "React",
      tech3: "MongoDB",
      link: "https://solo.herokuapp.com",
      github: "https://github.com/ericaemorabito/Solo_Traveler",
    },
    {
      title: "Restaurant Website",
      description: "Website recreation of the Colletta Restaurant website.",
      tech1: "JavaScript",
      tech2: "React",
      tech3: "Bootstrap",
      link: "https://ericaemorabito.github.io/Restaurant_Website/",
      github: "https://github.com/ericaemorabito/Restaurant_Website",
    },
    {
      title: "E-Commerce Webiste",
      description: "Created using Brad Traversy's MERN tutorial on Udemy ",
      tech1: "JavaScript",
      tech2: "React",
      tech3: "MongoDB",
      link: "https://udemyproshoptutorial.herokuapp.com/",
      github: "https://github.com/ericaemorabito/E-commerce.git",
    },
    {
      title: "VS Photography",
      description:
        "Website for independent photographer to display work and get bookings",
      tech1: "JavaScript",
      tech2: "React",
      tech3: "Bootstrap",
      link: "https://ericaemorabito.github.io/Victoria_Stewart_Photography/",
      github:
        "https://github.com/ericaemorabito/Victoria_Stewart_Photography.git",
    },
  ];

  const [home, setHome] = useState(true);
  const [project, setProject] = useState(portfolioData[0]);

  // const handleHome = () => {
  //   setHome(true);
  //   console.log(` viewproject : ${project}`);
  // };

  const handleFirstProject = () => {
    setHome(false);
    setProject(portfolioData[0]);
    console.log(`viewproject is : ${project}`);
  };

  const handleSecondProject = () => {
    setHome(false);
    setProject(portfolioData[1]);
    console.log(`viewproject is : ${project}`);
  };

  const handleThirdProject = () => {
    setHome(false);
    setProject(portfolioData[2]);
    console.log(`viewproject is : ${project}`);
  };

  const handleFourthProject = () => {
    setHome(false);
    setProject(portfolioData[3]);
    console.log(`viewproject is : ${project}`);
  };

  const leftVariants = {
    hidden: { x: 100 },
    visible: { x: 1, duration: 1 },
    exit: { x: -100, duration: 1 },
  };

  const rightVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 1, opacity: 1, transition: { duration: 1, delay: 0.5 } },
    exit: { x: -10, opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <Row fluid className="screen gx-0">
      <Col lg={12} md={12} sm={12} xs={12} className="main">
        <Row className="body">
          {/* LEFT */}
          <Col lg={5} md={5} sm={12} xs={12} className="body-col">
            <AnimatePresence>
              {home && <About />}
              {home === false && <Project project={project} />}
            </AnimatePresence>
          </Col>
          {/* PROJECTS LISTED */}
          <Col lg={5} md={5} sm={12} xs={12} className="body-col">
            <AnimatePresence>
              {home && (
                <motion.div
                  variants={rightVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h2 id="projects-title">Projects</h2>
                  <br></br>
                  {/* <hr></hr> */}
                  <ul>
                    <li>
                      <button onClick={handleFirstProject}>
                        First Project
                      </button>
                    </li>
                    <li>
                      <button onClick={handleSecondProject}>
                        Second Project
                      </button>
                    </li>
                    <li>
                      <button onClick={handleThirdProject}>
                        Third Project
                      </button>
                    </li>
                    <li>
                      <button onClick={handleFourthProject}>
                        Fourth Project
                      </button>
                    </li>
                  </ul>
                </motion.div>
              )}
              {home === false && <Video />}
              {home === false && (
                <div className="back-area">
                  <button
                    className="back-btn"
                    onClick={() => {
                      setHome(true);
                    }}
                  >
                    Back
                  </button>
                </div>
              )}
            </AnimatePresence>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
