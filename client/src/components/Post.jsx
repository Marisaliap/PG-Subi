import { React, useState } from "react";
//import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  userPost,
  setPost,
  putRatingUser,
  getUserDetail,
} from "../actions/index";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";
import "../Sass/Styles/Post.scss";
import RatingStar from "./RatingStar.jsx";
import { FormattedMessage } from "react-intl";

export default function Post(id) {
  const dispatch = useDispatch();
  const userpost = useSelector((state) => state.userPost);
  const { user, isAuthenticated } = useAuth0();
  const [errors, setErrors] = useState({});
  let time = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  let ids = id.id;

  useEffect(() => {
    dispatch(userPost(ids));
  }, [dispatch, ids]);

  const [input, setInput] = useState({
    userEmail: ids,
    date: time,
    author: isAuthenticated ? user.name : "",
    description: "",
    calification: "",
  });

  function validate(input) {
    let errors = {};
    if (!input.description) {
      errors.description = "Description is required";
    } else if (!input.calification) {
      errors.calification = "Calification is required";
    }
    return errors;
  }

  function validateInputs() {
    if (!input.description || !input.calification) {
      return false;
    } else {
      return true;
    }
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
      dispatch(setPost(input));
      setInput({
        userEmail: "",
        date: "",
        author: "",
        description: "",
        calification: "",
      });
      dispatch(putRatingUser(ids));
      dispatch(userPost(ids));
      swal({
        title: "Good job!",
        text: "Post created correctly",
        icon: "success",
        button: "Aww yiss!",
      });
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
    <div className="Post">
      <div>
        <div className="desContainer">
          {userpost.length > 0
            ? userpost.map((post, i) => (
                <div key={i} className="description">
                  <div className="infodate">
                    <h6>{post.date}</h6>
                    <h6>{post.author}</h6>
                    <RatingStar Rating={post.calification} />
                  </div>
                  <h5>{post.description}</h5>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div>
        <form
          className="formPost"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="select">
            <select
              name="calification"
              onChange={(e) => handleChange(e)}
              id="star"
              className="star"
            >
              <option value="" disabled selected className="person">
                --Cal--
              </option>
              <option value="0">0</option>
              <option value="0.5">0.5</option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="2.5">2.5</option>
              <option value="3">3</option>
              <option value="3.5">3.5</option>
              <option value="4">4</option>
              <option value="4.5">4.5</option>
              <option value="5">5</option>
            </select>
            {errors.calification && (
              <p className="error">{errors.calification}</p>
            )}
          </div>
          <br />
          <div className="textarea">
            <FormattedMessage id="post.description">
              {(message) => (
                <textarea
                  placeholder={message}
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={(e) => handleChange(e)}
                />
              )}
            </FormattedMessage>
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}
          </div>
          <div className="divbutton">
            {validateInputs() === false ? (
              <button className="buttondisabled">
                <FormattedMessage
                  id="Post.title"
                  defaultMessage="Rate this user"
                />
              </button>
            ) : (
              <button className="button" type="submit">
                <FormattedMessage
                  id="Post.title"
                  defaultMessage="Rate this user"
                />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
