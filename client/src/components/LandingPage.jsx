import React from "react";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/LandingPage.scss";
import img from "../img/logoNegro.png";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="LandingPageContainer">
        <div className="cosas">
          <img className="logo" src={img} />
          <NavLink to="/home">
            <button className="button">Enter</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
