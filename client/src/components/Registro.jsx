import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../actions";
import { useAuth0 } from "@auth0/auth0-react";
import "../Sass/Styles/RegisterForm.scss";
import swal from "sweetalert";

export default function Registro() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    } else if (!input.lastName) {
      errors.lastName = "Last name is required";
      /* } else if ("^[^!@#$^&%*()+=[\]\/{}|:<>?,.\t]+$") {
      errors.email = 'The last name cannot contain symbols'; */
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
    } else if (validateTerms() === false) {
      errors.terms = "You must agree to our terms and conditions";
    }
    return errors;
  }

  function validateGender() {
    if (document.getElementById("genre").value == "1") {
      return false;
    }
    return true;
  }

  function validateTerms() {
    if (document.getElementById("terms").value == "1") {
      return false;
    }
    return true;
  }

  const [errors, setErrors] = useState({
    algo: "asd",
  });

  const [input, setInput] = useState({
    name: isAuthenticated ? user.given_name : "",
    lastName: isAuthenticated ? (!user.family_name && "Fernandez") : user.family_name,
    email: isAuthenticated ? user.email : "",
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
    terms: "",
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
  }

  function handleSelect(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors({
      algo: "",
    });
  }

  function handleSelectTerms(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors({});
    // HAY QUE ARREGLAR ESTO PORQUE SI LE DAS QUE SI BORRA TODOS LOS ERRORES.
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(errors);
    console.log(input);
    if (Object.keys(errors).length === 0) {
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
        terms: "",
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
        <button className="buttonBlue">Home</button>
      </Link>
      <div className="formContainer">
        <h1>Create your User</h1>
        <form
          className="FormRegistro"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {!isAuthenticated ? (
            <div>
              <div>
                <p className="label">Name*:</p>
                <input
                  className="inputs"
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e)}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div>
                <p className="label">Last Name*:</p>
                <input
                  className="inputs"
                  type="text"
                  name="lastName"
                  value={input.lastName}
                  onChange={(e) => handleChange(e)}
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>
              <div>
                <p className="label">Email*:</p>
                <input
                  className="inputs"
                  type="text"
                  name="email"
                  value={input.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          ) : (
            user.name.includes("@") && (
              <div>
                <div>
                  <p className="label">Name*:</p>
                  <input
                    className="inputs"
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                  <p className="label">Last Name*:</p>
                  <input
                    className="inputs"
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                </div>
              </div>
            )
          )}
          <div className="cadaLinea">
            <p className="label">DNI*:</p>
            <input
              className="inputs"
              type="number"
              name="dni"
              value={input.dni}
              onChange={(e) => handleChange(e)}
            />
            {errors.dni && <p className="error">{errors.dni}</p>}
          </div>
          <div className="cadaLinea">
            <p className="label" for="genre">
              Gender*:
            </p>
            <select
              name="genre"
              id="genre"
              className="select"
              onChange={(e) => handleSelect(e)}
            >
              <option disabled selected value="1">
                {" "}
                -- Select an option --{" "}
              </option>
              <option className="options" value="Male">
                Male
              </option>
              <option className="options" value="Female">
                Female
              </option>
              <option className="options" value="Rather not say">
                Rather not say
              </option>
            </select>
            {errors.genre && <p className="error">{errors.genre}</p>}
          </div>
          <div className="cadaLinea">
            <p className="label">Age*:</p>
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
            <p className="label">Telephone*:</p>
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
            <p className="label">Street*:</p>
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
            <p className="label">City*:</p>
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
            <p className="label">Province*:</p>
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
            <p className="label">Facebook:</p>
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
            <p className="label">Instagram:</p>
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
            <p className="label">About:</p>
            <textarea
              type="text"
              name="about"
              value={input.about}
              onChange={(e) => handleChange(e)}
            />
            {errors.about && <p className="error">{errors.about}</p>}
          </div>
          <div className="terminosycond">
            <div className="terminos">
              By continuing, you agree to our{" "}
              <a target="_blank" href="/terms-and-conditions">
                {" "}
                Terms of Use{" "}
              </a>{" "}
              and
              <a target="_blank" href="/privacy-policy">
                {" "}
                Privacy Policy
              </a>
              <select
                name="terms"
                id="terms"
                className="terms"
                onChange={(e) => handleSelectTerms(e)}
              >
                <option disabled selected value="1">
                  {" "}
                  -- Select an option --{" "}
                </option>
                <option className="options" value="Yes">
                  Yes
                </option>
              </select>
            </div>
            {errors.terms && <p className="errorterms">{errors.terms}</p>}
          </div>
          <div>
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
