import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { postCar } from "../actions";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import swal from 'sweetalert';

export default function FormCar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    email: isAuthenticated ? user.email : "",
    patent: "",
    color: "",
    brand: "",
    model: "",
    cylinder: "",
  });

  function validate(input) {
    let errors = {};
    if (!input.patent) {
      errors.patent = 'Patent is required';
    } else if (!input.color) {
      errors.color = 'Color is required';
    } else if (!input.brand) {
      errors.brand = 'Brand is required';
    } else if (!input.model) {
      errors.model = 'Model is required';
    } else if (!input.cylinder) {
      errors.cylinder = 'Cylinder is required';
    }
    return errors;
  }

  useEffect(() => {
    dispatch(postCar());
  }, [dispatch]);

  function handleChange(e) {
    console.log(input)
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
    if (true) {
      dispatch(postCar(input));
      setInput({
        patent:"",
        color: "",
        brand: "",
        model: "",
        cylinder: "",
      });
      swal({
        title: "Good job!",
        text: 'Car created correctly',
        icon: "success",
        button: "Aww yiss!",
      });
    } else {
      swal({
        title: "Sorry",
        text: 'All mandatory fields must be filled to continue',
        icon: "warning",
        button: "Ok",
      });
    }
  }

  return (
    <div>
    <h1>Create your Car</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Patent</label>
        <input
          type="text"
          name="patent"
          value={input.patent}
          onChange={(e) => handleChange(e)}
        />
        {
          errors.patent && (
            <p>{errors.patent}</p>
          )
        }     
        <label>Color</label>
        <input
          type="text"
          name="color"
          value={input.color}
          onChange={(e) => handleChange(e)}
        />
        {
          errors.color && (
            <p>{errors.color}</p>
          )
        }        
        <label>Brand</label>
        <input
          type="text"
          name="brand"
          value={input.brand}
          onChange={(e) => handleChange(e)}
        />
        {
          errors.brand && (
            <p>{errors.brand}</p>
          )
        }        
        <label>Model</label>
        <input
          type="text"
          name="model"
          value={input.model}
          onChange={(e) => handleChange(e)}
        />
        {
          errors.model && (
            <p>{errors.model}</p>
          )
        }        
        <label>Cylinder</label>
        <input
          type="text"
          name="cylinder"
          value={input.cylinder}
          onChange={(e) => handleChange(e)}
        />
        {
          errors.cylinder && (
            <p>{errors.cylinder}</p>
          )
        }        
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
