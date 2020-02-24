import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

export default function CustomNavbar() {
  return (
    <div className="container">
      <Navbar expand="lg" className="nav-container">
        <Navbar.Brand className="main-font">
          <Link to="/" className="titles">
            Agnate
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link" className="main-font black-text">
              About us
            </Nav.Link>
          </Nav>
          <Form inline>
            <Link to="/register">
              Register
              <FontAwesomeIcon
                className="font-orange svg-width main-font"
                icon={faUserCheck}
              />
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
