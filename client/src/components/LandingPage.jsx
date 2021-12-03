import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/LandingPage.scss";
import img from "../img/logo.png";
import { allRoutes } from "../actions";


export default function LandingPage() {
  const dispatch = useDispatch();
  useEffect(() =>dispatch(allRoutes()));

  return (
    <div className="LandingPage">
      <div className="LandingPageContainer">
        <div className="cosas">
          <img className="logo" src={img} alt="logo" />
          <NavLink to="/home">
            <button className="button">Enter</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
