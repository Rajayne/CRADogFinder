import React from "react";
import dogs from "./dogs";

const DogList = () => {
  return (
    <div>
      <h1>Dog List</h1>
      {dogs.map((dog) => (
        <p>{dog.name}</p>
      ))}
    </div>
  );
};

export default DogList;
