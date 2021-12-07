import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoute,
  getSuggestions,
  getSuggestions2,
  RoutePostInfo,
} from "../actions";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/App.scss";
import "../Sass/Styles/SearchBarPostRuta.scss";
import {FormattedMessage} from 'react-intl';

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
    setErrors(() => {
      const errorState = { ...errors, validations };
      return errorState;
    });
  }

  let time = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  
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
  }

  const checkAllInfo =
     cities && cities.length > 0 && inputs.Origin === cities[0].name &&
    cities2 && cities2.length > 0 && inputs.Destination === cities2[0].name &&
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
      <div className="postRouteForm">
        <h1> <FormattedMessage
							id="searchBarPostRuta.searchTitle"
							defaultMessage="Where do you want to go?"
						/></h1>
            <FormattedMessage id="searchBarHome.origin" defaultMessage="Origin">
    {placeholder=>
        <input
          type="text"
          list="cities"
          onChange={inputHandleChange}
          name="Origin"
          placeholder={placeholder}
          className="searchbar"
        />}
        </FormattedMessage>

        <datalist id="cities">
          {cities && cities.map((city) => <option>{city.name}</option>)}
        </datalist>
        <p>{validations && validations.Origin}</p>

        <FormattedMessage id="searchBarHome.destination" defaultMessage="Destination">
    {placeholder=>
        <input
          type="text"
          list="cities2"
          onChange={inputHandleChange}
          name="Destination"
          placeholder="Destination"
          className="searchbar"
        />}
        </FormattedMessage>

        <datalist id="cities2">
          {cities2 && cities2.map((city) => <option>{city.name}</option>)}
        </datalist>
        <p>{validations && validations.Destination}</p>
        <div>
          <input
            type="date"
            name="date"
            min={time} //HACER QUE ESTO FILTRE POR FECHA ACTUAL
            onChange={handleChange}
          />
          <p>{validations && validations.date}</p>
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
      <div className='restrictionsbox'>
            <div className='selectContainer'>
              <select name="pasajeros" onChange={handleChange} className = 'restrictions' id="pasajeros">
              <option disabled selected value="1">
                    {" "}
                    Seats Available:  1{" "}
                  </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            
           
              <select
                name="restrictions"
                onChange={handleRestrictions}
                id="restrictions"
                className='restrictions'
              >
              <option disabled selected value="1">
                    {" "}
                    Preferences{" "}
                  </option>
              <option value="petsAllowed">Pets Allowed</option>
              <option value="smokersAllowed">Smoking Allowed</option>
              <option value="foodAllowed">Food Allowed</option>
              <option value="twoMaxInTheBack">Max. 2 in the back</option>
              <option value="kidsAllowed">Kids Allowed</option>
              <option value="onlyWomen">Only Women</option>
              </select>
              </div>
            <div style={{marginTop:'1rem'}}>
              {restrictions.includes("petsAllowed") && <button className='buttonx' value="petsAllowed" onClick={(e) => deleteRestrictions(e)}>Pets Allowed X</button>}
              {restrictions.includes("smokersAllowed") && <button className='buttonx'  value="smokersAllowed" onClick={(e) => deleteRestrictions(e)}>Smoking Allowed X</button>}
              {restrictions.includes("foodAllowed") && <button className='buttonx'  value="foodAllowed" onClick={(e) => deleteRestrictions(e)}>Food Allowed X</button>}
            {  restrictions.includes("twoMaxInTheBack") && <button className='buttonx'  value="twoMaxInTheBack" onClick={(e) => deleteRestrictions(e)}>Max. 2 in the back X</button>}
            {  restrictions.includes("kidsAllowed") && <button className='buttonx'  value="kidsAllowed" onClick={(e) => deleteRestrictions(e)}>Kids Allowed X</button>}
              {restrictions.includes("onlyWomen") && <button className='buttonx'  value="onlyWomen" onClick={(e) => deleteRestrictions(e)}>Only Women X</button>}
              </div>
            
        </div>
        
        <pre>
        <div>
          <NavLink to="/">
            <button className="buttonBlue">
              <FormattedMessage
							id="userDetails.back"
							defaultMessage="Back"
						/></button>
          </NavLink>
        </div>
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
              ><FormattedMessage
							id="searchBarPostRuta.preview"
							defaultMessage="Preview Trip"
						/>
              </NavLink>
            </button>
          ) : (
            <button className="button"  style={{backgroundColor:"grey"}} disabled>
            <FormattedMessage
							id="searchBarPostRuta.preview"
							defaultMessage="Preview Trip"
						/>  
            </button>
          )}
        </div>
       
        </pre>
    </div>
    </div>
  );
}
