import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { postMejorasYReclamos } from "../actions";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";
import "../Sass/Styles/SuggestionBox.scss";

export default function SuggestionBox() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    author: isAuthenticated ? user.name : "",
    authorEmail: isAuthenticated ? user.email : "",
    suggestion: "",
  });

  function validate(input) {
    let errors = {};
    if (!input.suggestion) {
      errors.suggestion = "Suggestion is required";
    }
    return errors;
  }

  function handleChange(e) {
    console.log(input);
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
      dispatch(postMejorasYReclamos(input));
      setInput({
        author: "",
        authorEmail: "",
        suggestion: "",
      });
      swal({
        title: "Good job!",
        text: "Suggestion sent!",
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
      <div className="FormSuggestion">
        <h1>Suggestion Box</h1>
        <form
          className="FormRECO"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="cadaLineasugg">
            <p className="label">Name:</p>
            <input
              className="inputsugg"
              type="text"
              name="Name"
              value={input.suggestion}
            />
          </div>
          <div className="cadaLineasugg">
            <p className="label">Email:</p>
            <input
              className="inputsugg"
              type="text"
              name="Email"
              value={input.suggestion}
            />
          </div>
          <div className="cadaLineasugg">
            <p className="label">Suggestion:</p>
            <input
              className="inputsugg"
              type="textarea"
              name="Suggestion"
              value={input.suggestion}
              onChange={(e) => handleChange(e)}
            />
            {errors.suggestion && (
              <p className="errorcar">{errors.suggestion}</p>
            )}
          </div>
          <button className="button" type="submit">
            Add Car
          </button>
        </form>
      </div>
    </>
  );
}
