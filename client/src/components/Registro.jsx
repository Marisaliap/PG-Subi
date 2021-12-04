import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../actions";
import { useAuth0 } from "@auth0/auth0-react";
import "../Sass/Styles/RegisterForm.scss";
import swal from "sweetalert";

export default function Registro() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const [image, setImage] = useState("");
  const [loanding, setLoading] = useState(false);


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
    } else if (!input.photo) {
      errors.photo = "Photo is required";
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
        !input.province
      ) {
        return false;
      } else {
        return true;
      }
    }

    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
      name: isAuthenticated ? user.given_name : "",
      lastName: isAuthenticated ? user.family_name : "",
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
    }
    // ----------------------< upload image rami x jp >----------------------
    const uploadImage = async (e) => {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "s6kdvopu");
      setLoading(true);

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
            <div>
              <div className="cadaLinea">
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
              <div className="cadaLinea">
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
              {/* <div className="cadaLinea">
              <p className="label">Email*:</p>
              <input
                className="inputs"
                type="text"
                name="email"
                value={input.email}
                onChange={(e) => handleChange(e)}
              />
            </div> */}
            </div>
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
            {/* ------------------< photo input rami x jp >--------------------- */}
            <div>
              <label >photo user</label>
              <input
                onchange={uploadImage}
                type="file"
                name="image"
                required="required"
                accept="image/png, image/jpeg"
              />
              {errors.photo && <p className="error">{errors.photo}</p>}
            </div>

            <div>{(input.photo = image)}</div>
            <label>{loanding ? <img src={image} alt="Photo user" /> : <p>not upload Image</p>}</label>
            {/* ------------------------------------------------------------------ */}
            <div className="terminosycond">
              <div className="terminos">
                By submitting, you agree to our{" "}
                <a target="_blank" href="/terms-and-conditions">
                  {" "}
                  Terms of Use
                </a>{" "}
                and{" "}
                <a target="_blank" href="/privacy-policy">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div>
              {validateInputs() === false ? (
                <button className="buttondisabled">Submit</button>
              ) : (
                <button className="button" type="submit">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </>
    );
  }
