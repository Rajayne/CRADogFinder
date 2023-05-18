import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./ColorDetails.css";
import BackButton from "./BackButton";
import colors from "./colors";

const ColorDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [color, setColor] = useState("");

  useEffect(() => {
    const fetchColor = async () => {
      setColor(colors.find((color) => color.name === name));
    };
    fetchColor();
  }, [name]);

  if (!color) {
    navigate("/colors");
  } else {
    return (
      <div style={{ backgroundColor: color.value }} className="ColorDetails">
        <h3>Color Details</h3>
        <BackButton />
      </div>
    );
  }
};

export default ColorDetails;