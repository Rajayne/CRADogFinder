import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link className="BackButton" exact="true" to={`/dogs`}>
      Return to List
    </Link>
  );
};

export default BackButton;
