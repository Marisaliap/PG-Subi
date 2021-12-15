import React, { useEffect } from "react";
import "../Sass/Styles/UserCardPerfil.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserDetail } from "../actions";
import RatingStar from "./RatingStar";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

export default function CardUser({
  photo,
  name,
  lastName,
  genre,
  age,
  calification,
  email,
  ...props
}) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUserDetail(email)), [dispatch]); // eslint-disable-line

  function genderIcon(gender) {
    if (gender === "Male") {
      return <BsGenderMale className="maleGender" />;
    } else if (gender === "Female") {
      return <BsGenderFemale className="femaleGender" />;
    }
  }
  return (
    <div className="CardUser" {...props}>
      <Link to={`/user/${email}`}>
        <img src={photo} alt="" />
        <h5>
          {name} {lastName}
        </h5>
        <h5>{age}</h5>
        <h5>{genderIcon(genre)}</h5>
        <h5>
          <RatingStar Rating={calification} />
        </h5>
      </Link>
    </div>
  );
}
