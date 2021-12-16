import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoute,
  getSuggestions,
  getSuggestions2,
  RoutePostInfo,
  allRoutes,
} from "../actions";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/App.scss";
import "../Sass/Styles/SearchBarPostRuta.scss";
import { FormattedMessage } from "react-intl";

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
  const user = useSelector((state) => state.userpro);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({ validations: {} });
  const [restrictions, setRestrictions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  let dateTime = new Date().toJSON().slice(0, 10).replace(/-/g, "-");

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

  const { validations } = errors;

  const checkInputs = Object.values(inputs);
  const checkInfo = Object.values(info);

  function handleChange(e) {
    info[e.target.name] = e.target.value;
    const validations = validateInfo(info);

    setErrors(() => {
      const errorState = { ...errors, validations };
      return errorState;
    });
  }

  const checkAllInfo =
    cities &&
    cities.length > 0 &&
    inputs.Origin === cities[0].name &&
    cities2 &&
    cities2.length > 0 &&
    inputs.Destination === cities2[0].name &&
    info.date.length > 1 &&
    info.hours.length > 1;

  function handleSubmit(e) {
    e.preventDefault();
    info.restrictions = restrictions;
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
      info = { pasajeros: 1, date: "", hours: "", restrictions: [] };
      dispatch(allRoutes());
    }
    history.push("/route/finish");
  }

  function handleRestrictions(e) {
    if (!restrictions.includes(e.target.value)) {
      setRestrictions([...restrictions, e.target.value]);
    }
  }
  function deleteRestrictions(e) {
    let filter = restrictions.filter(
      (restriction) => restriction !== e.target.value
    );
    setRestrictions(filter);
  }

  return (
    <div className="searchBarPostRuta">
      <div className="postRouteForm">
        <h1>
          {" "}
          <FormattedMessage
            id="searchBarPostRuta.searchTitle"
            defaultMessage="Where do you want to go?"
          />
        </h1>
        <FormattedMessage id="searchBarHome.origin" defaultMessage="Origin">
          {(placeholder) => (
            <input
              type="text"
              list="cities"
              onChange={inputHandleChange}
              name="Origin"
              placeholder={placeholder}
              className="searchbar"
            />
          )}
        </FormattedMessage>

        <datalist id="cities">
          {cities &&
            cities.map(
              (city) =>
                city.name !== inputs.Origin && <option>{city.name}</option>
            )}
        </datalist>
        <p>{validations && validations.Origin}</p>

        <FormattedMessage
          id="searchBarHome.destination"
          defaultMessage="Destination"
        >
          {(placeholder) => (
            <input
              type="text"
              list="cities2"
              onChange={inputHandleChange}
              name="Destination"
              placeholder={placeholder}
              className="searchbar"
            />
          )}
        </FormattedMessage>

        <datalist id="cities2">
          {cities2 &&
            cities2.map(
              (city) =>
                city.name !== inputs.Destination && <option>{city.name}</option>
            )}
        </datalist>
        <p>{validations && validations.Destination}</p>
        <div>
          <input
            className="searchbar"
            type="date"
            name="date"
            min={dateTime}
            onChange={handleChange}
          />
          <p>{validations && validations.date}</p>
        </div>
        <div>
          <input
            className="searchbar"
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
        <div className="restrictionsbox">
          <div className="selectContainer">
            <select
              name="pasajeros"
              onChange={handleChange}
              className="restrictions"
              id="pasajeros"
              defaultValue="1"
            >
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
              className="restrictions"
            >
              <FormattedMessage id="searchBarPostRuta.preferences">
                {(messege) => (
                  <option disabled selected value="1">
                    {messege}
                  </option>
                )}
              </FormattedMessage>
              <FormattedMessage id="searchBarPostRuta.petsaloowed">
                {(messege) => <option value="petsAllowed">{messege}</option>}
              </FormattedMessage>
              <FormattedMessage id="searchBarPostRuta.smokingallowed">
                {(messege) => <option value="smokersAllowed">{messege}</option>}
              </FormattedMessage>
              <FormattedMessage id="searchBarPostRuta.foodallowed">
                {(messege) => <option value="foodAllowed">{messege}</option>}
              </FormattedMessage>
              <FormattedMessage id="searchBarPostRuta.2intheback">
                {(messege) => (
                  <option value="twoMaxInTheBack">{messege}</option>
                )}
              </FormattedMessage>
              <FormattedMessage id="searchBarPostRuta.kidsallowed">
                {(messege) => <option value="kidsAllowed">{messege}</option>}
              </FormattedMessage>
              {user.genre === "Female" ? (
                <FormattedMessage id="searchBarPostRuta.onlywomen">
                  {(messege) => <option value="onlyWomen">{messege}</option>}
                </FormattedMessage>
              ) : (
                ""
              )}
            </select>
          </div>
          <div style={{ marginTop: "1rem" }}>
            {restrictions.includes("petsAllowed") && (
              <button
                className="buttonx"
                value="petsAllowed"
                onClick={(e) => deleteRestrictions(e)}
              >
                <FormattedMessage
                  id="searchBarPostRuta.petsaloowedX"
                  defaultMessage="Pets Allowed X"
                />
              </button>
            )}
            {restrictions.includes("smokersAllowed") && (
              <button
                className="buttonx"
                value="smokersAllowed"
                onClick={(e) => deleteRestrictions(e)}
              >
                <FormattedMessage
                  id="searchBarPostRuta.smokingallowedX"
                  defaultMessage="Smoking Allowed X"
                />
              </button>
            )}
            {restrictions.includes("foodAllowed") && (
              <button
                className="buttonx"
                value="foodAllowed"
                onClick={(e) => deleteRestrictions(e)}
              >
                <FormattedMessage
                  id="searchBarPostRuta.foodallowedX"
                  defaultMessage="Food Allowed X"
                />
              </button>
            )}
            {restrictions.includes("twoMaxInTheBack") && (
              <button
                className="buttonx"
                value="twoMaxInTheBack"
                onClick={(e) => deleteRestrictions(e)}
              >
                <FormattedMessage
                  id="searchBarPostRuta.2inthebackX"
                  defaultMessage="Max. 2 in the back X"
                />
              </button>
            )}
            {restrictions.includes("kidsAllowed") && (
              <button
                className="buttonx"
                value="kidsAllowed"
                onClick={(e) => deleteRestrictions(e)}
              >
                <FormattedMessage
                  id="searchBarPostRuta.kidsallowedX"
                  defaultMessage="Kids Allowed X"
                />
              </button>
            )}
            {restrictions.includes("onlyWomen") && (
              <button
                className="buttonx"
                value="onlyWomen"
                onClick={(e) => deleteRestrictions(e)}
              >
                <FormattedMessage
                  id="searchBarPostRuta.onlywomenX"
                  defaultMessage="Only Women X"
                />
              </button>
            )}
          </div>
        </div>

        <pre>
          <div className="botonPostRuta">
            <NavLink to="/home">
              <button className="buttonBlue">
                <FormattedMessage id="userDetails.back" defaultMessage="Back" />
              </button>
            </NavLink>
          </div>
          <div className="botonPostRuta">
            {checkAllInfo ? (
              // <NavLink
              //   to="/route/finish"
              //   style={{
              //     textDecoration: ' none',
              //     width: '60px',
              //     color: 'white',
              //     padding: '60px',
              //   }}
              // >
              <button
                onClick={handleSubmit}
                className="button"
                disabled={checkInfo.length !== 3 && checkInputs.length !== 2}
              >
                <FormattedMessage
                  id="searchBarPostRuta.preview"
                  defaultMessage="Preview Trip"
                />
              </button>
            ) : (
              // {/* </NavLink> */}
              <button
                className="button"
                style={{ backgroundColor: "grey" }}
                disabled
              >
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
