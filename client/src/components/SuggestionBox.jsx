import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { postMejorasYReclamos } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";
import "../Sass/Styles/SuggestionBox.scss";

export default function SuggestionBox() {
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    author: isAuthenticated ? user.given_name : "",
    authorEmail: isAuthenticated ? user.email : "",
    suggestion: "",
  });
  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if (!input.suggestion) {
      errors.suggestion = "Suggestion is required";
    }
    return errors;
  }

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
              name="author"
              value={input.author}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="cadaLineasugg">
            <p className="label">Email:</p>
            <input
              className="inputsugg"
              type="text"
              name="authorEmail"
              value={input.authorEmail}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="cadaLineasugg">
            <p className="label">Suggestion:</p>
            <input
              className="inputsugg"
              type="textarea"
              name="suggestion"
              value={input.suggestion}
              onChange={(e) => handleChange(e)}
            />
            {errors.suggestion && (
              <p className="errorcar">{errors.suggestion}</p>
            )}
          </div>
          <button className="button" type="submit">
            Submit Suggestion
          </button>
        </form>
      </div>
    </>
  );
}
