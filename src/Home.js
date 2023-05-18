import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h3>Welcome to the Home Page</h3>
      <p>Select a link below to Navigate:</p>
      <Link className="Home-link" exact="true" to={`/dogs`}>
        Dog Finder
      </Link>
      <Link className="Home-link" exact="true" to={`/colors`}>
        Color Factory
      </Link>
    </div>
  );
};

export default Home;
