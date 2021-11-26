import React from "react";

export default function Car({ patent, brand, model, color }) {
  return (
    <div>
      <h1>Car Data</h1>
      <h2>{patent}</h2>
      <h2>{brand}</h2>
      <h2>{model}</h2>
      <h2>{color}</h2>
    </div>
  );
}


