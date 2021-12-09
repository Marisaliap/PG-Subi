import { React, useState } from "react";
//import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userPost, setPost } from "../actions/index";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CardPost from "./CardPost";
import { BsStar } from "react-icons/bs";
import swal from "sweetalert";
import "../Sass/Styles/Post.scss";


export default function Post(props) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userPost);
  const { user, isAuthenticated } = useAuth0();
  const [errors, setErrors] = useState({});
  const id = props.match.params.id;
  let time = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

  useEffect(() => {
    dispatch(userPost(id));
  }, [dispatch, id]);

  const [input, setInput] = useState({
    email: id,
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

  console.log("userinfo", userInfo);
  console.log("input", input);

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
        email: "",
        date: "",
        author: "",
        description: "",
        calification: "",
      });
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
      {userInfo.length === 0 ? (
        ""
      ) : (
        <div className="infoUser">
          <img src={userInfo.photo} alt="post" Style="width:75px" />
          <h2>
            {userInfo.name} {userInfo.LastName}
          </h2>
          <h2>
            {userInfo.calification}
            <BsStar />
          </h2>
        </div>
      )}
      {userInfo.length === 0
        ? ""
        : userInfo.posts.map((e) => (
            <div>
              <CardPost
                calification={e.calification}
                date={e.date}
                description={e.description}
              />
            </div>
          ))}
          </div>
      <div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>Calification</label>
          <input
            type="number"
            name="calification"
            value={input.calification}
            onChange={(e) => handleChange(e)}
          />
          /5
          <BsStar />
          {errors.calification && (
            <p className="error">{errors.calification}</p>
          )}
          <br />
          <label>Comment</label>
          <textarea
            type="text"
            name="description"
            value={input.description}
            onChange={(e) => handleChange(e)}
          />
          {errors.description && <p className="error">{errors.description}</p>}
          <div>
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
