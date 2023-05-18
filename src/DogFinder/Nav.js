import React from "react";
import { NavLink } from "react-router-dom";
import dogs from "./dogs";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="Nav-bar">
      {dogs.map((dog) => (
        <NavLink className="Nav-link" exact="true" to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
