import React from "react";
import { NavLink } from "react-router-dom";
import ColorNav from "./ColorNav";
import "./ColorList.css";

const ColorList = () => {
  return (
    <div className="ColorList">
      <div className="ColorList-header">
        <h3>Welcome to the color factory.</h3>
        <NavLink className="Nav-link" exact="true" to={`/colors/new`}>
          &gt; Add a Color &lt;
        </NavLink>
      </div>
      <div className="ColorList-body">
        <p>Please select a color.</p>
        <ColorNav />
      </div>
    </div>
  );
};

export default ColorList;
