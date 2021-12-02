import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Sass/Styles/Home.scss";
import header from "../img/header.png";
import group2 from "../img/group2.png";
import SearchBarHome from "./SearchBarHome";
import { useSelector } from "react-redux";

export default function Home() {
  const  users = useSelector(state => state.user);
  return (
    <div className="Home">
      <div>
        <img className="fotoHeader" src={header} alt="header" />
      </div>
      <div>
        <SearchBarHome />
      </div>
      <div className="Article">
        <div></div>
        <div>
          <img className="foto" src={group2} alt="Home" />
        </div>
        <article>
          <h1>Save money while driving</h1>
          <p> Publish your next round trip on GiveMeaRide and get, on average, 80 dollars * 
            of your passengers. You will only need a couple of minutes to publish your route. 
            Do we share a trip?

          <p>* Average amount received by drivers in 2021.</p>
          </p>
          <div className="searchContainer">
        {null&&!users&&users.cars[0]? 
         <NavLink className="searchContainerItem" to="/route">
            <button className="button">Post a Trip</button>
          </NavLink>: 
          <NavLink className="searchContainerItem" to="/car">
            <button className="button">Post a Trip</button>
          </NavLink>}
          </div>
        </article>
      </div>
    </div>
  );
}
