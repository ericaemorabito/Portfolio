import React from "react";
import "../styles/header.css";
import logo from "../icons/logo.png";
import linkedin from "../icons/linkedin-white.svg";
import github from "../icons/github-white.svg";
import resume from "../icons/file-white.svg";
import email from '../icons/gmail-white.svg';
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
              <img className="header-icon" src={email} alt="gmail logo"></img>
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
