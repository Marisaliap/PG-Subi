import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { postCar } from "../actions";
import { useDispatch } from "react-redux";

export default function FormCar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState();
  const [input, setInput] = useState({
    patent: "",
    color: "",
    brand: "",
    model: "",
    cylinder: "",
  });
console.log(input
  )
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
    } else if (!input.cyinder) {
      errors.cyinder = 'Cylinder is required';
    }
    return errors;
  }

  useEffect(() => {
    dispatch(postCar());
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
      alert("Car created correctly");
      history.push("/home");
    } else {
      alert("All mandatory fields must be filled to continue");
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
        <label>Color</label>
        <input
          type="text"
          name="color"
          value={input.color}
          onChange={(e) => handleChange(e)}
        />
        <label>Brand</label>
        <input
          type="text"
          name="brand"
          value={input.brand}
          onChange={(e) => handleChange(e)}
        />
        <label>Model</label>
        <input
          type="text"
          name="model"
          value={input.model}
          onChange={(e) => handleChange(e)}
        />
        <label>Cylinder</label>
        <input
          type="text"
          name="cylinder"
          value={input.cylinder}
          onChange={(e) => handleChange(e)}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
