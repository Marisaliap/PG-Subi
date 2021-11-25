import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../actions";
import { useAuth0 } from "@auth0/auth0-react";

export default function Registro() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const usuario = useSelector((state) => state.user);

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    } else if (!input.lastName) {
      errors.lastName = "Last name is required";
    } else if (!input.email) {
      errors.email = "Email is required";
    } else if (!input.telephone) {
      errors.telephone = "Telephone is required";
    } else if (!input.province) {
      errors.province = "Province is required";
    } else if (!input.city) {
      errors.city = "City is required";
    } else if (!input.street) {
      errors.street = "Street is required";
    } else if (!input.dni) {
      errors.dni = "DNI is required";
    } else if (!input.age) {
      errors.age = "Age is required";
    }
    return errors;
  }

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: isAuthenticated ? user.given_name : "",
    lastName: isAuthenticated ? user.family_name : "",
    email: isAuthenticated ? user.email : "",
    telephone: "",
    facebook: "",
    instagram: "",
    password: "a",
    province: "",
    city: "",
    street: "",
    dni: "",
    age: "",
    about: "",
    genre: "",
  });

  useEffect(() => {
    dispatch(postUser());
  }, []);

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

  function handleCheckGenre(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        genre: e.target.value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    console.log(input);
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      dispatch(postUser(input));
      console.log(input);
      setInput({
        name: "",
        lastName: "",
        email: "",
        telephone: "",
        facebook: "",
        instagram: "",
        province: "",
        city: "",
        street: "",
        dni: "",
        age: "",
        about: "",
        genre: "",
      });
      alert("User created correctly");
      history.push("/home");
    } else {
      alert("All mandatory fields must be filled to continue");
    }
  }

  return (
    <>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>Create your User</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {!isAuthenticated ? (
          <div>
            <div>
              <label>Name*:</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Last Name*:</label>
              <input
                type="text"
                name="lastName"
                value={input.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Email*:</label>
              <input
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
                <label>Name*:</label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Last Name*:</label>
                <input
                  type="text"
                  name="lastName"
                  value={input.lastName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          )
        )}
        <div>
          <label>Telephone*:</label>
          <input
            type="number"
            name="telephone"
            value={input.telephone}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Facebook:</label>
          <input
            type="text"
            name="facebook"
            value={input.facebook}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Instagram:</label>
          <input
            type="text"
            name="instagram"
            value={input.instagram}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Province*:</label>
          <input
            type="text"
            name="province"
            value={input.province}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>City*:</label>
          <input
            type="text"
            name="city"
            value={input.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Street*:</label>
          <input
            type="text"
            name="street"
            value={input.street}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>DNI*:</label>
          <input
            type="number"
            name="dni"
            value={input.dni}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Age*:</label>
          <input
            type="number"
            name="age"
            value={input.age}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>About:</label>
          <input
            type="text"
            name="about"
            value={input.about}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Genre*:</label>
          <label>
            Masculine
            <input
              type="radio"
              id="Masculine"
              name="genre"
              value="Masculine"
              onChange={(e) => handleCheckGenre(e)}
            />
          </label>
          <label>
            Femenine
            <input
              type="radio"
              id="Femenine"
              name="genre"
              value="Femenine"
              onChange={(e) => handleCheckGenre(e)}
            />
          </label>
          <label>
            Rather not say
            <input
              type="radio"
              id="Rather not say"
              name="genre"
              value="Rather not say"
              onChange={(e) => handleCheckGenre(e)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
