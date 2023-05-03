import React from "react";
import "../styles/project.css";
import link from "../icons/link-w.svg";
import github from "../icons/github-w.svg";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  const portfolioData = {
    1: {
      title: "first title",
      description: "test description",
      tech1: "JavaScript",
      tech2: "React",
      tech3: "MongoDB",
      link: "#",
      github: "#",
      youtube: "#",
    },
    2: {
      title: "second title",
      description: "test description",
      tech1: "JavaScript",
      tech2: "React",
      tech3: "MongoDB",
      link: "#",
      github: "#",
      youtube: "#",
    },
    3: {
      title: "third title",
      description: "test description",
      tech1: "JavaScript",
      tech2: "React",
      tech3: "MongoDB",
      link: "#",
      github: "#",
      youtube: "#",
    },
    4: {
      title: "fourth title",
      description: "test description",
      tech1: "JavaScript",
      tech2: "React",
      tech3: "MongoDB",
      link: "#",
      github: "#",
      youtube: "#",
    },
  };

  let data = null;

  if ((project = "first")) {
    data = portfolioData[1];
  } else if (project = "second") {
    data = portfolioData[2];
  } else if (project = "third") {
    data = portfolioData[3];
  } else if (project = "fourth") {
    data = portfolioData[4];
  }

  const leftVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 1, opacity: 1, transition: { duration: 1, delay: 0.5}},
    exit: { x: 10, opacity: 0, transition: {duration: 0.5}},
  };

  return (
    <motion.div
      variants={leftVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="project-card"
    >
      <h2 id="project-title">{data.title}</h2>
      <div className="project-description-area">
        <p id="project-description-text">{data.description}</p>
      </div>
      <div className="project-tech-area">
        <ul id="project-tech-list">
          {/* {data.tech.map((tech) => {<li className="project-tech">{tech}</li>})} */}
          <li className="project-tech">{data.tech1}</li>
          <li className="project-tech">{data.tech2}</li>
          <li className="project-tech">{data.tech3}</li>
        </ul>
      </div>
      <div className="project-link-area">
        <button
          className="project-link"
          onClick={() => {
            console.log("link opened");
          }}
        >
          <img
            className="project-link-icon"
            src={link}
            alt="open link icon"
          ></img>
        </button>
        <button
          className="project-link"
          onClick={() => {
            console.log("github opened");
          }}
        >
          <img
            className="project-link-icon"
            src={github}
            alt="github cat icon"
          ></img>
        </button>
      </div>
    </motion.div>
  );
};

export default Project;
