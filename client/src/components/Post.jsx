import { React, useState } from 'react';
//import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getPost, setPost } from '../actions/index';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import swal from 'sweetalert2';
import '../Sass/Styles/Post.scss';
import RatingStar from './RatingStar.jsx';

export default function Post(id) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userPost);
  const { user, isAuthenticated } = useAuth0();
  const [errors, setErrors] = useState({});
  let time = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  const [input, setInput] = useState({
    email: userInfo.email,
    date: time,
    author: isAuthenticated ? user.name : '',
    description: '',
    calification: '',
  });

  function validate(input) {
    let errors = {};
    if (!input.description) {
      errors.description = 'Description is required';
    } else if (!input.calification) {
      errors.calification = 'Calification is required';
    }
    return errors;
  }

  console.log('userinfo', userInfo);
  console.log('input', input);

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
        email: '',
        date: '',
        author: '',
        description: '',
        calification: '',
      });
      new swal({
        title: 'Good job!',
        text: 'Post created correctly',
        icon: 'success',
        button: 'Aww yiss!',
      });
    } else {
      new swal({
        title: 'Sorry',
        text: 'All mandatory fields must be filled to continue',
        icon: 'warning',
        button: 'Ok',
      });
    }
  }

  return (
    <div className="Post">
      <div>
        {userInfo.length === 0 ? (
          ''
        ) : (
          <div className="infoUser">
            {console.log('post', userInfo.calification[0])}
            <RatingStar Rating={userInfo.calification[0]} />
          </div>
        )}
        <div className="desContainer">
          {userInfo.length === 0
            ? ''
            : userInfo.posts.map((e) => (
                <div className="description">
                  <div className="infodate">
                    <h6>{e.date}</h6>
                    <h6>{e.author}</h6>
                    <RatingStar Rating={e.calification} />
                  </div>
                  <h5>{e.description}</h5>
                </div>
              ))}
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
              <option value="0" disabled selected className="person">
                Calification
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
            <textarea
              placeholder="Commnet"
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handleChange(e)}
            />
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}
          </div>
          <div className="divbutton">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
