import React from "react";
import Logo from "../img/logoNegro.png";
import { Profile } from "./Profile";
import Auth from "./Auth";
import { Link, NavLink } from "react-router-dom";
import "../Sass/Styles/NavBar.scss";

function Nav() {
  return (
    <>
      <nav className="NavBar">
        <div className="logs">
          <Auth />
        </div>
        <div className="toito">
          <div className="izquierda">
            <Link to="/home">
              <img className="logoSubi" src={Logo} alt="" />
            </Link>
            <span className="nombreSubi">Subi que te llevo</span>
          </div>
          <div className="derecha">
            <div>
              <ul className="searchContainer">
                <NavLink className="searchContainerItem" to="/">
                  {/* <SearchBar /> */}
                  <h3>🔍 Buscar</h3>
                </NavLink>
                <NavLink className="searchContainerItem" to="/route">
                  <button className="button">Post a Trip</button>
                </NavLink>
              </ul>
            </div>
            <div>
              <Profile />
            </div>
          </div>
        </div>
      </nav>
      <hr className="divider" />
    </>
  );
}

export default Nav;
