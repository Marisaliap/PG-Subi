import React from "react";
import { useState, useEffect } from "react";

export default function FormCar() {
  const [error, setError] = useState();
  const [input, setInput] = useState({
    patent: "",
    color: "",
    brand: "",
    model: "",
    cylinder: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(postUser(input));
      setInput({
        patent: "",
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
      <form>
        <label>Patent</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        <label>Color</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        <label>Brand</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        <label>Model</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        <label>Cylinder</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
