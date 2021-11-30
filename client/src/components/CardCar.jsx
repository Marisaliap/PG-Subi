import React from "react";

export default function CardCar({ patent, brand, model, color, ...props }) {
  return (
    <div {...props}>
      <h4>Car Data</h4>
      <h5>{patent}</h5>
      <h5>{brand}</h5>
      <h5>{model}</h5>
      <h5>{color}</h5>
    </div>
  );
}


