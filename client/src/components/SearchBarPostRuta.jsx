import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoute,
  getSuggestions,
  getSuggestions2,
  RoutePostInfo,
} from "../actions";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/SearchBarPostRuta.scss";
import "../Sass/Styles/App.scss";

let inputs = { Origin: "", Destination: "" };
let info = { pasajeros: 1, date: "", hours: "", restrictions: [] };

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

export default function SearchBar() {
  const cities = useSelector((state) => state.suggestions1);
  const cities2 = useSelector((state) => state.suggestions2);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({ validations: {} });
  const [restrictions, setRestrictions] = useState([])


  function inputHandleChange(e) {
    inputs[e.target.name] = e.target.value;
    dispatch(getSuggestions(inputs.Origin));
    dispatch(getSuggestions2(inputs.Destination));
    const validations = validateInputs(inputs);
    //console.log(validations, "soy input");
    setErrors(() => {
      const errorState = { ...errors, validations };
      return errorState;
    });
   //console.log(errors);
  }

  const { validations } = errors;

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
    console.log(info)
  }

  const checkAllInfo =
    inputs.Origin.length > 6 &&
    inputs.Destination.length > 6 &&
    info.date.length > 1 &&
    info.hours.length > 1;

  function handleSubmit(e) {
    e.preventDefault();
    info.restrictions = restrictions
    if (checkAllInfo) {
      dispatch(
        getRoute(
          cities[0].coordinates[0],
          cities[0].coordinates[1],
          cities2[0].coordinates[0],
          cities2[0].coordinates[1]
        )
      );

      dispatch(RoutePostInfo(info));
      inputs = { Origin: "", Destination: "" };
      info = { pasajeros: 1, date: "", hours: "", restrictions:[] };
    }
  }

  function handleRestrictions(e) {
    if(!restrictions.includes(e.target.value)) {
      setRestrictions([
        ...restrictions,
        e.target.value
      ])
    }
  }
  function deleteRestrictions(e) {
    let filter = restrictions.filter(restriction => restriction !== e.target.value)
    setRestrictions(filter)
  }
  return (
    <div className="searchBarPostRuta">
      <form className="postRouteForm">
        <h1>Where do you want to go?</h1>
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
        <p>{validations && validations.Origin}</p>

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
        <p>{validations && validations.Destination}</p>
        <div>
          <input
            type="date"
            name="date"
            min="2021-11-28"
            onChange={handleChange}
          />
          <p>{validations && validations.date}</p>
        </div>

        <div className='selectContainer'>
          <h4 for="pasajeros">Seats Available: </h4>
          <select name="pasajeros" onChange={handleChange} className = 'passengers' id="pasajeros">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className= 'selectContainer'>
          <h4 for="restrictions"> Restrictions: </h4>
          <select
            name="restrictions"
            onChange={handleRestrictions}
            id="restrictions"
            className='restrictions'
          >
          <option value="petsAllowed">Pets Allowed</option>
          <option value="smokersAllowed">Smoking Allowed</option>
          <option value="foodAllowed">Food Allowed</option>
          <option value="twoMaxInTheBack">Max. 2 in the back</option>
          <option value="kidsAllowed">Kids Allowed</option>
          <option value="onlyWomen">Only Women</option>
          </select>
          {restrictions.includes("petsAllowed") && <h5>Pets Allowed <button value="petsAllowed" onClick={(e) => deleteRestrictions(e)}>x</button></h5>}
          {restrictions.includes("smokersAllowed") && <h5 >Smoking Allowed <button value="smokersAllowed" onClick={(e) => deleteRestrictions(e)}>x</button></h5>}
          {restrictions.includes("foodAllowed") && <h5 >Food Allowed <button value="foodAllowed" onClick={(e) => deleteRestrictions(e)}>x</button></h5>}
      {    restrictions.includes("twoMaxInTheBack") && <h5>Max. 2 in the back <button value="twoMaxInTheBack" onClick={(e) => deleteRestrictions(e)}>x</button></h5>}
        {  restrictions.includes("kidsAllowed") && <h5 >Kids Allowed <button value="kidsAllowed" onClick={(e) => deleteRestrictions(e)}>x</button></h5>}
          {restrictions.includes("onlyWomen") && <h5 >Only Women <button value="onlyWomen" onClick={(e) => deleteRestrictions(e)}>x</button></h5>}
        </div>
        <div>
          <input
            type="time"
            id="hours"
            name="hours"
            min="09:00"
            max="18:00"
            required
            onChange={handleChange}
          />
          <p>{validations && validations.hours}</p>
        </div>
        <pre>
          <div>
            {checkAllInfo ? (
              <button
                onClick={handleSubmit}
                className="button"
                disabled={checkInfo.length !== 3 && checkInputs.length !== 2}
              >
                <NavLink
                  to="/route/finish"
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
          <div>
            <NavLink to="/">
              <button className="buttonBlue">Back</button>
            </NavLink>
          </div>
        </pre>
      </form>
    </div>
  );
}
