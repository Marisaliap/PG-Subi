import React, { useEffect } from "react";
import "../Sass/Styles/CardUser.scss";
import { useDispatch } from "react-redux";
import { getUserDetail } from "../actions";
import RatingStar from "./RatingStar";

export default function CardUser({
  photo,
  name,
  lastName,
  calification,
  email,
}) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUserDetail(email)), [dispatch]); // eslint-disable-line
  return (
    <div className="CardUser">
      <img src={photo ? photo : ""} alt="" />
      <h5>
        {name} {lastName}
      </h5>
      <h5>
        <RatingStar Rating={calification} />
      </h5>
    </div>
  );
}
