import React from "react";
import { redirect, useParams } from "react-router-dom";
import dogs from "./dogs";
import "./DogDetails.css";

const DogDetails = () => {
  const { name } = useParams();
  let dog = dogs.find((dog) => dog.name === name);

  if (dog) {
    return (
      <div className="DogDetails">
        <h1 className="DogDetails-title">{dog.name} Details</h1>
        <img className="DogDetails-image" src={dog.src} alt={dog.name}></img>
        <p>Age: {dog.age}</p>
        <ul>
          {dog.facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return redirect("/dogs");
  }
};

export default DogDetails;
