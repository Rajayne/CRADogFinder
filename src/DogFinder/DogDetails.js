import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dogs from "./dogs";
import BackButton from "./BackButton";
import "./DogDetails.css";

const DogDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const fetchDog = async () => {
      setDog(dogs.find((dog) => dog.name === name));
    };
    fetchDog();
  }, [name]);

  if (!dog) {
    navigate("/dogs");
  } else {
    return (
      <div className="DogDetails">
        <h1 className="DogDetails-title">{dog.name} Details</h1>
        <img className="DogDetails-image" src={dog.src} alt={dog.name}></img>
        <p className="DogDetails-age">Age: {dog.age}</p>
        <ul className="DogDetails-list">
          {dog.facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </ul>
        <BackButton />
      </div>
    );
  }
};

export default DogDetails;
