import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className="nav-container">
      <Navbar.Brand href="#home" className="main-font titles">
        Agnate
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#link" className="main-font black-text">
            About us
          </Nav.Link>
        </Nav>
        <Form inline>
          <a href="https://enlinea.davivienda.cr/ebanking/seguridad/login.htm">
            Create account
            <FontAwesomeIcon
              className="font-orange svg-width main-font"
              icon={faUserCheck}
            />
          </a>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
