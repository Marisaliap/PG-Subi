import React, { useState } from "react";
import { useEffect } from "react";
import {
  editUser,
  getUserProfile,
  editCar,
  getUserByName,
  getUserById,
} from "../actions";
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
import "../Sass/Styles/UserProfile.scss";

export default function UserProfile() {
  const userInfo = useSelector((state) => state.userpro);
  const autoInfo = useSelector((state) => state.carpro);
  let idAuto;
  autoInfo === undefined ? (idAuto = "") : (idAuto = autoInfo.id);
  const [loanding, setLoanding] = useState(false);
  const [image, setImage] = useState("");
  const [booleanUser, setBooleanUser] = useState(false);
  const [booleanCar, setBooleanCar] = useState(false);
  const [booleanPhoto, setBooleanPhoto] = useState(false);
  const dispatch = useDispatch();
  const [errorsCars, setErrorsCars] = useState({});
  const [errorsUser, setErrorsUser] = useState({});

  useEffect(() => {
    dispatch(getUserById(""));
    dispatch(getUserByName("1010"));
  }, []);

  useEffect(() => {
    dispatch(getUserProfile(userInfo.email));
  }, [booleanUser, booleanCar, booleanPhoto, dispatch]);

  const [input, setInput] = useState({});

  const [auto, setAuto] = useState({});

  function handleSubmitUser(e) {
    e.preventDefault();
    if (Object.keys(errorsUser).length === 0) {
      dispatch(editUser(userInfo.email, input));
      setBooleanUser(false);
      dispatch(getUserProfile(userInfo.email));
    } else {
      swal({
        title: "Sorry",
        text: "Please check your inputs for errors",
        icon: "warning",
        button: "Ok",
      });
    }
  }

  function handleSubmitCar(e) {
    e.preventDefault();
    if (Object.keys(errorsCars).length === 0) {
      dispatch(editCar(idAuto, auto));
      setBooleanCar(false);
      setAuto({
        brand: userInfo.cars[0].brand,
        model: userInfo.cars[0].model,
        patent: userInfo.cars[0].patent,
        color: userInfo.cars[0].color,
        cylinder: userInfo.cars[0].cylinder,
      });
    } else {
      swal({
        title: "Sorry",
        text: "Please check your inputs for errors",
        icon: "warning",
        button: "Ok",
      });
    }
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
    setErrorsCars(
      validatecars({
        ...auto,
        [e.target.name]: e.target.value,
      })
    );
    setErrorsUser(
      validateuser({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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
      brand: userInfo.cars[0].brand,
      model: userInfo.cars[0].model,
      patent: userInfo.cars[0].patent,
      color: userInfo.cars[0].color,
      cylinder: userInfo.cars[0].cylinder,
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
    data.append("upload_preset", "EditPhotoUser");
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

  function validateuser(input) {
    const wordvalidate = /^[a-zA-Z ]+$/;
    const phonevalidate = /^[0-9]+$/;
    let errorsUser = {};
    if (!input.telephone) {
      errorsUser.telephone = "Telephone is required";
    } else if (phonevalidate.test(input.telephone) === false) {
      errorsUser.telephone = "Invalid Phone: Only Numbers Allowed";
    } else if (!input.street) {
      errorsUser.street = "Street is required";
    } else if (!input.city) {
      errorsUser.city = "City is required";
    } else if (wordvalidate.test(input.city) === false) {
      errorsUser.city = "Invalid City: No Symbols Allowed";
    } else if (!input.province) {
      errorsUser.province = "Province is required";
    } else if (wordvalidate.test(input.province) === false) {
      errorsUser.province = "Invalid Province: No Symbols Allowed";
    } else if (!input.about) {
      errorsUser.about = "About is required";
    }
    return errorsUser;
  }

  function validatecars(input) {
    const numberandlettervalidate = /^[0-9a-zA-Z ]+$/;
    const wordvalidate = /^[a-zA-Z]+$/;
    const floatvalidate = /^[0-9]*\.?[0-9]+$/;
    let errorsCars = {};
    if (!input.brand) {
      errorsCars.brand = "Brand is required";
    } else if (wordvalidate.test(input.brand) === false) {
      errorsCars.brand = "Invalid Brand: No Symbols Allowed";
    } else if (!input.model) {
      errorsCars.model = "Model is required";
    } else if (!input.patent) {
      errorsCars.patent = "Plate is required";
    } else if (numberandlettervalidate.test(input.patent) === false) {
      errorsCars.patent = "Invalid Plate";
    } else if (!input.color) {
      errorsCars.color = "Color is required";
    } else if (wordvalidate.test(input.color) === false) {
      errorsCars.color = "Invalid Color: No Symbols Allowed";
    } else if (!input.cylinder) {
      errorsCars.cylinder = "Cylinder is required";
    } else if (floatvalidate.test(input.cylinder) === false) {
      errorsCars.cylinder = "Invalid Cylinder: No Symbols Allowed";
    }
    return errorsCars;
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
          <div className="seccionTop">
            <div className="containerPhoto">
              <div className="ubicaBotonPhoto">
                {!booleanPhoto ? (
                  <button
                    className="botonPhoto"
                    onClick={() => handleClickPhoto()}
                  >
                    Change Photo
                  </button>
                ) : (
                  <button className="botonPhotoDisabled">Change Photo</button>
                )}
              </div>
              <img className="photousuario" src={userInfo.photo} alt="User" />
              <div>
                <h1 className="titulos">
                  {userInfo.name} {userInfo.lastName}{" "}
                  {genderIcon(userInfo.genre)}
                </h1>
                <p className="labelArriba">{userInfo.dni}</p>
                <div className="labelArriba">
                  <BsStarFill className="iconArriba" /> {userInfo.calification}{" "}
                  / 5
                </div>
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
            </div>
            <div className="datosUsuario">
              <div className="edadyemail">
                <div className="labelArriba">
                  <BsEnvelope className="iconArriba" /> {userInfo.email}
                </div>
                <p className="labelArriba"> {userInfo.age} years old</p>
                <div className="botonera">
                  {!booleanUser ? (
                    <button
                      className="buttonBlue"
                      onClick={() => handleClickUser()}
                    >
                      Edit User Information
                    </button>
                  ) : (
                    <button className="buttonDisabled">
                      Edit User Information
                    </button>
                  )}
                </div>
              </div>
              {booleanUser === false ? (
                <>
                  <div className="moreInfo">
                    <div className="cadaLinea">
                      <BsFillTelephoneFill className="icon" />{" "}
                      {userInfo.telephone}
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
                    <div className="cadaLinea">
                      <BsInfoSquareFill className="icon" />
                      {userInfo.about}
                    </div>
                  </div>
                  <div className="paddingAbajo"></div>
                </>
              ) : (
                <>
                  <div className="">
                    <div className="moreInfo">
                      <div className="cadaLinea">
                        <BsFillTelephoneFill className="icon" />
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          name="telephone"
                          className="inputProfile"
                          value={input.telephone}
                        />
                        {errorsUser.telephone && (
                          <p className="errorcar">{errorsUser.telephone}</p>
                        )}
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
                        {errorsUser.street && (
                          <p className="errorcar">{errorsUser.street}</p>
                        )}
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          name="city"
                          className="inputProfile"
                          value={input.city}
                        />
                        {errorsUser.city && (
                          <p className="errorcar">{errorsUser.city}</p>
                        )}
                        <input
                          onChange={(e) => handleChange(e)}
                          name="province"
                          type="text"
                          className="inputProfile"
                          value={input.province}
                        />
                        {errorsUser.province && (
                          <p className="errorcar">{errorsUser.province}</p>
                        )}
                      </div>
                      <div className="cadaLinea">
                        <BsInfoSquareFill className="icon" />
                        <textarea
                          type="text"
                          name="about"
                          defaultValue={userInfo.about}
                          onChange={(e) => handleChange(e)}
                        />
                        {errorsUser.about && (
                          <p className="errorcar">{errorsUser.about}</p>
                        )}
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
            </div>
          </div>
          <div className="centralo">
            <h1 className="tituloUserProfile">Car Details</h1>
          </div>
          <div className="centralo">
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
          </div>
          {booleanCar === false ? (
            <>
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
            </>
          ) : (
            <>
              <div className="patents">
                <div className="cadaLinea">
                  <p className="label">Brand:</p>
                  {userInfo.cars & (userInfo.cars.length === 0) ? (
                    ""
                  ) : (
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="brand"
                      className="inputProfileCar"
                      value={auto.brand}
                    />
                  )}
                  {errorsCars.brand && (
                    <p className="errorcar">{errorsCars.brand}</p>
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
                      className="inputProfileCar"
                      value={auto.model}
                    />
                  )}
                  {errorsCars.model && (
                    <p className="errorcar">{errorsCars.model}</p>
                  )}
                </div>
                <div className="cadaLinea">
                  <p className="label">Plate:</p>
                  {userInfo.cars & (userInfo.cars.length === 0) ? (
                    ""
                  ) : (
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="patent"
                      className="inputProfileCar"
                      value={auto.patent}
                    />
                  )}
                  {errorsCars.patent && (
                    <p className="errorcar">{errorsCars.patent}</p>
                  )}
                </div>
              </div>
              <div className="patents">
                <div className="cadaLinea">
                  <p className="label">Color:</p>
                  {userInfo.cars & (userInfo.cars.length === 0) ? (
                    ""
                  ) : (
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="color"
                      className="inputProfileCar"
                      value={auto.color}
                    />
                  )}
                  {errorsCars.color && (
                    <p className="errorcar">{errorsCars.color}</p>
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
                      className="inputProfileCar"
                      value={auto.cylinder}
                    />
                  )}
                  {errorsCars.cylinder && (
                    <p className="errorcar">{errorsCars.cylinder}</p>
                  )}
                </div>
              </div>
              <div className="centralo">
                <button
                  className="buttonBlue"
                  type="submit"
                  onClick={(e) => handleSubmitCar(e)}
                >
                  Save
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
