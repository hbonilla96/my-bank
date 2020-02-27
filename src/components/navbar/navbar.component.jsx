import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { loginService } from "../../services/loginService";

export default function CustomNavbar() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const subs = loginService.userData.subscribe(data =>
      setIsLogged(data.isUserLogged)
    );

    return () => subs.unsubscribe();
  }, []);

  return (
    <div className="container">
      <Navbar expand="lg" className="nav-container">
        {!isLogged && (
          <>
            {" "}
            <Navbar.Brand className="main-font">
              <Link to="/" className="title-font titles">
                Agnate
              </Link>
            </Navbar.Brand>
          </>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {isLogged && (
            <>
              <Nav className="mr-auto">
                <Link to="/transfers" className="title-font">
                  Transfers
                </Link>
              </Nav>
              <Nav className="mr-auto">
                <Link to="/dashboard" className="title-font">
                  Dashboard
                </Link>
              </Nav>
              <Nav className="mr-auto">
                <Link to="/configuration" className="title-font">
                  Configuration
                </Link>
              </Nav>
              <Nav className="mr-auto nav-logout">
                <button
                  type="button"
                  className="default-button title-font"
                  onClick={loginService.logOut}
                >
                  Log out
                  <FontAwesomeIcon
                    className="font-orange svg-width main-font"
                    icon={faSignOutAlt}
                  ></FontAwesomeIcon>
                </button>
              </Nav>
            </>
          )}

          {!isLogged && (
            <Nav inline="true">
              <Link to="/register" className="title-font">
                Sign up
                <FontAwesomeIcon
                  className="font-orange svg-width main-font"
                  icon={faUserCheck}
                />
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
