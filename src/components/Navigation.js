import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active" className="hover">
          <li>Accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/projet-1"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Projet 1</li>
            </NavLink>
            <NavLink
              to="/projet-2"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Projet 2</li>
            </NavLink>
            <NavLink
              to="/projet-3"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Projet 3</li>
            </NavLink>
            <NavLink
              to="/projet-4"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Projet 4</li>
            </NavLink>
          </ul>
        </li>

        <NavLink to="/contact" activeClassName="nav-active" className="hover">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
