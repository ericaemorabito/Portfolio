import React, {useState} from "react";
import "../styles/project.css";
import link from "../icons/link-w.svg";
import github from "../icons/github-w.svg";
import { motion } from "framer-motion";

const Project = ({ project }) => {

  const leftVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 1, opacity: 1, transition: { duration: 1, delay: 0.5 } },
    exit: { x: 10, opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={leftVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="project-card"
    >
      <h2 id="project-title">{project.title}</h2>
      <div className="project-description-area">
        <p id="project-description-text">{project.description}</p>
      </div>
      <div className="project-tech-area">
        <ul id="project-tech-list">
          {/* {data.tech.map((tech) => {<li className="project-tech">{tech}</li>})} */}
          <li className="project-tech">{project.tech1}</li>
          <li className="project-tech">{project.tech2}</li>
          <li className="project-tech">{project.tech3}</li>
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
