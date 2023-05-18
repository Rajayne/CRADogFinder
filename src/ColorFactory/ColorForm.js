import React, { useState } from "react";
import "./ColorForm.css";

const ColorForm = () => {
  const [color, setColor] = useState("");
  const handleChange = (e) => {
    setColor((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="ColorForm">
      <h3>Add Color Form</h3>
      <div className="ColorForm-name">
        <label className="ColorForm-label" htmlFor="name">
          Color Name:
        </label>
        <input
          onChange={handleChange}
          className="ColorForm-input"
          type="text"
          name="name"
        ></input>
      </div>
      <div className="ColorForm-hex">
        <label className="ColorForm-label" htmlFor="hex">
          Color Value:
        </label>
        <input
          onChange={handleChange}
          className="ColorForm-input"
          type="color"
          name="hex"
        ></input>
      </div>
      <button>Submit Color!</button>
    </form>
  );
};

export default ColorForm;
