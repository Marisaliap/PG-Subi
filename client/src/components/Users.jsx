import React from "react";

export default function Users({name, lastName, genre, age, image, calification}) {
  return (
    <div>
    <h1>Users Data</h1>
      <img src={image} alt={name} />
        <h2>{name}</h2>
        <h2>{lastName}</h2>
        <h2>{genre}</h2>
        <h2>{age}</h2>
        <h2>{calification}</h2>
    </div>
  );
}
