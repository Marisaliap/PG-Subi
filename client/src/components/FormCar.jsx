import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { postCar, getAllCars } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";
import "../Sass/Styles/FormCar.scss";
import { FormattedMessage } from "react-intl";

export default function FormCar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  const [image, setImage] = useState("");
  const [loanding, setLoanding] = useState(false);
  const [cedula, setCedula] = useState([]);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    userEmail: isAuthenticated ? user.email : "",
    patent: "",
    color: "",
    brand: "",
    model: "",
    cylinder: "",
    greencard: "",
    bluecard: [],
    checkboxBlueCard: false,
  });


  let booleanPatent;

  useEffect(() => {
    dispatch(getAllCars());
  }, [booleanPatent, dispatch]);
  let carPatent = useSelector((state) => state.carMatch);

  function validate(input) {
    booleanPatent = true;
    for (let i = 0; i < carPatent.length; i++) {
      if (carPatent[i].patent === input.patent) {
        booleanPatent = false;
      }
    }

    let errors = {};
    const numberandlettervalidate = /^[0-9a-zA-Z ]+$/;
    const wordvalidate = /^[a-zA-ZüéáíóúñÑ ]+$/;
    const floatvalidate = /^[0-9]*\.?[0-9]+$/;
    if (!input.patent) {
      errors.patent = <FormattedMessage id= "formcarerr.patent" defaultMessage="Patent is required" />;
    } else if (booleanPatent === false) {
      errors.patent = <FormattedMessage id= "formcarerr.patentexist" defaultMessage="Patent already exists" />;
    } else if (numberandlettervalidate.test(input.patent) === false) {
      errors.patent = <FormattedMessage id= "formcarerr.patentinv" defaultMessage="Invalid Patent" />;
    } else if (!input.color) {
      errors.color = <FormattedMessage id= "formcarerr.color" defaultMessage="Color is required" />;
    } else if (wordvalidate.test(input.color) === false) {
      errors.color = <FormattedMessage id=  "formcarerr.colorinv" defaultMessage="Invalid Color: No Symbols Allowed" />;
    } else if (!input.brand) {
      errors.brand = <FormattedMessage id= "formcarerr.brand" defaultMessage="Brand is required" />;
    } else if (wordvalidate.test(input.brand) === false) {
      errors.brand = <FormattedMessage id= "formcarerr.brandinv" defaultMessage="formcarerr.brandinv" />;
    } else if (!input.model) {
      errors.model = <FormattedMessage id= "formcarerr.model" defaultMessage="Model is required" />;
    } else if (!input.cylinder) {
      errors.cylinder = <FormattedMessage id= "formcarerr.cylinder" defaultMessage="Cylinder is required" />;
    } else if (floatvalidate.test(input.cylinder) === false) {
      errors.cylinder = <FormattedMessage id= "formcarerr.cylinderinv" defaultMessage="Invalid Cylinder: No Symbols Allowed" />;
    }
    return errors;
  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "PhotoGreenCard");
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

  const uploadImage2 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "PhotoBlueCard");
    setLoanding(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dlwobuyjb/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setCedula([...cedula, file.secure_url]);
  };

  const handleCheck = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked,
    });
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(postCar(input));
      setInput({
        patent: "",
        color: "",
        brand: "",
        model: "",
        cylinder: "",
        greencard: "",
        bluecard: [],
      });
      swal({
        title: "Good job!",
        text: "Car created correctly",
        icon: "success",
        button: "Aww yiss!",
      });
      history.push("/route");
    } else {
      swal({
        title: "Sorry",
        text: "All mandatory fields must be filled to continue",
        icon: "warning",
        button: "Ok",
      });
    }
  }

  

  return (
    <div className="FormCar">
      <h1>
        <FormattedMessage id="formCar.title" defaultMessage="Name is required" />
      </h1>
      <form
        className="FormAUTO"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="cadaLineaAuto">
          <p className="label">
            <FormattedMessage id="formCar.patent" defaultMessage="Patent*:" />
          </p>
          <input
            className="inputauto"
            type="text"
            name="patent"
            value={input.patent}
            onChange={(e) => handleChange(e)}
          />
          {errors.patent && <p className="errorcar">{errors.patent}</p>}
        </div>
        <div className="cadaLineaAuto">
          <p className="label">
            <FormattedMessage id="formCar.color" defaultMessage="Color*:" />
          </p>
          <input
            className="inputauto"
            type="text"
            name="color"
            value={input.color}
            onChange={(e) => handleChange(e)}
          />
          {errors.color && <p className="errorcar">{errors.color}</p>}
        </div>
        <div className="cadaLineaAuto">
          <p className="label">
            <FormattedMessage id="formCar.brand" defaultMessage="Brand*:" />
          </p>
          <input
            className="inputauto"
            type="text"
            name="brand"
            value={input.brand}
            onChange={(e) => handleChange(e)}
          />
          {errors.brand && <p className="errorcar">{errors.brand}</p>}
        </div>
        <div className="cadaLineaAuto">
          <p className="label">
            <FormattedMessage id="formCar.model" defaultMessage="Model*:" />
          </p>
          <input
            className="inputauto"
            type="text"
            name="model"
            value={input.model}
            onChange={(e) => handleChange(e)}
          />
          {errors.model && <p className="errorcar">{errors.model}</p>}
        </div>
        <div className="cadaLineaAuto">
          <p className="label">
            <FormattedMessage
              id="formCar.cylinder"
              defaultMessage="Cylinder*:"
            />
          </p>
          <input
            className="inputauto"
            type="text"
            name="cylinder"
            value={input.cylinder}
            onChange={(e) => handleChange(e)}
          />
          {errors.cylinder && <p className="errorcar">{errors.cylinder}</p>}
        </div>
        <div>
          <div className="cadaLinea">
            <p className="label">  
              <FormattedMessage
                id="formCar.greencard"
                defaultMessage="Green Card*:"
              />
            </p>
            <input
              onChange={(e) => uploadImage(e)}
              className="custom-file-input"
              type="file"
              name="image"
              required="required"
              accept="image/png, image/jpeg"
            />
            <div Style="display:none">{(input.greencard = image)}</div>
            <p>
              {loanding ? <img src={image} Style="height:150px" alt="" /> : ""}
            </p>
          </div>
          <div className="cadaLinea">
            <p className="">
            <FormattedMessage
                id="formCar.checkbox"
                defaultMessage="If the car will be used by someone other than you or you are not the owner of the car, please attach the correspondent blue card"
              />
            </p>
            <input
              type="checkbox"
              name="checkboxBlueCard"
              onChange={(e) => handleCheck(e)}
            />
          </div>
          {input.checkboxBlueCard === false?
            "":
            <div className="cadaLinea">
              <p className="label">
                 <FormattedMessage
                id="formCar.bluecard1"
                defaultMessage="Blue Card #1:"
              /> 
              </p>
              <div className="cargaImagen">
                <input
                  onChange={(e) => uploadImage2(e)}
                  className="custom-file-input"
                  type="file"
                  name="image"
                  accept="image/png, image/jpeg"
                />
              </div>
              <div Style="display:none">{(input.bluecard = cedula)}</div>
              <p>
                {loanding ? (
                  <img src={input.bluecard[0]} Style="height:150px" alt="" />
                ) : (
                  ""
                )}
              </p>
            </div> }
             { input.bluecard.length === 0?
             "":
          <div className="cadaLinea">
              <p className="label">
                <FormattedMessage
                id="formCar.bluecard2"
                defaultMessage="Blue Card #2:"
              />
              </p>
              <label className="cargaImagen">
                <input
                  onChange={(e) => uploadImage2(e)}
                  className="custom-file-input"
                  type="file"
                  name="image"
                  accept="image/png, image/jpeg"
                />
              </label>
              <div Style="display:none">{(input.bluecard = cedula)}</div>
              <p>
                {loanding ? (
                  <img src={input.bluecard[1]} Style="height:150px" alt="" />
                ) : (
                  ""
                )}
              </p>
            </div>}
            {input.bluecard.length <= 1?
            "":
            <div className="cadaLinea">
              <p className="label">
               <FormattedMessage
                id="formCar.bluecard3"
                defaultMessage="Blue Card #3:"
              />
              </p>
              <label className="cargaImagen">
                <input
                  onChange={(e) => uploadImage2(e)}
                  className="custom-file-input"
                  type="file"
                  name="image"
                  accept="image/png, image/jpeg"
                />
              </label>
              <div Style="display:none">{(input.bluecard = cedula)}</div>
              <p>
                {loanding ? (
                  <img src={input.bluecard[2]} Style="height:150px" alt="" />
                ) : (
                  ""
                )}
              </p>
            </div>}
        </div>
        <button className="button" type="submit">
          <FormattedMessage id="formCar.add" defaultMessage=" Add Car" />
        </button>
      </form>
    </div>
  );
}
