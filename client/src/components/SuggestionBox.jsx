import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { postMejorasYReclamos } from "../actions";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert2";
import "../Sass/Styles/SuggestionBox.scss";
import { FormattedMessage } from "react-intl";

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
    const emailvalidate = /^\w+([-.]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    const namevalidate = /^[a-zA-Z]+$/;
    if (!input.author) {
      errors.author = "Name is required";
    } else if (namevalidate.test(input.author) === false) {
      errors.author = "Invalid Name: No Symbols Allowed";
    } else if (!input.authorEmail) {
      errors.authorEmail = "Email is required";
    } else if (emailvalidate.test(input.authorEmail) === false) {
      errors.authorEmail = "Invalid Email: No Symbols Allowed";
    } else if (!input.suggestion) {
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
      new swal({
        title: "Good job!",
        text: "Suggestion sent!",
        icon: "success",
        button: "Aww yiss!",
      });
      history.push("/home");
    } else {
      new swal({
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
        <h1>
          <FormattedMessage
            id="sugestionBox.title"
            defaultMessage="Suggestion Box"
          />
        </h1>
        <form
          className="FormRECO"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="cadaLineasugg">
            <p className="label">
              <FormattedMessage id="sugestionBox.name" defaultMessage="Name:" />
            </p>
            <input
              className="inputsugg"
              type="text"
              name="author"
              value={input.author}
              onChange={(e) => handleChange(e)}
            />
            {errors.author && (
              <p className="errorSuggestion">{errors.author}</p>
            )}
          </div>
          <div className="cadaLineasugg">
            <p className="label">
              <FormattedMessage
                id="sugestionBox.email"
                defaultMessage="Email:"
              />
            </p>
            <input
              className="inputsugg"
              type="text"
              name="authorEmail"
              value={input.authorEmail}
              onChange={(e) => handleChange(e)}
            />
            {errors.authorEmail && (
              <p className="errorSuggestion">{errors.authorEmail}</p>
            )}
          </div>
          <div className="cadaLineasugg">
            <p className="label">
              <FormattedMessage
                id="sugestionBox.suggestion"
                defaultMessage="Suggestion:"
              />
            </p>
            <input
              className="inputsugg"
              type="textarea"
              name="suggestion"
              value={input.suggestion}
              onChange={(e) => handleChange(e)}
            />
            {errors.suggestion && (
              <p className="errorSuggestion">{errors.suggestion}</p>
            )}
          </div>
          <button className="button" type="submit">
            <FormattedMessage
              id="sugestionBox.submit"
              defaultMessage="Submit Suggestion"
            />
          </button>
        </form>
      </div>
    </>
  );
}
