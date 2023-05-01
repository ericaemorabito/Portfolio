import React from 'react'
import { Nav,
  Navbar,
  Offcanvas,
  Container, } from 'react-bootstrap'
import "./header.css";
import logo from '../../icons/logo.png'

const Header = () => {
  return (
    <header>
      <Navbar fixed='top' collapseOnSelect expand="lg" className="mb-1">
        <Container fluid>
          <Navbar.Brand className="mx-2" href="#">
            <img
              src={logo}
              width="200"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbarLabel-expand-lg" />
          <Navbar.Offcanvas
            collapseOnSelect
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="nav-links text-center" href="#about">
                  ABOUT
                </Nav.Link>
                <Nav.Link className="nav-links text-center" href="/Restaurant_Website/#/about">
                  PROJECTS
                </Nav.Link>
                <Nav.Link className="nav-links text-center" href="/Restaurant_Website/#/about">
                  CONTACT
                </Nav.Link>
                <Nav.Link className="nav-links text-center" href="/Restaurant_Website/#/about">
                  RESUME
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </header>
  )
}

export default Header