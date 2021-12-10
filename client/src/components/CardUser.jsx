import React from "react";
import "../Sass/Styles/CardUser.scss";
import { BsGenderFemale, BsGenderMale, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserDetail } from "../actions";
import RatingStar from "./RatingStar";

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

  function genderIcon(gender) {
   

    if (gender === "Male") {
      return <BsGenderMale className="maleGender" />;
    } else if (gender === "Female") {
      return <BsGenderFemale className="femaleGender" />;
    }
  }

  return (
    <>
      <div className="CardUser" {...props}>
        <Link to={`/user/${email}`} onClick={()=>dispatch(getUserDetail(email))}>
          <img src={photo} alt="" />
          <h5>
            {name} {lastName}
          </h5>
          <h5>{age}</h5>
          <h5>{genderIcon(genre)}</h5>
          <h5>
            <RatingStar
            Rating={calification}
            />
          </h5>
        </Link>
      </div>
    </>
  );
}
