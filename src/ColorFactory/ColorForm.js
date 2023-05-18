import React, { useState } from "react";
import "./ColorForm.css";
import colors from "./colors";
import { useNavigate } from "react-router-dom";

const ColorForm = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState("");
  const handleChange = (e) => {
    setColor((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    colors.push(color);
    navigate("/colors");
    setColor("");
  };

  return (
    <form onSubmit={handleSubmit} className="ColorForm">
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
      <div className="ColorForm-value">
        <label className="ColorForm-label" htmlFor="value">
          Color Value:
        </label>
        <input
          onChange={handleChange}
          className="ColorForm-input"
          type="color"
          name="value"
        ></input>
      </div>
      <button>Submit Color!</button>
    </form>
  );
};

export default ColorForm;
