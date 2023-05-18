import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ColorNav from "./ColorNav";
import "./ColorList.css";
import colors from "./colors";

const ColorList = () => {
  const [colorList, setColorList] = useState(colors);

  useEffect(() => {
    setColorList(colors);
    localStorage.setItem("colors", JSON.stringify(colorList));
  }, [colorList]);

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
