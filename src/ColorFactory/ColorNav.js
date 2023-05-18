import React from "react";
import { NavLink } from "react-router-dom";
import "./ColorNav.css";
import colors from "./colors";

const ColorNav = () => {
  return (
    <nav className="ColorNav-bar">
      {colors.map((color) => (
        <NavLink
          className="ColorNav-link"
          exact="true"
          to={`/colors/${color.name}`}
        >
          {color.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default ColorNav;
