import React from "react";
import Logo from "../img/logoNegro.png";
import { Profile } from "./Profile";
import SearchUserByName from "./SearchUserByName";
import Auth from "./Auth";
import { Link, NavLink } from "react-router-dom";
import "../Sass/Styles/NavBar.scss";

function Nav() {
  return (
    <>
      <nav className="NavBar">
        <div className="giveMeARide">
          <div className="izquierda">
            <Link to="/home">
              <img className="logoSubi" src={Logo} alt="" />
            </Link>
          </div>
          <div>
            <Link to="/home" className="nombreSubi">
              <h2 className="nombreSubi">Give me a ride</h2>
            </Link>
          </div>
        </div>
        <div className="searchContainer">
          <NavLink className="searchContainerItem" to="/route">
            <button className="button">Post a Trip</button>
          </NavLink>
        </div>
        <div>
          <SearchUserByName />
        </div>
        <div className="perfylog">
          <div className="profile">
            <Profile />
          </div>
          <div className="logs">
            <Auth />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
