import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function LandingPage() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="main-font">
        Agnate Bank
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="main-font">
            Create account
          </Nav.Link>
          <Nav.Link href="#link" className="main-font">
            About us
          </Nav.Link>
        </Nav>
        <Form inline>
          <a href="https://enlinea.davivienda.cr/ebanking/seguridad/login.htm">
            Online Banking
            <FontAwesomeIcon
              className="font-orange svg-width main-font"
              icon={faSignOutAlt}
            />
          </a>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
