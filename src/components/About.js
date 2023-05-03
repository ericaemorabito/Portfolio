import React from "react";
import "../styles/about.css";
import mongo from "../icons/mongodb.svg";
import express from "../icons/express.svg";
import react from "../icons/nosql.svg";
import node from "../icons/sequelize.svg";
import { motion } from "framer-motion";

const About = () => {
  const leftVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 1, opacity: 1, transition: { duration: 1, delay: 0.5 } },
    exit: { x: 10, opacity: 0, transition: { duration: 0.5} },
  };

  return (
    <motion.div
      id="about-card"
      variants={leftVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 id="welcome-text">Erica Morabito</h1>
      <hr></hr>
      <div className="about-text-area">
        <p id="about-text">
          I'm a full-stack web developer based in Austin, Texas.
          <br></br>I’m passionate about using code to solve problems and improve
          the lives of others.
        </p>
      </div>
      <div className="tech-logos-area">
        <ul className="tech-logos-list">
          <li className="logo-list-item">
            <img className="tech-logo" src={mongo} alt="mongoDB logo"></img>
          </li>
          <li className="logo-list-item">
            <img className="tech-logo" src={express} alt="mongoDB logo"></img>
          </li>
          <li className="logo-list-item">
            <img className="tech-logo" src={react} alt="mongoDB logo"></img>
          </li>
          <li className="logo-list-item">
            <img className="tech-logo" src={node} alt="mongoDB logo"></img>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;
