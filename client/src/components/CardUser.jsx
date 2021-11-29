import React from "react";
import img from "../img/photoDefault.jpg";
import { BsStarFill } from "react-icons/bs";
export default function CardUser({
  photo,
  name,
  lastName,
  genre,
  age,
  calification,
}) {
  return (
    <div>
      <h4></h4>
      <br />
      <br />
      <img src={img} style={{ width: "150px" }} alt="" />{" "}
      {/*agregar url de img*/}
      <h5>{name}</h5>
      <h5>{lastName}</h5>
      <h5>{genre}</h5>
      <h5>{age}</h5>
      <BsStarFill className="icon" />{" "}
      {calification === undefined ? 0 : calification} / 5
    </div>
  );
}
