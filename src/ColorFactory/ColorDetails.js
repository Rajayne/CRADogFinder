import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
        <h3>Welcome to the {color.name} Page</h3>
        <BackButton />
      </div>
    );
  }
};

export default ColorDetails;
