import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import autitos from "../img/autitos.png";
import Logo from "../img/logo.png";
import { Profile } from "./Profile";
import { useSelector, useDispatch } from "react-redux";
import Auth from "./Auth";
import { NavLink, Link } from "react-router-dom";
import { getUserProfile, getAllUsers } from "../actions";
import {
  BsPlusCircle,
  BsShieldLock,
  BsCaretDownFill,
  BsPersonCircle,
  BsChevronRight,
} from "react-icons/bs";
import "../Sass/Styles/NavBar.scss";
import { FormattedMessage } from "react-intl";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

export default function Nav() {
  const dispatch = useDispatch();
  const userpro = useSelector((state) => state.userpro);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0(); // eslint-disable-line
  const [dropdown, setDropdown] = useState(false);
  const id = isAuthenticated ? user.email : "";
  const usuariosRegistrados = useSelector((state) => state.usuariosRegistrados);
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserProfile(id));
  }, [userpro.photo, userpro.cars && userpro.cars.length]); // eslint-disable-line

  useEffect(() => {
    dispatch(getAllUsers());
  }, []); // eslint-disable-line

  function handleDropdown() {
    !dropdown ? setDropdown(true) : setDropdown(false);
  }

  function handleClick() {
    if (!isAuthenticated) {
      return new Swal({
        icon: "warning",
        title: "Sorry",
        text: "You need to be logged in to post a trip!",
        confirmButtonText: "Alright",
      });
    } else {
      if (!userpro.dni) {
        return new Swal({
          icon: "warning",
          title: "Sorry",
          text: "You need to be registered to post a trip!",
          confirmButtonText: "Register",
          denyButtonText: `Go Back`,
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/register");
          }
        });
      } else if (userpro.name && userpro.cars.length === 0) {
        return new Swal({
          icon: "warning",
          title: "Sorry",
          text: "Please give us your car information",
          confirmButtonText: "Okay",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/car");
          }
        });
      } else if (userpro.name && userpro.cars && userpro.cars[0].patent)
        history.push("/route");
    }
  }

  return (
    <header className="NavBar">
      <NavLink to="/home">
        <img className="autitos" src={autitos} alt="" />
        <img className="logo" src={Logo} alt="" />
      </NavLink>
      <nav>
        <ul>
          <li>
            {isAuthenticated &&
            usuariosRegistrados
              .map((e) => e.email)
              .filter((e) => e === user.email)[0] === user.email &&
            userpro.isAdmin === true ? (
              <button className="NavLinks">
                <NavLink to="/admin" className="NavLinks">
                  <BsShieldLock className="linkIcon" />
                  <h3>Admin</h3>
                </NavLink>
              </button>
            ) : null}
          </li>
          <li>
            <button className="NavLinks" onClick={handleClick}>
              <BsPlusCircle className="linkIcon" />
              <h3>
                <FormattedMessage
                  id="navBar.post"
                  defaultMessage="Post a Trip"
                />
              </h3>
            </button>
          </li>

          <li className="barrita">|</li>

          <li className="profile" tabIndex="0" onClick={handleDropdown}>
            {isAuthenticated ? (
              <Profile />
            ) : (
              <BsPersonCircle className="linkIcon" />
            )}
            <BsCaretDownFill className={!dropdown ? "caret" : "caretOpen"} />

            {dropdown && (
              <div className="dropdown-content">
                {isAuthenticated && userpro.dni ? (
                  <Link className="Link" to="/profile">
                    <div className="dropdown-menu">
                      <h3>Profile</h3>
                      <BsChevronRight />
                    </div>
                  </Link>
                ) : (
                  isAuthenticated && (
                    <Link className="Link" to="/register">
                      <div className="dropdown-menu">
                        <h3>Register</h3>
                        <BsChevronRight />
                      </div>
                    </Link>
                  )
                )}
                <div className="dropdown-menu">
                  <Auth />
                  <BsChevronRight />
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
