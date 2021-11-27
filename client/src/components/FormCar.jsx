import React from "react";
import { useState, useEffect } from "react";

export default function FormCar() {


    const [error, setError] = useState();
    const [input, setInput]= useState({
        patent:"",
        color:"",
        brand:"",
        model:"",
        cylinder:"",        
    })


    function handleChange(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
    }

  return (
    <div>
      <form>
        <label>Patent</label>
        <imput type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e)}/>
        <label>Color</label>
        <imput type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e)}/>
        <label>Brand</label>
        <imput type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e)}/>
        <label>Model</label>
        <imput type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e)}/>
        <label>Cylinder</label>
        <imput type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e)}/>
        <button className="button" type="submit">
            Submit
          </button>
      </form>
    </div>
  );
}
