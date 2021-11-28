import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Sass/Styles/Home.scss";
import header from "../img/header.jpg";
//import Auth from "./Auth"

export default function Home() {
  return (
    <div className="Home">
      <h1>Give me a ride</h1>
      <img className="fotoHeader" src={header} alt="header" />
      <Link to="/register">Register as User</Link>
      <Link to="/route-list">Route List</Link>
      <Link to="/">
        <button className="buttonBlue">Back</button>
      </Link>
    </div>
  );
}
