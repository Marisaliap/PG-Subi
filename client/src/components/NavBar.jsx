import React from "react";
import { useEffect } from "react";
import Logo from "../img/logo.png";
import { Profile } from "./Profile";
import SearchUserByName from "./SearchUserByName";
import { useSelector, useDispatch } from "react-redux";
import Auth from "./Auth";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";
import { getUserDetail } from "../actions";
import "../Sass/Styles/NavBar.scss";

function Nav() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const { user, isAuthenticated } = useAuth0();
  const id = isAuthenticated ? user.email : "";

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <nav className="NavBar">
        <div className="GimmeARide">
          <div className="izquierda">
            <Link to="/home">
              <img className="logoSubi" src={Logo} alt="" />
            </Link>
          </div>
          <div>
            <Link to="/home" className="nombreSubi">
              <h2 className="nombreSubi">Gimme a Ride</h2>
            </Link>
          </div>
        </div>
        <div className="searchContainer">
          <NavLink to="/route-list" className="searchContainerItem">
            <button className="button">Route List</button>
          </NavLink>
        </div>
        <div className="searchContainer">
          {
            <NavLink
              className="searchContainerItem"
              to={
                !users.dni
                  ? "/register"
                  : users.name && users.cars.length === 0
                  ? "/car"
                  : users.name && users.cars[0].patent
                  ? "/route"
                  : ""
              }
            >
              <button className="button">Post a Trip</button>
            </NavLink>
          }
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
