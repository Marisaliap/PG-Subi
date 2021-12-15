import React from "react";
import { useEffect } from "react";
import { getUserDetail, userPost } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import SearchUserByName from "./SearchUserByName";
import SearchUserById from "./SearchUserById";
import { Link } from "react-router-dom";
import {
  BsGenderFemale,
  BsGenderMale,
  BsInstagram,
  BsFacebook,
  BsEnvelope,
  BsInfoSquareFill,
} from "react-icons/bs";
import "../Sass/Styles/UserDetails.scss";
import Post from "./Post";
import RatingStar from "./RatingStar.jsx";
import { FormattedMessage } from 'react-intl';




export default function UserDetails(props) {
  const userInfo = useSelector((state) => state.user);
  const autoInfo = useSelector((state) => state.car);
  const dispatch = useDispatch();

  const id = props.match.params.id;

  useEffect(() => {
    userInfo.email === undefined
      ? dispatch(getUserDetail(window.location.href.split("/user/")[1]))
      : dispatch(getUserDetail(id));
    dispatch(userPost(userInfo.email));
  }, [userInfo.email, dispatch, userInfo.calification]); // eslint-disable-line

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
            <h1 className="tituloUserProfile"><FormattedMessage id= "userdetails.title" defaultMessage="User Details" /></h1>
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
                  <RatingStar Rating={userInfo.calification} />
                </div>
              </div>
            </div>
            <div className="datosUsuario">
              <div className="edadyemail">
                <div className="labelArriba">
                  <BsEnvelope className="iconArriba" /> {userInfo.email}
                </div>
                <p className="labelArriba"> {userInfo.age} <FormattedMessage id= "userdetails.yearsold" defaultMessage="years old" /></p>
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
            <h1 className="tituloUserProfile"><FormattedMessage id= "userdetails.cardetails" defaultMessage="Car Details" /></h1>
          </div>
          <div className="patents">
            <div className="cadaLinea">
              <p className="label"><FormattedMessage id= "userdetails.brand" defaultMessage="Brand:" /></p>
              {userInfo.cars && userInfo.cars.length === 0 ? (
                ""
              ) : (
                <p className="label">{autoInfo.brand}</p>
              )}
            </div>
            <div className="cadaLinea">
              <p className="label"><FormattedMessage id= "userdetails.model" defaultMessage="Model:" /></p>
              {userInfo.cars && userInfo.cars.length === 0 ? (
                ""
              ) : (
                <p className="label">{autoInfo.model}</p>
              )}
            </div>
            <div className="cadaLinea">
              <p className="label"><FormattedMessage id= "userdetails.patent" defaultMessage="Patent:" /></p>
              {userInfo.cars && userInfo.cars.length === 0 ? (
                ""
              ) : (
                <p className="label">{autoInfo.patent}</p>
              )}
            </div>
          </div>
          <div className="patents">
            <div className="cadaLinea">
              <p className="label"><FormattedMessage id= "userdetails.color" defaultMessage="Color:" /></p>
              {userInfo.cars && userInfo.cars.length === 0 ? (
                ""
              ) : (
                <p className="label">{autoInfo.color}</p>
              )}
            </div>
            <div className="cadaLinea">
              <p className="label"><FormattedMessage id= "userdetails.cylinder" defaultMessage="Cylinder:" /></p>
              {userInfo.cars && userInfo.cars.length === 0 ? (
                ""
              ) : (
                <p className="label">{autoInfo.cylinder}</p>
              )}
            </div>
          </div>
          <div className="centralo">
            <h1 className="tituloUserProfile"><FormattedMessage id= "userdetails.rating" defaultMessage="Rating" /></h1>
          </div>
          <Post id={id} />
          <div style={{ height: 300, width: "100%" }}>
            <div className="centralo">
              <h1 className="tituloUserProfile"><FormattedMessage id= "userdetails.chats" defaultMessage="Chats" /></h1>
            </div>
            {userInfo && userInfo.chats ? (
              <>
                <Link to={`/chat/${userInfo.email}`}>{userInfo.email}</Link>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
