import React, { useState } from "react";
import "./ColorForm.css";

const ColorForm = () => {
  const [color, setColor] = useState("");

  return (
    <form className="ColorForm">
      <h3>Add Color Form</h3>
      <div className="ColorForm-name">
        <label className="ColorForm-label" htmlFor="name">
          Color Name:
        </label>
        <input className="ColorForm-input" type="text" name="name"></input>
      </div>
      <div className="ColorForm-hex">
        <label className="ColorForm-label" htmlFor="hex">
          Color Value:
        </label>
        <input className="ColorForm-input" type="color" name="hex"></input>
      </div>
      <button>Submit Color!</button>
    </form>
  );
};

export default ColorForm;
