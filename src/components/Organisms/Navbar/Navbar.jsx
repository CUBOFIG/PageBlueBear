import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbare = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className="navbar fixed navbar-expand-lg navbar-dark bg-second p-0 xx "
    >
      <div className="container container-me ">
        <Navbar.Brand>
          <NavLink
            // exact
            to={"/"}
            activeClassName="activo "
            duration={500}
            offset={-20}
            type="button"
          >
            <img
              src={require("../../IMG/log2.png")}
              className="PaddingNavLogo"
              alt="CUBE STUDIO"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="basic-navbar-nav"
          className="navbar-togglers"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end ml-5"
        >
          <Nav className="mr-auto">
            <Nav.Item className="p-2">
              <Link
                // exact
                to="sitios"
                onClick={() => setExpanded(false)}
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                offset={-50}
                type="button"
                className="navlink-m"
              >
                Sitios
              </Link>
            </Nav.Item>

            <Nav.Item className="p-2">
              <Link
                // exact
                to="Flujo"
                onClick={() => setExpanded(false)}
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                offset={-50}
                type="button"
                className="navlink-m"
              >
                Trabajo
              </Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Link
                // exact
                to="Packs"
                onClick={() => setExpanded(false)}
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                offset={-50}
                type="button"
                className="navlink-m"
              >
                Preciosos
              </Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Link
                // exact
                to="Contact"
                onClick={() => setExpanded(false)}
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                offset={-50}
                type="button"
                className="navlink-m"
              >
                ¿interesado?
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item className="p-2">
              <Link
                // exact
                to="/Ingresar"
                onClick={() => setExpanded(false)}
                className="navlink-m s d-none d-md-block"
              >
                Ingresar
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item className="p-2">
              <NavLink
                onClick={() => setExpanded(false)}
                to={"/curso"}
                type="button"
                style={{ textDecoration: "none" }}
                className="sss ss d-none d-md-block"
              >
                Registrate
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navbare;
