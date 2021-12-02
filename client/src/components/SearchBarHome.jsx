import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRouteFromDb, getSuggestions, getSuggestions2 } from "../actions";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/SearchBarHome.scss";
import "../Sass/Styles/App.scss";

let inputs = { Origin: "", Destination: "" };
let info = { pasajeros: 1, date: "" };

const validateInputs = (input) => {
  const errors = {};
  let inputs = Object.keys(input);
  for (let i = 0; i < inputs.length; i++) {
    if (!input[inputs[i]]) {
      errors[inputs[i]] = inputs[i] + " is required.";
    }
  }
  return errors;
};
const validateInfo = (routeInfo) => {
  const errors = {};
  let info = Object.keys(routeInfo);

  for (let i = 0; i < info.length; i++) {
    if (!routeInfo[info[i]]) {
      errors[info[i]] = info[i] + " is required.";
    }
  }
  return errors;
};

export default function SearchBarHome() {
  const cities = useSelector((state) => state.suggestions1);
  const cities2 = useSelector((state) => state.suggestions2);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({ validations: {} });
  console.log(cities);
  function inputHandleChange(e) {
    inputs[e.target.name] = e.target.value;
    dispatch(getSuggestions(inputs.Origin));
    dispatch(getSuggestions2(inputs.Destination));
    const validations = validateInputs(inputs);
    console.log(validations, "soy input");
    setErrors(() => {
      const errorState = { ...errors, validations };
      return errorState;
    });
    console.log(errors);
  }

  // const { validations } = errors;

  const checkInputs = Object.values(inputs);
  const checkInfo = Object.values(info);

  // const checkValidations = Object.keys(validations)
  function handleChange(e) {
    info[e.target.name] = e.target.value;
    const validations = validateInfo(info);

    setErrors(() => {
      const errorState = { ...errors, validations };
      return errorState;
    });
  }

  const checkAllInfo =
    inputs.Origin.length > 6 &&
    inputs.Destination.length > 6 &&
    info.date.length > 1;

  function handleSubmit(e) {
    e.preventDefault();

    if (checkAllInfo) {
      dispatch(
        getRouteFromDb(
          cities[0].name,
          cities2[0].name,
          info.date.split("-").reverse().join("-"),
          info.pasajeros
        )
      );
    }
  }

  return (
    <div className="searchBarPostHome">
      <h1>Where do you want to go?</h1>
      <form className="postRouteForm">
        <input
          type="text"
          list="cities"
          onChange={inputHandleChange}
          name="Origin"
          placeholder="Origin"
          className="searchbar"
        />

        <datalist id="cities">
          {cities && cities.map((city) => <option>{city.name}</option>)}
        </datalist>
        {/* <p>{validations && validations.Origin}</p> */}

        <input
          type="text"
          list="cities2"
          onChange={inputHandleChange}
          name="Destination"
          placeholder="Destination"
          className="searchbar"
        />

        <datalist id="cities2">
          {cities2 && cities2.map((city) => <option>{city.name}</option>)}
        </datalist>
        {/* <p>{validations && validations.Destination}</p> */}
        <div>
          <input
            type="date"
            name="date"
            min="2021-11-28"
            onChange={handleChange}
          />
          {/* <p>{validations && validations.date}</p> */}
        </div>
        <div>
          <label for="pasajeros"></label>
          <select
            name="pasajeros"
            onChange={handleChange}
            id="pasajeros"
            className="passengers"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <pre>
          <div>
            {checkAllInfo ? (
              <button
                onClick={handleSubmit}
                className="button"
                disabled={checkInfo.length !== 2 && checkInputs.length !== 2}
              >
                <NavLink
                  to="/routes-found"
                  style={{
                    textDecoration: " none",
                    width: "60px",
                    color: "white",
                  }}
                >
                  Search
                </NavLink>
              </button>
            ) : (
              <button className="button" disabled="true">
                Search
              </button>
            )}
          </div>
        </pre>
      </form>
    </div>
  );
}
