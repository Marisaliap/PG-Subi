import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../actions";
import { useAuth0 } from "@auth0/auth0-react";
import "../Sass/Styles/RegisterForm.scss";
import swal from "sweetalert";
import { FormattedMessage } from "react-intl";

export default function Registro() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const [image, setImage] = useState("");
  const [loanding, setLoanding] = useState(false);
  const [dni, setDni] = useState([]);
  const placeHolderAbout = "Please tell us a little about yourself";

  function validate(input) {
    // ------------------------< erros gestions >------------------------
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    } else if (!input.lastName) {
      errors.lastName = "Last name is required";
      /* } else if ("^[^!@#$^&%*()+=[\]\/{}|:<>?,.\t]+$") {
      errors.lastName = 'Last name cannot contain symbols'; */
    } else if (!input.dni) {
      errors.dni = "DNI is required";
    } else if (validateGender() === false) {
      errors.genre = "Gender is required";
    } else if (!input.age) {
      errors.age = "Age required";
    } else if (input.age < 18) {
      errors.age = "You must be 18 years old or older to register";
    } else if (!input.telephone) {
      errors.telephone = "Telephone is required";
    } else if (!input.street) {
      errors.street = "Street is required";
    } else if (!input.city) {
      errors.city = "City is required";
    } else if (!input.province) {
      errors.province = "Province is required";
    }
    return errors;
  }
  // __________________________________________________________________________________

  function validateGender() {
    if (document.getElementById("genre").value == "1") {
      return false;
    }
    return true;
  }

  function validateInputs() {
    if (
      !input.name ||
      !input.lastName ||
      !input.dni ||
      !input.age ||
      !input.telephone ||
      !input.street ||
      !input.city ||
      !input.province ||
      !input.checkbox
    ) {
      return false;
    } else {
      return true;
    }
  }

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: isAuthenticated ? user.email : "",
    photo: "",
    dni: "",
    genre: "",
    age: "",
    telephone: "",
    street: "",
    city: "",
    province: "",
    facebook: "",
    instagram: "",
    about: "",
    photoDni: [],
    checkbox: false,
  });

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
    console.log(input);
  }

  const handleCheck = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked,
    });
  };

  function handleSelect(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  // ----------------------< upload image rami x jp >----------------------
  const uploadImage = async (e) => {
    const files = e.target.files;
    console.log("file", files);
    const data = new FormData();
    console.log("data", data);
    data.append("file", files[0]);
    data.append("upload_preset", "s6kdvopu");
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
    console.log("file", files);
    const data = new FormData();
    console.log("data", data);
    data.append("file", files[0]);
    data.append("upload_preset", "tiuimc3c");
    setLoanding(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dlwobuyjb/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setDni([...dni, file.secure_url]);
  };
  // _______________________________________________________________________

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && validateInputs() === true) {
      dispatch(postUser(input));
      setInput({
        name: "",
        lastName: "",
        email: "",
        dni: "",
        genre: "",
        age: "",
        telephone: "",
        street: "",
        city: "",
        province: "",
        facebook: "",
        instagram: "",
        about: "",
        photo: "",
        photoDni: [],
      });

      swal({
        title: "Good job!",
        text: "User created correctly",
        icon: "success",
        button: "Aww yiss!",
      });
      history.push("/home");
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
    <>
      <Link to="/home">
        <button className="buttonBlue">
          <FormattedMessage id="register.home" defaultMessage="Home" />
        </button>
      </Link>
      <div className="formContainer">
        <h1>
          <FormattedMessage
            id="register.title"
            defaultMessage="Create your User"
          />
        </h1>
        <form
          className="FormRegistro"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <div className="cadaLinea">
              <p className="label">
                <FormattedMessage id="register.name" defaultMessage="Name*:" />
              </p>
              <input
                className="inputs"
                type="text"
                name="name"
                value={input.name}
                placeholder={
                  "Please type your real name! " + "-> Rec: " + user.given_name
                }
                onChange={(e) => handleChange(e)}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="cadaLinea">
              <p className="label">
                <FormattedMessage
                  id="register.lastname"
                  defaultMessage="Last Name*:"
                />
              </p>
              <input
                className="inputs"
                type="text"
                placeholder={
                  "Please type your real last name! " +
                  "-> Rec: " +
                  user.family_name
                }
                name="lastName"
                value={input.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="cadaLinea">
              <p className="label">
                <FormattedMessage
                  id="register.email"
                  defaultMessage="Email*:"
                />
              </p>
              <p className="inputs" type="text" name="email">
                {input.email}
              </p>
            </div>
            <div className="cadaLinea">
              <p className="label"><FormattedMessage
                  id="register.photoUser"
                  defaultMessage="Photo User*:"
                /></p>
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
              {loanding ? <img src={image} Style="height:150px" alt="" /> : ""}
            </p>
            <div className="cadaLinea">
              <p className="label">
                <FormattedMessage
                  id="register.id"
                  defaultMessage="ID or passport*:"
                />
              </p>
              <input
                className="inputs"
                type="number"
                name="dni"
                required="required"
                value={input.dni}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="cadaLinea">
              <p className="label"><FormattedMessage
                  id="register.idFront"
                  defaultMessage="ID or passport Front*:"
                /></p>
              <input
                onChange={(e) => uploadImage2(e)}
                className="cargaImagen"
                type="file"
                name="image"
                required="required"
                accept="image/png, image/jpeg"
              />
            </div>
            <div Style="display:none">{(input.photoDni = dni)}</div>
            <p>
              {loanding ? <img src={dni[0]} Style="height:150px" alt="" /> : ""}
            </p>
            <div className="cadaLinea">
              <p className="label"><FormattedMessage
                  id="register.idBack"
                  defaultMessage="ID or passport Back*:"
                /></p>
              <input
                onChange={(e) => uploadImage2(e)}
                className="cargaImagen"
                type="file"
                name="image"
                required="required"
                accept="image/png, image/jpeg"
              />
            </div>
            <div Style="display:none">{(input.photoDni = dni)}</div>
            <p>
              {loanding ? <img src={dni[1]} Style="height:150px" alt="" /> : ""}
            </p>
          </div>
          <div className="cadaLinea">
            <p className="label" for="genre">
              <FormattedMessage
                id="register.gender"
                defaultMessage="Gender*:"
              />
            </p>
            <FormattedMessage
              id="register.genderOptions"
              defaultMessage="-- Select an option --"
            >
              {(placeholder) => (
                <select
                  name="genre"
                  id="genre"
                  className="select"
                  onChange={(e) => handleSelect(e)}
                >
                  {/* {["en", "es", "fr", "de"].map(l => (
          <option key={l}>{l}</option> */}{" "}
                  <option disabled selected value="1">
                    {" "}
                  </option>
                  <option className="options" value="Male">
                    <FormattedMessage
                      id="register.male"
                      defaultMessage="Male"
                    />
                  </option>
                  <option className="options" value="Female">
                    <FormattedMessage
                      id="register.female"
                      defaultMessage="Female:"
                    />
                  </option>
                  <option className="options" value="Rather not say">
                    <FormattedMessage
                      id="register.doNotSay"
                      defaultMessage="Rather not say"
                    />
                  </option>
                </select>
              )}
            </FormattedMessage>
            {errors.genre && <p className="error">{errors.genre}</p>}
          </div>
          <div className="cadaLinea">
            <p className="label">
              <FormattedMessage id="register.age" defaultMessage="Age*:" />
            </p>
            <input
              className="inputs"
              type="number"
              name="age"
              value={input.age}
              onChange={(e) => handleChange(e)}
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>
          <div className="cadaLinea">
            <p className="label">
              <FormattedMessage
                id="register.phone"
                defaultMessage="Telephone*:"
              />
            </p>
            <input
              className="inputs"
              type="number"
              name="telephone"
              value={input.telephone}
              onChange={(e) => handleChange(e)}
            />
            {errors.telephone && <p className="error">{errors.telephone}</p>}
          </div>
          <div className="cadaLinea">
            <p className="label">
              <FormattedMessage
                id="register.street"
                defaultMessage="Street*:"
              />
            </p>
            <input
              className="inputs"
              type="text"
              name="street"
              value={input.street}
              onChange={(e) => handleChange(e)}
            />
            {errors.street && <p className="error">{errors.street}</p>}
          </div>
          <div className="cadaLinea">
            <p className="label">
              <FormattedMessage id="register.city" defaultMessage="City*:" />
            </p>
            <input
              className="inputs"
              type="text"
              name="city"
              value={input.city}
              onChange={(e) => handleChange(e)}
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>
          <div className="cadaLinea">
            <p className="label">
              <FormattedMessage
                id="register.province"
                defaultMessage="Province*:"
              />
            </p>
            <input
              className="inputs"
              type="text"
              name="province"
              value={input.province}
              onChange={(e) => handleChange(e)}
            />
            {errors.province && <p className="error">{errors.province}</p>}
          </div>
          <div className="cadaLinea">
            <p className="label">
              <FormattedMessage
                id="register.facebook"
                defaultMessage="Facebook:"
              />
            </p>
            <input
              className="inputs"
              type="text"
              name="facebook"
              value={input.facebook}
              onChange={(e) => handleChange(e)}
            />
            {errors.facebook && <p className="error">{errors.facebook}</p>}
          </div>
          <div className="cadaLinea">
            <p className="label">
              <FormattedMessage
                id="register.instagram"
                defaultMessage="Instagram:"
              />
            </p>
            <input
              className="inputs"
              type="text"
              name="instagram"
              value={input.instagram}
              onChange={(e) => handleChange(e)}
            />
            {errors.instagram && <p className="error">{errors.instagram}</p>}
          </div>
          <div className="cadaLinea">
            <p className="label">
              <FormattedMessage id="register.about" defaultMessage="About:" />
            </p>
            <textarea
              type="text"
              name="about"
              value={input.about}
              placeholder={placeHolderAbout}
              onChange={(e) => handleChange(e)}
            />
            {errors.about && <p className="error">{errors.about}</p>}
          </div>
          <div className="terminosycond">
            <div className="terminos">
              <FormattedMessage
                id="register.agree"
                defaultMessage="By continuing, you agree to our"
              />{" "}
              <a target="_blank" href="/terms-and-conditions">
                {" "}
                <FormattedMessage
                  id="register.terms"
                  defaultMessage="Terms of Use"
                />{" "}
              </a>{" "}
              <FormattedMessage id="register.and" defaultMessage="and" />
              <a target="_blank" href="/privacy-policy">
                {" "}
                <FormattedMessage
                  id="register.privacy"
                  defaultMessage="Privacy Policy"
                />
              </a>
            </div>
          </div>
          <input
            type="checkbox"
            name="checkbox"
            onChange={(e) => handleCheck(e)}
          />
          <div>
            {validateInputs() === false ? (
              <button className="button" type="submit">
                <FormattedMessage
                  id="register.submit"
                  defaultMessage="Register"
                />
              </button>
            ) : (
              <button className="button" type="submit">
                <FormattedMessage
                  id="register.submit"
                  defaultMessage="Register"
                />
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
