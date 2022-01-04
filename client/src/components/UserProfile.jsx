import React, { useState } from "react";
import { useEffect } from "react";
import { editUser, getUserProfile, editCar } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import swal from "sweetalert2";
import SearchUserByName from "./SearchUserByName";
import SearchUserById from "./SearchUserById";
import { FormattedMessage } from "react-intl";
import {
  BsFillTelephoneFill,
  BsGenderFemale,
  BsGenderMale,
  BsInstagram,
  BsFacebook,
  BsMap,
  BsEnvelope,
  BsInfoSquareFill,
} from "react-icons/bs";
import "../Sass/Styles/UserProfile.scss";
import RatingStar from "./RatingStar";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import PostUserProfile from "./PostUserProfile";
import Person from "@material-ui/icons/Person";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import CommentIcon from "@material-ui/icons/Comment";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PaymentIcon from "@material-ui/icons/Payment";
import ChatIcon from "@material-ui/icons/Chat";

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
  const [nav, setNav] = useState(0);

  useEffect(
    () => {
      dispatch(getUserProfile(userInfo.email));
    },
    // eslint-disable-next-line
    [booleanUser, booleanCar, booleanPhoto, userInfo.email]
  ); // eslint-disable-line
  const [input, setInput] = useState({});

  const [auto, setAuto] = useState({});

  function handleSubmitUser(e) {
    e.preventDefault();
    if (Object.keys(errorsUser).length === 0) {
      dispatch(editUser(userInfo.email, input));
      setBooleanUser(false);
      dispatch(getUserProfile(userInfo.email));
    } else {
      new swal({
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
      new swal({
        title: "Sorry",
        text: "Please check your inputs for errors",
        icon: "warning",
        button: "Ok",
      });
    }
  }

  function handleSubmitPhoto(e) {
    e.preventDefault();
    dispatch(editUser(userInfo.email, input));
    setImage("");
    setBooleanPhoto(false);
    new swal({
      title: "Good job!",
      text: "Photo updated* (This may take some minutes to show)",
      icon: "success",
      button: "Aww yiss!",
    });
  }

  function handleSubmitNoPhoto(e) {
    e.preventDefault();
    setImage("");
    setBooleanPhoto(false);
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

  function handleNav(e, value) {
    setNav(value);
  }

  function validateuser(input) {
    const wordvalidate = /^[a-zA-ZüéáíóúñÑ ]+$/;
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

  const rowsRoutes =
    userInfo?.routes &&
    userInfo.routes.map((route) => {
      return {
        id: route.id,
        Origin: route.originName,
        Destiny: route.destinyName,
        Date: route.date,
        Time: route.hours,
        RouteId: route.id,
        Driver: route.manejante === userInfo.email ? "yes" : "no",
      };
    });

  const columnsRoutes = [
    {
      field: "Origin",
      headerName: (
        <FormattedMessage id="userProfile.origin" defaultMessage="Origin" />
      ),
      width: 250,
    },
    {
      field: "Destiny",
      headerName: (
        <FormattedMessage id="userProfile.destiny" defaultMessage="Destiny" />
      ),
      width: 250,
    },
    {
      field: "Date",
      headerName: (
        <FormattedMessage id="userProfile.date" defaultMessage="Date" />
      ),
      width: 125,
    },
    {
      field: "Time",
      headerName: (
        <FormattedMessage id="userProfile.time" defaultMessage="Time" />
      ),
      width: 125,
    },
    {
      field: "RouteId",
      headerName: (
        <FormattedMessage id="userProfile.routeid" defaultMessage="Route ID" />
      ),
      width: 150,
      renderCell: (params) => (
        <Link to={`/route/${params.value}`}>{params.value}</Link>
      ),
    },
    {
      field: "Driver",
      headerName: (
        <FormattedMessage id="userProfile.driver" defaultMessage="Driver" />
      ),
      width: 125,
    },
  ];

  /*----------------------------------------ORDERS-------------------------------------------------------*/

  const routesManejante =
    userInfo?.routes &&
    userInfo.routes.filter((r) =>
      r.manejante === userInfo.email ? true : false
    );

  const rowsOrders =
    userInfo?.routes &&
    routesManejante.map((route) => {
      return {
        id: route.id,
        Origin: route.originName,
        Destiny: route.destinyName,
        Date: route.date,
        Time: route.hours,
        RouteId: route.id,
        Payment: route.orders && "$ " + route.orders.length * route.price,
      };
    });

  const columnsOrders = [
    {
      field: "Origin",
      headerName: (
        <FormattedMessage id="userProfile.origin" defaultMessage="Origin" />
      ),
      width: 250,
    },
    {
      field: "Destiny",
      headerName: (
        <FormattedMessage id="userProfile.destiny" defaultMessage="Destiny" />
      ),
      width: 250,
    },
    {
      field: "Date",
      headerName: (
        <FormattedMessage id="userProfile.date" defaultMessage="Date" />
      ),
      width: 125,
    },
    {
      field: "Time",
      headerName: (
        <FormattedMessage id="userProfile.time" defaultMessage="Time" />
      ),
      width: 125,
    },
    {
      field: "RouteId",
      headerName: (
        <FormattedMessage id="userProfile.routeid" defaultMessage="Route ID" />
      ),
      width: 150,
      renderCell: (params) => (
        <Link to={`/route/${params.value}`}>{params.value}</Link>
      ),
    },
    {
      field: "Payment",
      headerName: (
        <FormattedMessage id="userProfile.payment" defaultMessage="Payment" />
      ),
      width: 200,
    },
  ];

  return (
    <div>
      <Link to="/home">
        <button className="buttonBlue">
          <FormattedMessage id="userdetails.home" />
        </button>
      </Link>
      <div className="searchUsers">
        <SearchUserByName />
        {/* <SearchUserById /> */}
      </div>
      <div className="containerProfile">
        <div className="centralo">
          <Tabs
            onChange={handleNav}
            value={nav}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="nav tabs example"
          >
            <Tab label="User Details" icon={<Person />} />
            <Tab label="Car Details" icon={<DirectionsCarIcon />} />
            <Tab label="Trips Details" icon={<LocationOnIcon />} />
            <Tab label="Posts" icon={<CommentIcon />} />
            <Tab label="Payments" icon={<PaymentIcon />} />
            <Tab label="Chat" icon={<ChatIcon />} />
          </Tabs>
        </div>
        <div className="ProfileReal">
          {nav === 0 && (
            <div>
              <div className="centralo">
                <h1 className="tituloUserProfile">
                  <FormattedMessage
                    id="userProfile.title"
                    defaultMessage="User Details"
                  />
                </h1>
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
                        <FormattedMessage
                          id="userProfile.changephoto"
                          defaultMessage="Change Photo"
                        />
                      </button>
                    ) : (
                      <button className="botonPhotoDisabled">
                        <FormattedMessage
                          id="userProfile.changephoto"
                          defaultMessage="Change Photo"
                        />
                      </button>
                    )}
                  </div>
                  <img
                    className="photousuario"
                    src={userInfo.photo}
                    alt="User"
                  />
                  <div>
                    <h1 className="titulos">
                      {userInfo.name} {userInfo.lastName}{" "}
                      {genderIcon(userInfo.genre)}
                    </h1>
                    <p className="labelArriba">{userInfo.dni}</p>
                    <div className="labelArriba">
                      <RatingStar Rating={userInfo.calification} />
                    </div>
                  </div>
                  {booleanPhoto === false ? (
                    ""
                  ) : (
                    <>
                      <div className="enFila">
                        <div>
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
                          {/* eslint-disable-next-line */}
                          <div style={{ display: "none" }}>
                            {image === "" ? "" : (input.photo = image)}
                          </div>
                        </div>
                        <div className="porfissss">
                          <button
                            className="botonEdit"
                            type="submit"
                            onClick={(e) =>
                              image === ""
                                ? handleSubmitNoPhoto(e)
                                : handleSubmitPhoto(e)
                            }
                          >
                            <FormattedMessage
                              id="userProfile.changephoto"
                              defaultMessage="Change Photo"
                            />
                          </button>
                          <p className="imagenCargada">
                            {/* eslint-disable-next-line */}
                            {loanding ? (
                              <img
                                src={image}
                                style={{ height: "150px" }}
                                alt=""
                              />
                            ) : (
                              ""
                            )}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="datosUsuario">
                  <div className="edadyemail">
                    <div className="labelArriba">
                      <BsEnvelope className="iconArriba" /> {userInfo.email}
                    </div>
                    <p className="labelArriba">
                      {" "}
                      {userInfo.age}{" "}
                      <FormattedMessage
                        id="userProfile.yearsold"
                        defaultMessage="years old"
                      />
                    </p>
                    <div className="botonera">
                      {!booleanUser ? (
                        <button
                          className="buttonBlue"
                          onClick={() => handleClickUser()}
                        >
                          <FormattedMessage
                            id="userProfile.edituserinfo"
                            defaultMessage="Edit User Information"
                          />
                        </button>
                      ) : (
                        <button className="buttonDisabled">
                          <FormattedMessage
                            id="userProfile.edituserinfo"
                            defaultMessage="Edit User Information"
                          />
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
                        {userInfo.cbu ? (
                          <div className="cadaLinea">
                            <p className="label">
                              <FormattedMessage
                                id="register.cbu"
                                defaultMessage="CBU:"
                              />
                            </p>
                            <p className="label">{userInfo.cbu}</p>
                          </div>
                        ) : (
                          ""
                        )}
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
                          <div className="inputsContainer">
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
                            </div>

                            <div className="cadaLinea2">
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
                            </div>
                            <div className="cadaLinea2">
                              <input
                                onChange={(e) => handleChange(e)}
                                name="province"
                                type="text"
                                className="inputProfile"
                                value={input.province}
                              />
                              {errorsUser.province && (
                                <p className="errorcar">
                                  {errorsUser.province}
                                </p>
                              )}
                            </div>
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
                          {!userInfo.cars.length === 0 ? (
                            ""
                          ) : (
                            <div className="cadaLinea">
                              <p className="label">
                                <FormattedMessage
                                  id="register.cbu"
                                  defaultMessage="CBU:"
                                />
                              </p>
                              <input
                                className="inputs"
                                type="text"
                                name="cbu"
                                value={input.cbu}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          )}
                        </div>
                        <button
                          className="buttonBlue"
                          type="submit"
                          onClick={(e) => handleSubmitUser(e)}
                        >
                          <FormattedMessage
                            id="userProfile.save"
                            defaultMessage="Save"
                          />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}{" "}
          {/*------------------------------------------------------ACA EMPIEZA CARS-----------------------------------------------*/}
          {nav === 1 && (
            <div>
              <div className="centralo">
                <h1 className="tituloUserProfile">
                  <FormattedMessage
                    id="userProfile.editcarinfo"
                    defaultMessage="Edit Car Information"
                  />
                </h1>
              </div>
              <div className="centralo">
                {idAuto === "" ? (
                  <NavLink to="/car">
                    <button className="buttonBlue">
                      <FormattedMessage
                        id="userProfile.editcarinfo"
                        defaultMessage="Edit Car Information"
                      />
                    </button>
                  </NavLink>
                ) : !booleanCar ? (
                  <button
                    className="buttonBlue"
                    onClick={() => handleClickCar()}
                  >
                    <FormattedMessage
                      id="userProfile.editcarinfo"
                      defaultMessage="Edit Car Information"
                    />
                  </button>
                ) : (
                  <button className="buttonDisabled">
                    <FormattedMessage
                      id="userProfile.editcarinfo"
                      defaultMessage="Edit Car Information"
                    />
                  </button>
                )}
              </div>
              {booleanCar === false ? (
                <div>
                  <div className="patents">
                    <div className="cadaLinea">
                      <p className="label">
                        <FormattedMessage
                          id="userProfile.brand"
                          defaultMessage="Brand:"
                        />
                      </p>
                      {userInfo.cars && userInfo.cars.length === 0 ? (
                        ""
                      ) : (
                        <p className="label">{autoInfo.brand}</p>
                      )}
                    </div>
                    <div className="cadaLinea">
                      <p className="label">
                        <FormattedMessage
                          id="userProfile.model"
                          defaultMessage="Model:"
                        />
                      </p>
                      {userInfo.cars && userInfo.cars.length === 0 ? (
                        ""
                      ) : (
                        <p className="label">{autoInfo.model}</p>
                      )}
                    </div>
                    <div className="cadaLinea">
                      <p className="label">
                        <FormattedMessage
                          id="userProfile.patent"
                          defaultMessage="Patent:"
                        />
                      </p>
                      {userInfo.cars && userInfo.cars.length === 0 ? (
                        ""
                      ) : (
                        <p className="label">{autoInfo.patent}</p>
                      )}
                    </div>
                  </div>
                  <div className="patents">
                    <div className="cadaLinea">
                      <p className="label">
                        <FormattedMessage
                          id="userProfile.color"
                          defaultMessage="Color:"
                        />
                      </p>
                      {userInfo.cars && userInfo.cars.length === 0 ? (
                        ""
                      ) : (
                        <p className="label">{autoInfo.color}</p>
                      )}
                    </div>
                    <div className="cadaLinea">
                      <p className="label">
                        <FormattedMessage
                          id="userProfile.cylinder"
                          defaultMessage="Cylinder:"
                        />
                      </p>
                      {userInfo.cars && userInfo.cars.length === 0 ? (
                        ""
                      ) : (
                        <p className="label">{autoInfo.cylinder}</p>
                      )}
                    </div>{" "}
                  </div>
                </div>
              ) : (
                <>
                  <div className="patents">
                    <div className="cadaLinea">
                      <p className="label">
                        <FormattedMessage
                          id="userProfile.brand"
                          defaultMessage="Brand:"
                        />
                      </p>
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
                      <p className="label">
                        <FormattedMessage
                          id="userProfile.model"
                          defaultMessage="Model:"
                        />
                      </p>
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
                      <p className="label">
                        <FormattedMessage
                          id="userProfile.patent"
                          defaultMessage="Patent:"
                        />
                      </p>
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
                      <p className="label">
                        <FormattedMessage
                          id="userProfile.color"
                          defaultMessage="Color:"
                        />
                      </p>
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
                      <p className="label">
                        <FormattedMessage
                          id="userProfile.cylinder"
                          defaultMessage="Cylinder:"
                        />
                      </p>
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
                      <FormattedMessage
                        id="userProfile.save"
                        defaultMessage="Save"
                      />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {nav === 2 && (
          <div style={{ height: 300, width: "100%" }}>
            {userInfo.routes && userInfo.routes.length > 0 && (
              <DataGrid rows={rowsRoutes} columns={columnsRoutes} />
            )}
          </div>
        )}

        {nav === 3 && (
          <div className="centralo">
            <PostUserProfile id={userInfo.email} />
          </div>
        )}

        {nav === 4 && (
          <div style={{ height: 300, width: "100%" }}>
            {userInfo.routes && userInfo.routes.length > 0 && (
              <DataGrid rows={rowsOrders} columns={columnsOrders} />
            )}
          </div>
        )}

        {nav === 5 && (
          <div style={{ height: 300, width: "100%" }}>
            <div className="centralo">
              <h1 className="tituloUserProfile">Chats</h1>
            </div>
            {userInfo && userInfo.chats && userInfo.chats.length > 0 && (
              <>
                {userInfo.chats
                  .reduce(
                    (acc, currentValue) =>
                      acc.includes(currentValue.author)
                        ? acc
                        : [...acc, currentValue.author],
                    []
                  )
                  .map((author) => (
                    <>
                      <br />
                      <Link to={`/chat/${author}`}>{author}</Link>
                    </>
                  ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
