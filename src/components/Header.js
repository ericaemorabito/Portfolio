import React from "react";
import "../styles/header.css";
import logo from "../icons/logo.png";
import linkedin from "../icons/link-w.svg";
import github from "../icons/github-round.svg";
import resume from "../icons/resume.svg";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Row className="header-row">
        <Col lg={2} md={6} sm={2} className="brand-area">
          <img id="brand-logo" src={logo}></img>
        </Col>
        <Col lg={10} md={6} sm={10} className="icon-area">
          <ul className="icon-list">
            <li>
              <img className="header-icon" src={github} alt="github logo"></img>
            </li>
            <li>
              <img
                className="header-icon"
                src={linkedin}
                alt="github logo"
              ></img>
            </li>
            <li>
              <img className="header-icon" src={resume} alt="github logo"></img>
            </li>
          </ul>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
