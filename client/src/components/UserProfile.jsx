import React, { useState } from "react";
import { useEffect } from "react";
import { editUser, getUserDetail, editCar, postUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import SearchUserByName from "./SearchUserByName";
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
} from "react-icons/bs";
import "../Sass/Styles/UserProfile.scss";
import "../Sass/Styles/App.scss";

export default function UserProfile() {
  const userInfo = useSelector((state) => state.user);
  const autoInfo = useSelector((state) => state.car);
  let idAuto;
  autoInfo === undefined ? (idAuto = "") : (idAuto = autoInfo.id);
  const [loanding, setLoanding] = useState(false);
  const [image, setImage] = useState("");
  const [booleanUser, setBooleanUser] = useState(false);
  const [booleanCar, setBooleanCar] = useState(false);
  const [booleanPhoto, setBooleanPhoto] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetail(userInfo.email));
  }, [booleanUser, booleanCar, booleanPhoto, dispatch]);

  const [input, setInput] = useState({});

  const [auto, setAuto] = useState({});

  function handleSubmitUser(e) {
    e.preventDefault();
    dispatch(editUser(userInfo.email, input));
    setBooleanUser(false);
    dispatch(getUserDetail(userInfo.email));
  }

  function handleSubmitCar(e) {
    e.preventDefault();
    dispatch(editCar(idAuto, auto));
    setBooleanCar(false);
    setAuto({
      patent: userInfo.cars[0].patent,
      color: userInfo.cars[0].color,
      brand: userInfo.cars[0].brand,
      model: userInfo.cars[0].model,
      cylinder: userInfo.cars[0].cylinder,
    });
  }

  function handleSubmitPhoto(e) {
    e.preventDefault();
    setImage("");
    dispatch(editUser(userInfo.email, input));
    setBooleanPhoto(false);
    swal({
      title: "Good job!",
      text: "Photo updated* (This may take some minutes to show)",
      icon: "success",
      button: "Aww yiss!",
    });
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setAuto({
      ...auto,
      [e.target.name]: e.target.value,
    });
  }

  function handleClickPhoto() {
    if (booleanPhoto === false) {
      setBooleanPhoto(true);
    } else {
      setBooleanPhoto(false);
    }
  }

  function handleClickUser() {
    if (booleanUser === false) {
      setBooleanUser(true);
    } else {
      setBooleanUser(false);
    }
    setInput({
      ...input,
      street: userInfo.street,
      city: userInfo.city,
      province: userInfo.province,
      telephone: userInfo.telephone,
      facebook: userInfo.facebook,
      instagram: userInfo.instagram,
      about: userInfo.about,
      age: userInfo.age,
      photo: userInfo.photo,
    });
  }

  function handleClickCar() {
    if (booleanCar === false) {
      setBooleanCar(true);
    } else {
      setBooleanCar(false);
    }
    setAuto({
      patent: userInfo.cars[0].patent,
      color: userInfo.cars[0].color,
      brand: userInfo.cars[0].brand,
      model: userInfo.cars[0].model,
      cylinder: userInfo.cars[0].cylinder,
    });
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setAuto({
      ...auto,
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

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "cmbcusw9");
    setLoanding(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dlwobuyjb/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
  };

  return (
    <div>
      <SearchUserByName />
      <div className="containerProfile">
        <div className="ProfileReal">
          <div className="ubicaBotonPhoto">
            {!booleanPhoto ? (
              <button className="botonPhoto" onClick={() => handleClickPhoto()}>
                Change User Photo
              </button>
            ) : (
              <button className="botonPhotoDisabled">Change User Photo</button>
            )}
          </div>
          {booleanPhoto === false ? (
            ""
          ) : (
            <>
              <div className="cadaLinea">
                <p className="label">
                  <FormattedMessage
                    id="register.photoUser"
                    defaultMessage="Photo User*:"
                  />
                </p>
                <input
                  onChange={(e) => uploadImage(e)}
                  className="cargaImagen"
                  type="file"
                  name="image"
                  required="required"
                  accept="image/png, image/jpeg"
                />
              </div>
              <div Style="display:none">{(input.photo = image)}</div>
              <p>
                {loanding ? (
                  <img src={image} Style="height:150px" alt="" />
                ) : (
                  ""
                )}
              </p>
              <button
                className="botonEdit"
                type="submit"
                onClick={(e) => handleSubmitPhoto(e)}
              >
                Change Photo
              </button>
            </>
          )}
          <div className="botonera">
            {!booleanUser ? (
              <button className="buttonBlue" onClick={() => handleClickUser()}>
                Edit User Information
              </button>
            ) : (
              <button className="buttonDisabled">Edit User Information</button>
            )}
          </div>
          {booleanUser === false ? (
            <>
              <div className="">
                <h1>User Details</h1>
                <img
                  className="photousuario"
                  src={userInfo.photo ? userInfo.photo : userInfo.picture}
                  alt="User"
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
                    <p className="label">About:</p>
                    <p className="about">{userInfo.about}</p>
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
                <h1>User Details</h1>
                <img
                  className="photousuario"
                  src={userInfo.photo ? userInfo.photo : userInfo.picture}
                  alt="User "
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
                    <p className="label">About:</p>
                    <textarea
                      type="text"
                      name="about"
                      defaultValue={userInfo.about}
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
                  className="buttonBlue"
                  type="submit"
                  onClick={(e) => handleSubmitUser(e)}
                >
                  Save
                </button>
              </div>
            </>
          )}
          {idAuto === "" ? (
            <NavLink to="/car">
              <button className="buttonBlue">Edit Car Information</button>
            </NavLink>
          ) : !booleanCar ? (
            <button className="buttonBlue" onClick={() => handleClickCar()}>
              Edit Car Information
            </button>
          ) : (
            <button className="buttonDisabled">Edit Car Information</button>
          )}
          {booleanCar === false ? (
            <>
              <h1>Car Details</h1>
              <div className="cadaLinea">
                <p className="label">Plate:</p>
                {userInfo.cars && userInfo.cars.length === 0 ? (
                  ""
                ) : (
                  <p className="label">{autoInfo.patent}</p>
                )}
              </div>
              <div className="cadaLinea">
                <p className="label">Color:</p>
                {userInfo.cars && userInfo.cars.length === 0 ? (
                  ""
                ) : (
                  <p className="label">{autoInfo.color}</p>
                )}
              </div>
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
                <p className="label">Cylinder:</p>
                {userInfo.cars && userInfo.cars.length === 0 ? (
                  ""
                ) : (
                  <p className="label">{autoInfo.cylinder}</p>
                )}
              </div>{" "}
            </>
          ) : (
            <>
              <h1>Car Details</h1>
              <div className="cadaLinea">
                <p className="label">Plate:</p>
                {userInfo.cars & (userInfo.cars.length === 0) ? (
                  ""
                ) : (
                  <input
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="patent"
                    className="inputProfile"
                    value={auto.patent}
                  />
                )}
              </div>
              <div className="cadaLinea">
                <p className="label">Color:</p>
                {userInfo.cars & (userInfo.cars.length === 0) ? (
                  ""
                ) : (
                  <input
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="color"
                    className="inputProfile"
                    value={auto.color}
                  />
                )}
              </div>
              <div className="cadaLinea">
                <p className="label">Brand:</p>
                {userInfo.cars & (userInfo.cars.length === 0) ? (
                  ""
                ) : (
                  <input
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="brand"
                    className="inputProfile"
                    value={auto.brand}
                  />
                )}
              </div>
              <div className="cadaLinea">
                <p className="label">Model:</p>
                {userInfo.cars & (userInfo.cars.length === 0) ? (
                  ""
                ) : (
                  <input
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="model"
                    className="inputProfile"
                    value={auto.model}
                  />
                )}
              </div>
              <div className="cadaLinea">
                <p className="label">Cylinder:</p>
                {userInfo.cars & (userInfo.cars.length === 0) ? (
                  ""
                ) : (
                  <input
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="cylinder"
                    className="inputProfile"
                    value={auto.cylinder}
                  />
                )}
              </div>
              <button
                className="buttonBlue"
                type="submit"
                onClick={(e) => handleSubmitCar(e)}
              >
                Save
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
