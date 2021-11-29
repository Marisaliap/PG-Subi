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
        <div className="izquierda">
          <Link to="/home">
            <img className="logoSubi" src={Logo} alt="" />
          </Link>
          <span className="nombreSubi">Give me a ride</span>
        </div>
        <div className="logs">
          <Auth />
        </div>
        <div className="derecha">
          <div>
            <ul className="searchContainer">
             {/*  <NavLink className="searchContainerItem" to="/">
                <h3>🔍 Search</h3>
              </NavLink> */}
              <NavLink className="searchContainerItem" to="/route">
                <button className="button">Post a Trip</button>
              </NavLink>
              <SearchUserByName />
            </ul>
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </nav>
      <hr className="divider" />
    </>
  );
}

export default Nav;
