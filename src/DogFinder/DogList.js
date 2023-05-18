import React from "react";
import { Link } from "react-router-dom";
import dogs from "./dogs";

const DogList = () => {
  return (
    <div>
      <h1>Dog List</h1>
      {dogs.map((dog) => (
        <Link exact="true" to={`/dogs/${dog.name}`}>
          {dog.name}
        </Link>
      ))}
    </div>
  );
};

export default DogList;
