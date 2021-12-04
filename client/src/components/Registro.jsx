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
  const [loanding, setLoanding] = useState(false);
  const [dni, setDni] = useState([]);
  
  
  
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
      // } else if (!input.photo) {
        //   errors.photo = "Photo is required";
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
      !input.province||
      !input.checkbox
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
      photo: "",
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
      photoDni: [],
      checkbox:false,
    });
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
      
  const handleCheck = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked,
    });
  };


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
    console.log("file", files);
    const data = new FormData();
    console.log("data", data);
    data.append("file", files[0]);
    data.append("upload_preset", "s6kdvopu");
    setLoanding(true);

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

  const uploadImage2 = async (e) => {
    const files = e.target.files;
    console.log("file", files);
    const data = new FormData();
    console.log("data", data);
    data.append("file", files[0]);
    data.append("upload_preset", "tiuimc3c");
    setLoanding(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dlwobuyjb/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setDni([...dni, file.secure_url]);
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
        photoDni: [],
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
              
            </div>
            
            <div>
              <label>Photo User</label>
              <input
                onChange={(e) => uploadImage(e)}
                type="file"
                name="image"
                required="required"
                accept="image/png, image/jpeg"
              />
              
            </div>

            <div Style="display:none">{(input.photo = image)}</div>
            <label>
              {loanding ? (
                <img src={image} Style="height:150px" alt="user" />
              ) : (
                ""
              )}
            </label>
            
            <div className="cadaLinea">
              <p className="label">DNI*:</p>
              <input
                className="inputs"
                type="number"
                name="dni"
                required="required"
                value={input.dni}
                onChange={(e) => handleChange(e)}
              />
            
            </div>
          
            <div>
              <label>DNI Front</label>
              <input
                onChange={(e) => uploadImage2(e)}
                type="file"
                name="image"
                required="required"
                accept="image/png, image/jpeg"
              />
            
            </div>

            <div Style="display:none">{(input.photoDni = dni)}</div>
            <label>
              {loanding ? (
                <img src={dni[0]} Style="height:150px" alt="front" />
              ) : (
                ""
              )}
            </label>

            <div>
              <label>DNI Back</label>
              <input
                onChange={(e) => uploadImage2(e)}
                type="file"
                name="image"
                required="required"
                accept="image/png, image/jpeg"
              />
            </div>

            <div Style="display:none">{(input.photoDni = dni)}</div>
            <label>
              {loanding ? (
                <img src={dni[1]} Style="height:150px" alt="back" />
              ) : (
                ""
              )}
            </label>
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
          <input type="checkbox" name="checkbox" onChange={(e)=> handleCheck(e)}/>
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
