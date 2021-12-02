import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { postCar } from "../actions";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";
import "../Sass/Styles/FormCar.scss";

export default function FormCar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  const [errors, setErrors] = useState({err:"null"});
  const [input, setInput] = useState({
    idUser: isAuthenticated ? user.email : "",
    patent: "",
    color: "",
    brand: "",
    model: "",
    cylinder: "",
  });
  console.log(input);

  function validate(input) {
    let errors = {};
    if (!input.patent) {
      errors.patent = "Patent is required";
    } else if (!input.color) {
      errors.color = "Color is required";
    } else if (!input.brand) {
      errors.brand = "Brand is required";
    } else if (!input.model) {
      errors.model = "Model is required";
    } else if (!input.cylinder) {
      errors.cylinder = "Cylinder is required";
    }
    return errors;
  }

  useEffect(() => {
    dispatch(postCar());
  }, [dispatch]);

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
console.log(errors);
  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(postCar(input));
      setInput({
        patent: "",
        color: "",
        brand: "",
        model: "",
        cylinder: "",
      });
      swal({
        title: "Good job!",
        text: "Car created correctly",
        icon: "success",
        button: "Aww yiss!",
      });
      history.push("/route");
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
    <div className="FormCar">
      <h1>Create your Car</h1>
      <form
        className="Form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <div>
            <label>Patent</label>
            <input
              type="text"
              name="patent"
              value={input.patent}
              onChange={(e) => handleChange(e)}
            />
            {errors.patent && <p className="error">{errors.patent}</p>}
            <br />
            <label>Color</label>
            <input
              type="text"
              name="color"
              value={input.color}
              onChange={(e) => handleChange(e)}
            />
            {errors.color && <p className="error">{errors.color}</p>}
            <br />
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={input.brand}
              onChange={(e) => handleChange(e)}
            />
            {errors.brand && <p className="error">{errors.brand}</p>}
            <br />
            <label>Model</label>
            <input
              type="text"
              name="model"
              value={input.model}
              onChange={(e) => handleChange(e)}
            />
            {errors.model && <p className="error">{errors.model}</p>}
            <br />
            <label>Cylinder</label>
            <input
              type="text"
              name="cylinder"
              value={input.cylinder}
              onChange={(e) => handleChange(e)}
            />
            {errors.cylinder && <p className="error">{errors.cylinder}</p>}
          </div>
          <button className="button" type="submit">
            Charge Car
          </button>
        </div>
      </form>
    </div>
  );
}
