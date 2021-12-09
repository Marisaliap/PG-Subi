import React from "react";
import { useEffect } from "react";
import { getUserDetail, getUserByName, getUserById } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import SearchUserByName from "./SearchUserByName";
import SearchUserById from "./SearchUserById";
import { FormattedMessage } from "react-intl";
import {
  BsFillTelephoneFill,
  BsGenderFemale,
  BsGenderMale,
  BsInstagram,
  BsFacebook,
  BsStarFill,
  BsMap,
  BsEnvelope,
  BsInfoSquareFill,
} from "react-icons/bs";
import "../Sass/Styles/UserDetails.scss";

export default function UserProfile() {
  const userInfo = useSelector((state) => state.user);
  const autoInfo = useSelector((state) => state.car);
  let idAuto;
  autoInfo === undefined ? (idAuto = "") : (idAuto = autoInfo.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(""));
    dispatch(getUserByName("1010"));
  }, []);

  useEffect(() => {
    dispatch(getUserDetail(userInfo.email));
  }, [dispatch]);

  function genderIcon(gender) {
    if (gender === "Male") {
      return <BsGenderMale className="maleGender" />;
    } else if (gender === "Female") {
      return <BsGenderFemale className="femaleGender" />;
    }
  }

  return (
    <div>
      <div className="searchUsers">
        <SearchUserByName />
        <SearchUserById />
      </div>
      <div className="containerProfile">
        <div className="ProfileReal">
          <div className="centralo">
            <h1 className="tituloUserProfile">User Details</h1>
          </div>
          <div className="ubicatop"></div>
          <div className="seccionTopDetail">
            <div className="containerPhoto">
              <div className="ubicaBotonPhoto"></div>
              <img className="photousuario" src={userInfo.photo} alt="User" />
              <div>
                <h1 className="titulos">
                  {userInfo.name} {userInfo.lastName}{" "}
                  {genderIcon(userInfo.genre)}
                </h1>
                <div className="labelArriba">
                  <BsStarFill className="iconArriba" /> {userInfo.calification}{" "}
                  / 5
                </div>
              </div>
            </div>
            <div className="datosUsuario">
              <div className="edadyemail">
                <div className="labelArriba">
                  <BsEnvelope className="iconArriba" /> {userInfo.email}
                </div>
                <p className="labelArriba"> {userInfo.age} years old</p>
              </div>
              <div className="moreInfo">
                <div className="cadaLinea">
                  <BsFacebook className="icon" /> {userInfo.facebook}
                </div>
                <div className="cadaLinea">
                  <BsInstagram className="icon" /> {userInfo.instagram}
                </div>
                <div className="cadaLinea">
                  <BsInfoSquareFill className="icon" />
                  {userInfo.about}
                </div>
              </div>
              <div className="paddingAbajo"></div>
            </div>
          </div>
          <div className="centralo">
            <h1 className="tituloUserProfile">Car Details</h1>
          </div>
          <div className="patents">
            <div className="cadaLinea">
              <p className="label">Brand:</p>
              {userInfo.cars && userInfo.cars.length === 0 ? (
                ""
              ) : (
                <p className="label">{autoInfo.brand}</p>
              )}
            </div>
            <div className="cadaLinea">
              <p className="label">Model:</p>
              {userInfo.cars && userInfo.cars.length === 0 ? (
                ""
              ) : (
                <p className="label">{autoInfo.model}</p>
              )}
            </div>
            <div className="cadaLinea">
              <p className="label">Plate:</p>
              {userInfo.cars && userInfo.cars.length === 0 ? (
                ""
              ) : (
                <p className="label">{autoInfo.patent}</p>
              )}
            </div>
          </div>
          <div className="patents">
            <div className="cadaLinea">
              <p className="label">Color:</p>
              {userInfo.cars && userInfo.cars.length === 0 ? (
                ""
              ) : (
                <p className="label">{autoInfo.color}</p>
              )}
            </div>
            <div className="cadaLinea">
              <p className="label">Cylinder:</p>
              {userInfo.cars && userInfo.cars.length === 0 ? (
                ""
              ) : (
                <p className="label">{autoInfo.cylinder}</p>
              )}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
