import React, { useContext } from "react";
import { useEffect } from "react";
import autitos from "../img/autitos.png";
import Logo from "../img/logo.png";
import { Profile } from "./Profile";
import { useSelector, useDispatch } from "react-redux";
import Auth from "./Auth";
import { NavLink } from "react-router-dom";
import { getUserProfile, getAlluserpro } from "../actions";
import { BsPlusCircle } from "react-icons/bs";
import "../Sass/Styles/NavBar.scss";
import { FormattedMessage } from "react-intl";
import { langContext } from "./../context/langContext.js";
import { useAuth0 } from "@auth0/auth0-react";
import "../Sass/Styles/Login.scss";
import swal from "sweetalert";


export default function Nav() {
  const dispatch = useDispatch();
  const userpro = useSelector(state => state);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const id = isAuthenticated ? user.email : "";
  const idioma = useContext(langContext);
  const { usuariosRegistrados } = useSelector(state => state);
 
 
  useEffect(() => {
    dispatch(getUserProfile(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getAlluserpro());
  }, [dispatch]);

  console.log(userpro,"userpro navbar");
  console.log(usuariosRegistrados,"usuarios registrados");

  function handleClick() {
    swal({
      title: "Sorry",
      text: "You need to be logged in to post a trip!",
      icon: "warning",
      button: "Ok",
    });
    loginWithRedirect();
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
            {!isAuthenticated ? (
              <>
                <button
                  className="emulaPost emulador"
                  onClick={() => handleClick()}
                >
                  <BsPlusCircle className="BsPlusCircle" />
                  <FormattedMessage
                    id="navBar.post"
                    defaultMessage="Post a Trip"
                  />
                </button>
              </>
            ) : (
              <NavLink
                className="postNavLink"
                to={
                  !userpro.dni
                    ? "/register"
                    : userpro.name && userpro.cars.length === 0
                    ? "/car"
                    : userpro.name && userpro.cars[0].patent
                    ? "/route"
                    : ""
                }
              >
                <BsPlusCircle className="BsPlusCircle" />
                <h3>
                  <FormattedMessage
                    id="navBar.post"
                    defaultMessage="Post a Trip"
                  />
                </h3>
              </NavLink>
            )}
          </li>

          <li className="barrita">|</li>

          <li className="profile">
            <Profile />
          </li>
          <li>
            <Auth />
          </li>
        </ul>

        {/* <div className="banderas">
            <button onClick={() => idioma.establecerLenguaje("es-AR")}>
            <img src={es} alt=""></img>
            </button>
            <button onClick={() => idioma.establecerLenguaje("en-US")}>
            <img src={en} alt=""></img>
            </button>
          </div> */}
        {isAuthenticated &&
        usuariosRegistrados
          .map((e) => e.email)
          .filter((e) => e === user.email)[0] === user.email &&
          userpro.isAdmin === true ? (
          <NavLink to="/Admin">Admin</NavLink>
        ) : null}
      </nav>
    </header>
  );
}
