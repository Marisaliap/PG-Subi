import React from "react";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/LandingPage.scss";
import img from "../img/logoNegro.png";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="LandingPageContainer">
        <img className="logo" src={img} />
        {/* <h1 className="title">Give me a ride</h1> */}
        <p className="paragraph">Travel with all of us</p>
        <NavLink to="/home">
          <button className="button">Enter</button>
        </NavLink>
      </div>
    </div>
  );
}
