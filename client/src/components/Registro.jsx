import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postUser } from '../actions';
import { useAuth0 } from '@auth0/auth0-react';
import '../Sass/Styles/RegisterForm.scss';

export default function Registro() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const usuario = useSelector((state) => state.user);

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Name is required';
    } else if (!input.lastName) {
      errors.lastName = 'Last name is required';
      /* } else if ("^[^!@#$^&%*()+=[\]\/{}|:<>?,.\t]+$") {
      errors.email = 'The last name cannot contain symbols'; */
    } else if (!input.email) {
      errors.email = 'Email is required';
    } else if (!input.dni) {
      errors.dni = 'DNI is required';
    } else if (!input.age) {
      errors.age = 'Age is required';
    } else if (!input.telephone) {
      errors.telephone = 'Telephone is required';
    } else if (!input.street) {
      errors.street = 'Street is required';
    } else if (!input.city) {
      errors.city = 'City is required';
    } else if (!input.province) {
      errors.province = 'Province is required';
      // } else if (chequeado === 0) {
      //   errors.terms = "You must agree to our terms and conditions";
    } else if (validateGenre() === false) {
      errors.genre = 'Genre is required';
    }
    return errors;
  }

  function validateGenre() {
    if (document.getElementById('genre').value == '1') {
      return false;
    }
    return true;
  }

  // function validateCheck() {
  //   var elements = document.getElementsByName("terminos");
  //   var statusText = "<br />";

  //   for (var index = 0; index < elements.length; index++) {
  //     statusText +=
  //       elements[index].value + "-" + elements[index].checked + "<br />";
  //   }
  //   document.getElementById("status").innerHTML = statusText;
  // }

  const [errors, setErrors] = useState({
    algo: 'asd',
  });

  const [input, setInput] = useState({
    name: isAuthenticated ? user.given_name : '',
    lastName: isAuthenticated ? user.family_name : '',
    email: isAuthenticated ? user.email : '',
    telephone: '',
    facebook: '',
    instagram: '',
    password: 'a',
    province: '',
    city: '',
    street: '',
    dni: '',
    age: '',
    about: '',
    genre: '',
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

  function handleSelect(e) {
    e.preventDefault();
    setInput({
      ...input,
      genre: e.target.value,
    });
    setErrors({
      algo: '',
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user, 'SOY USER');
    console.log(input, 'SOY INPUT');
    console.log(errors, 'SOY ERRORS');
    if (Object.keys(errors).length === 0) {
      dispatch(postUser(input));
      console.log(input);
      setInput({
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        facebook: '',
        instagram: '',
        province: '',
        city: '',
        street: '',
        dni: '',
        age: '',
        about: '',
        genre: '',
      });
      alert('User created correctly');
      history.push('/home');
    } else {
      alert('All mandatory fields must be filled to continue');
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
          className="Form"
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
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div>
                <label>Last Name*:</label>
                <input
                  type="text"
                  name="lastName"
                  value={input.lastName}
                  onChange={(e) => handleChange(e)}
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>
              <div>
                <label>Email*:</label>
                <input
                  type="text"
                  name="email"
                  value={input.email}
                  onChange={(e) => handleChange(e)}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
            </div>
          ) : (
            user.name.includes('@') && (
              <div>
                <div>
                  <label>Name*:</label>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                  <label>Last Name*:</label>
                  <input
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
          <div>
            <label>Telephone*:</label>
            <input
              type="number"
              name="telephone"
              value={input.telephone}
              onChange={(e) => handleChange(e)}
            />
            {errors.telephone && <p className="error">{errors.telephone}</p>}
          </div>
          <div>
            <label>Facebook:</label>
            <input
              type="text"
              name="facebook"
              value={input.facebook}
              onChange={(e) => handleChange(e)}
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>
          <div className="Genres">
            <label for="genre">Genre*:</label>
            <select name="genre" id="genre" onChange={(e) => handleSelect(e)}>
              <option disabled selected value="1">
                {' '}
                -- Select an option --{' '}
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
            {errors.province && <p className="error">{errors.province}</p>}
          </div>
          <div>
            <label>City*:</label>
            <input
              type="text"
              name="city"
              value={input.city}
              onChange={(e) => handleChange(e)}
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>
          <div>
            <label>Street*:</label>
            <input
              type="text"
              name="street"
              value={input.street}
              onChange={(e) => handleChange(e)}
            />
            {errors.street && <p className="error">{errors.street}</p>}
          </div>
          <div>
            <label>DNI*:</label>
            <input
              type="number"
              name="dni"
              value={input.dni}
              onChange={(e) => handleChange(e)}
            />
            {errors.dni && <p className="error">{errors.dni}</p>}
          </div>
          <div>
            <label>Age*:</label>
            <input
              type="number"
              name="age"
              value={input.age}
              onChange={(e) => handleChange(e)}
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>
          <div>
            <label>About:</label>
            <textarea
              type="text"
              name="about"
              value={input.about}
              onChange={(e) => handleChange(e)}
            />
            <div>
              <label>
                By continuing, you agree to our
                <a target="_blank" href="/terms-and-conditions">
                  {' '}
                  Terms of Use
                </a>
                <span> and </span>
                <a target="_blank" href="/privacy-policy">
                  {' '}
                  Privacy Policy{' '}
                </a>
              </label>
              <p>&nbsp;</p>
              <input
                type="checkbox"
                name="terminos"
                value="1"
                // onChange={validateCheck()}
              />
              {errors.terms && <p className="error">{errors.terms}</p>}
            </div>
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
