import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { editUser, getUserDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import {
  BsFillTelephoneFill,
  BsGenderFemale,
  BsGenderMale,
  BsInstagram,
  BsFacebook,
  BsStarFill,
  BsMap,
  BsEnvelope,
} from "react-icons/bs";
import "../Sass/Styles/UserProfile.scss";
import "../Sass/Styles/App.scss";
import { useHistory } from "react-router";

let editInfo = false;
export default function UserProfile() {
  const { user, isAuthenticated } = useAuth0();
  const userInfo = useSelector((state) => state.user);
  const [boolean, setBoolean] = useState(false);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    street: "",
    city: "",
    province: "",
    telephone: "",
    facebook: "",
    instagram: "",
    about: "",
    age: "",
  });

  useEffect(() => {
    dispatch(getUserDetail(user.email));
  }, [input]);

  

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editUser(userInfo.email, input));
    setBoolean(false)
    setInput({
      street: userInfo.street,
      city: userInfo.city,
      province: userInfo.province,
      telephone: userInfo.telephone,
      facebook: userInfo.facebook,
      instagram: userInfo.instagram,
      about: userInfo.about,
      age: userInfo.age,
    });
  
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick() {
    if (boolean === false) {
      setBoolean(true);
    } else {
      setBoolean(false);
    }
    setInput({
      street: userInfo.street,
      city: userInfo.city,
      province: userInfo.province,
      telephone: userInfo.telephone,
      facebook: userInfo.facebook,
      instagram: userInfo.instagram,
      about: userInfo.about,
      age: userInfo.age,
    });
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function genderIcon(gender) {
    if (gender === "Male") {
      return <BsGenderMale className="maleGender" />;
    } else if (gender === "Female") {
      return <BsGenderFemale className="femaleGender" />;
    }
  }

  return (
    <div>
      <div className="containerProfile">
        <div className="ProfileReal">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {!boolean ? (
              <button className="botonEdit" onClick={() => handleClick()}>
                Edit information
              </button>
            ) : (
              <button
                className="botonEditDisabled"
                onClick={() => handleClick()}
              >
                Edit information
              </button>
            )}
          </div>
          {boolean === false ? (
            <>
              <div className="">
                <img
                  src={userInfo.photo ? userInfo.photo : userInfo.picture}
                  alt="User Image"
                  style={{
                    width: "250px",
                    borderRadius: 99999999,
                    margin: "1rem",
                  }}
                />
                <div className="datosUsuario">
                  <h1 className="titulos">
                    {userInfo.name} {userInfo.lastName}{" "}
                    {genderIcon(userInfo.genre)}
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "auto",
                    }}
                  >
                    <h1 className="titulosEdad">{userInfo.age} years old</h1>
                  </div>
                  <div className="cadaLinea">
                    <p className="label">About: {userInfo.about}</p>
                  </div>
                  <br />
                  <div className="moreInfo">
                    <div className="cadaLinea">
                      <BsStarFill className="icon" /> {userInfo.calification} /
                      5
                    </div>
                    <div className="cadaLinea">
                      <BsFillTelephoneFill className="icon" />{" "}
                      {userInfo.telephone}
                    </div>
                    <div className="cadaLinea">
                      <BsEnvelope className="icon" /> {userInfo.email}
                    </div>
                    <div className="cadaLinea">
                      <BsFacebook className="icon" /> {userInfo.facebook}
                    </div>
                    <div className="cadaLinea">
                      <BsInstagram className="icon" /> {userInfo.instagram}
                    </div>
                    <div className="cadaLinea">
                      <BsMap className="icon" /> {userInfo.street},{" "}
                      {userInfo.city},{userInfo.province}
                    </div>
                  </div>
                </div>
              </div>
              <div className="paddingAbajo"></div>
            </>
          ) : (
            <>
              <div className="">
                <img
                  src={userInfo.photo ? userInfo.photo : userInfo.picture}
                  alt="User Image"
                  style={{
                    width: "250px",
                    borderRadius: 99999999,
                    margin: "1rem",
                  }}
                />
                <div className="datosUsuario">
                  <h1 className="titulos">
                    {userInfo.name} {userInfo.lastName}{" "}
                    {genderIcon(userInfo.genre)}
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "auto",
                    }}
                  >
                    <h1 className="titulosEdad"> {userInfo.age} years old</h1>
                  </div>
                  <div className="cadaLinea">
                    <p className="label">About: {userInfo.about}</p>
                    <textarea
                      type="text"
                      name="about"
                      value={userInfo.about}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <br />
                  <div className="moreInfo">
                    <div className="cadaLinea">
                      <BsStarFill className="icon" /> {userInfo.calification} /
                      5
                    </div>
                    <div className="cadaLinea">
                      <BsFillTelephoneFill className="icon" />
                      <input
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="telephone"
                        className="inputProfile"
                        value={input.telephone}
                      />
                    </div>
                    <div className="cadaLinea">
                      <BsEnvelope className="icon" />
                      {userInfo.email}
                    </div>
                    <div className="cadaLinea">
                      <BsFacebook className="icon" />
                      <input
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="facebook"
                        className="inputProfile"
                        value={input.facebook}
                      />
                    </div>
                    <div className="cadaLinea">
                      <BsInstagram className="icon" />
                      <input
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="instagram"
                        className="inputProfile"
                        value={input.instagram}
                      />
                    </div>
                    <div className="cadaLinea">
                      <BsMap className="icon" />
                      <input
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="street"
                        className="inputProfile"
                        value={input.street}
                      />
                      <input
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="city"
                        className="inputProfile"
                        value={input.city}
                      />
                      <input
                        onChange={(e) => handleChange(e)}
                        name="province"
                        type="text"
                        className="inputProfile"
                        value={input.province}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="botonEdit"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
