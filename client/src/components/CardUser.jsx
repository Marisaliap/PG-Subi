import React from "react";
import { BsStarFill } from "react-icons/bs";
import "../Sass/Styles/CardUser.scss";

export default function CardUser({
  photo,
  name,
  lastName,
  genre,
  age,
  calification,
  ...props
}) {
  return (
    <div className="CardUser" {...props}>
      <img src={photo} alt="" /> <h5>Name: {name}</h5>
      <h5>LastName: {lastName}</h5>
      <h5>Genre: {genre}</h5>
      <h5>Age: {age}</h5>
      <h5>
        <BsStarFill className="icon" />
        {calification} /5
      </h5>
    </div>
  );
}
