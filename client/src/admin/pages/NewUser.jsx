import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postUser, getAllUsers } from "../../actions";
import swal from "sweetalert2";
import "../../Sass/Styles/NewUser.scss";
import { FormattedMessage } from "react-intl";

export default function Registro() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [image, setImage] = useState("");
  const [loanding, setLoanding] = useState(false);
  const [dni, setDni] = useState([]);
  let booleanDNI;
  const placeHolderAbout = "Please tell us a little about yourself";

  useEffect(() => {
    dispatch(getAllUsers());
  }, [booleanDNI, dispatch]);
  let usuariosRegistrados = useSelector((state) => state.usuariosRegistrados);

  // ----------------<errors gestions>-------------------

  function validate(input) {
    booleanDNI = true;
    for (let i = 0; i < usuariosRegistrados.length; i++) {
      if (usuariosRegistrados[i].dni.toString() === input.dni) {
        booleanDNI = false;
      }
    }

    let errors = {};
    const wordvalidate = /^[a-zA-ZüéáíóúñÑ ]+$/;
    if (!input.name) {
      errors.name = "Name is required";
    } else if (wordvalidate.test(input.name) === false) {
      errors.name = "Invalid Name: No Symbols Allowed";
    } else if (!input.lastName) {
      errors.lastName = "Last name is required";
    } else if (wordvalidate.test(input.lastName) === false) {
      errors.lastName = "Invalid Last Name: No Symbols Allowed";
    } else if (!input.email) {
      errors.email = "Email is required";
    } else if (!input.dni) {
      errors.dni = "DNI is required";
    } else if (booleanDNI === false) {
      errors.dni = "DNI already exists";
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
    } else if (wordvalidate.test(input.city) === false) {
      errors.city = "Invalid City: No Symbols Allowed";
    } else if (!input.province) {
      errors.province = "Province is required";
    } else if (wordvalidate.test(input.province) === false) {
      errors.province = "Invalid Province: No Symbols Allowed";
    } /* else if (!input.about) {
      errors.about = 'About is required';
    } */
    return errors;
  }

  function validateGender() {
    // eslint-disable-next-line
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
      !input.province /* || */
      /* !input.about */
    ) {
      return false;
    } else {
      return true;
    }
  }

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
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
    checkbox: false,
  });

  // ----------------<upload images>-------------------

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "PhotoUser");
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
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "PhotoDni");
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

  // ----------------<handles>-------------------

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

      history.push("/admin/users");
      return new swal({
        title: "Good job!",
        text: "User created correctly",
        icon: "success",
        button: "Aww yiss!",
      });
    } else {
      return new swal({
        title: "Sorry",
        text: "All mandatory fields must be filled to continue",
        icon: "warning",
        button: "Ok",
      });
    }
  }

  // _______________________________________________________________________________

  return (
    <>
      <div className="newUserContainer">
        <div className="userTitleContainer">
          <h1>
            <FormattedMessage
              id="adminNewUser.title"
              defaultMessage="Create New User"
            />
          </h1>
        </div>
        <form
          className="newUserForm"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <div className="newUserDiv">
              <p className="label">
                <FormattedMessage id="register.name" defaultMessage="Name*:" />
              </p>
              <input
                className="inputs"
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="newUserDiv">
              <p className="label">
                <FormattedMessage
                  id="register.lastname"
                  defaultMessage="Last Name*:"
                />
              </p>
              <input
                className="inputs"
                type="text"
                name="lastName"
                value={input.lastName}
                onChange={(e) => handleChange(e)}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="newUserDiv">
              <p className="label">
                <FormattedMessage
                  id="register.email"
                  defaultMessage="Email*:"
                />
              </p>
              <input
                className="inputs"
                type="text"
                name="email"
                value={input.email}
                onChange={(e) => handleChange(e)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="newUserDiv">
              <p className="label">
                <FormattedMessage
                  id="register.photoUser"
                  defaultMessage="Photo User*:"
                />
              </p>
              <input
                onChange={(e) => uploadImage(e)}
                className="custom-file-input"
                type="file"
                name="image"
                required="required"
                accept="image/png, image/jpeg"
              />
            </div>
            <div Style="display:none">{(input.photo = image)}</div>
            <p>
              {loanding ? <img src={image} Style="height:150px" alt="" /> : ""}
            </p>
            <div className="newUserDiv">
              <p className="label">
                <FormattedMessage
                  id="register.id"
                  defaultMessage="ID or passport*:"
                />
              </p>
              <input
                className="inputs"
                type="number"
                name="dni"
                required="required"
                value={input.dni}
                onChange={(e) => handleChange(e)}
              />
              {errors.dni && <p className="error">{errors.dni}</p>}
            </div>
            <div className="newUserDiv">
              <p className="label">
                <FormattedMessage
                  id="register.idFront"
                  defaultMessage="ID or passport Front*:"
                />
              </p>
              <div className="cargaImagen">
                <input
                  onChange={(e) => uploadImage2(e)}
                  className="custom-file-input"
                  type="file"
                  name="image"
                  required="required"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
            <div Style="display:none">{(input.photoDni = dni)}</div>
            <p>
              {loanding ? <img src={dni[0]} Style="height:150px" alt="" /> : ""}
            </p>
            <div className="newUserDiv">
              <p className="label">
                <FormattedMessage
                  id="register.idBack"
                  defaultMessage="ID or passport Back*:"
                />
              </p>
              <label className="cargaImagen">
                <input
                  onChange={(e) => uploadImage2(e)}
                  className="custom-file-input"
                  type="file"
                  name="image"
                  required="required"
                  accept="image/png, image/jpeg"
                />
              </label>
            </div>
            <div Style="display:none">{(input.photoDni = dni)}</div>
            <p>
              {loanding ? <img src={dni[1]} Style="height:150px" alt="" /> : ""}
            </p>
          </div>
          <div className="newUserDiv">
            <p className="label" for="genre">
              <FormattedMessage
                id="register.gender"
                defaultMessage="Gender*:"
              />{" "}
            </p>
            <select
              className="select"
              name="genre"
              id="genre"
              onChange={(e) => handleSelect(e)}
              required
            >
              <option disabled selected value="1">
                -- Select an option --
              </option>
              <FormattedMessage id="register.gender.1">
                {(message) => <option value="Male">{message}</option>}
              </FormattedMessage>
              <FormattedMessage id="register.gender.2">
                {(message) => <option value="Female">{message}</option>}
              </FormattedMessage>
              <FormattedMessage id="register.gender.3">
                {(message) => <option value="Rather not say">{message}</option>}
              </FormattedMessage>
            </select>
            {errors.genre && <p className="error">{errors.genre}</p>}
          </div>
          <div className="newUserDiv">
            <p className="label">
              <FormattedMessage id="register.age" defaultMessage="Age*:" />
            </p>
            <input
              className="inputs"
              type="number"
              name="age"
              value={input.age}
              onChange={(e) => handleChange(e)}
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>
          <div className="newUserDiv">
            <p className="label">
              <FormattedMessage
                id="register.phone"
                defaultMessage="Telephone*:"
              />
            </p>
            <input
              className="inputs"
              type="number"
              name="telephone"
              value={input.telephone}
              onChange={(e) => handleChange(e)}
            />
            {errors.telephone && <p className="error">{errors.telephone}</p>}
          </div>
          <div className="newUserDiv">
            <p className="label">
              <FormattedMessage
                id="register.street"
                defaultMessage="Street*:"
              />
            </p>
            <input
              className="inputs"
              type="text"
              name="street"
              value={input.street}
              onChange={(e) => handleChange(e)}
            />
            {errors.street && <p className="error">{errors.street}</p>}
          </div>
          <div className="newUserDiv">
            <p className="label">
              <FormattedMessage id="register.city" defaultMessage="City*:" />
            </p>
            <input
              className="inputs"
              type="text"
              name="city"
              value={input.city}
              onChange={(e) => handleChange(e)}
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>
          <div className="newUserDiv">
            <p className="label">
              <FormattedMessage
                id="register.province"
                defaultMessage="Province*:"
              />
            </p>
            <input
              className="inputs"
              type="text"
              name="province"
              value={input.province}
              onChange={(e) => handleChange(e)}
            />
            {errors.province && <p className="error">{errors.province}</p>}
          </div>
          {input.checkboxManejante === false ? (
            ""
          ) : (
            <div className="newUserDiv">
              <p className="label">
                <FormattedMessage id="register.cbu" defaultMessage="CBU:" />
              </p>
              <input
                className="inputs"
                type="text"
                name="cbu"
                value={input.cbu}
                onChange={(e) => handleChange(e)}
              />
              {errors.cbu && <p className="error">{errors.cbu}</p>}
            </div>
          )}
          <div className="newUserDiv">
            <p className="label">
              <FormattedMessage
                id="register.facebook"
                defaultMessage="Facebook:"
              />
            </p>
            <input
              className="inputs"
              type="text"
              name="facebook"
              value={input.facebook}
              onChange={(e) => handleChange(e)}
            />
            {errors.facebook && <p className="error">{errors.facebook}</p>}
          </div>
          <div className="newUserDiv">
            <p className="label">
              <FormattedMessage
                id="register.instagram"
                defaultMessage="Instagram:"
              />
            </p>
            <input
              className="inputs"
              type="text"
              name="instagram"
              value={input.instagram}
              onChange={(e) => handleChange(e)}
            />
            {errors.instagram && <p className="error">{errors.instagram}</p>}
          </div>
          <div className="newUserDiv">
            <p className="label">
              <FormattedMessage
                id="adminNewUser.about"
                defaultMessage="About:"
              />
            </p>
            <textarea
              type="text"
              name="about"
              value={input.about}
              placeholder={placeHolderAbout}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="divButton">
            {validateInputs() === false ? (
              <button className="buttondisabled">
                <FormattedMessage
                  id="register.submit"
                  defaultMessage="Register"
                />
              </button>
            ) : (
              <button className="button" type="submit">
                <FormattedMessage
                  id="register.submit"
                  defaultMessage="Register"
                />
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
