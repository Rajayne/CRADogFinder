import React from "react";
import { NavLink } from "react-router-dom";
import colors from "./colors";

const ColorNav = () => {
  return (
    <nav className="Nav-bar">
      {colors.map((color) => (
        <NavLink className="Nav-link" exact="true" to={`/colors/${color}`}>
          {color}
        </NavLink>
      ))}
    </nav>
  );
};

export default ColorNav;
