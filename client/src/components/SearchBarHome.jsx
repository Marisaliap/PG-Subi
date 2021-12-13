import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRouteFromDb, getSearchParams, getSuggestions, getSuggestions2 } from '../actions';
import { NavLink, useHistory } from 'react-router-dom';
import '../Sass/Styles/SearchBarHome.scss';
import '../Sass/Styles/App.scss';
import { FormattedMessage } from 'react-intl';
import { BsPersonFill } from 'react-icons/bs';

let inputs = { Origin: '', Destination: '' };
let info = { pasajeros: 1, date: '' };

let dateTime = new Date().toJSON().slice(0, 10).replace(/-/g, "-");

const validateInputs = (input) => {
  const errors = {};
  let inputs = Object.keys(input);
  for (let i = 0; i < inputs.length; i++) {
    if (!input[inputs[i]]) {
      errors[inputs[i]] = inputs[i] + ' is required.';
    }
  }
  return errors;
};
const validateInfo = (routeInfo) => {
  const errors = {};
  let info = Object.keys(routeInfo);

  for (let i = 0; i < info.length; i++) {
    if (!routeInfo[info[i]]) {
      errors[info[i]] = info[i] + ' is required.';
    }
  }
  return errors;
};

export default function SearchBarHome() {
  const cities = useSelector((state) => state.suggestions1);
  const cities2 = useSelector((state) => state.suggestions2);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({ validations: {} });

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
  const history = useHistory()
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
    info.date.length > 1;

  function handleSubmit(e) {
    e.preventDefault();

    if (checkAllInfo) {
      dispatch(
        getRouteFromDb(
          cities[0].name,
          cities2[0].name,
          info.date.split('-').reverse().join('-'),
          info.pasajeros
        )
      );
      dispatch(
        getSearchParams(
          cities[0].name,
          cities2[0].name,
          info.date.split('-').reverse().join('-'),
          info.pasajeros
        )
      )
      history.push(`/route-list/${info.pasajeros}`)
    }
    inputs = { Origin: '', Destination: '' };
    info = { pasajeros: 1, date: '' };
  }

  return (
    <form className="searchBar">
      <div></div>
      <FormattedMessage id="searchBarHome.origin" defaultMessage="Origin">
        {(placeholder) => (
          <input
            type="text"
            list="cities"
            onChange={inputHandleChange}
            name="Origin"
            placeholder={placeholder}
            className="searchBarInputs"
          />
        )}
      </FormattedMessage>

      <hr />

      <datalist id="cities">
        {cities &&
          cities.map(
            (city) =>
              city.name !== inputs.Origin && <option>{city.name}</option>
          )}
      </datalist>
      {/* <p>{validations && validations.Origin}</p> */}
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
            className="searchBarInputs"
          />
        )}
      </FormattedMessage>

      <hr />

      <datalist id="cities2">
        {cities2 &&
          cities2.map(
            (city) =>
              city.name !== inputs.Destination && <option>{city.name}</option>
          )}
      </datalist>
      {/* <p>{validations && validations.Destination}</p> */}
      <div className="dateAndSeatsContainer">
        <input
          type="date"
          name="date"
          min="2021-11-28"
          onChange={handleChange}
          className="dateAndSeatsSelectors"
        />
        {/* <p>{validations && validations.date}</p> */}

        <hr className="dateSeatsDivider" />

        <select
          name="pasajeros"
          onChange={handleChange}
          id="pasajeros"
          className="dateAndSeatsSelectors"
          title="Minimum amount of free seats to search"
        >
          <option value="1">1 Passenger</option>
          <option value="2">2 Passengers</option>
          <option value="3">3 Passengers</option>
          <option value="4">4 Passengers</option>
          <option value="5">5 Passengers</option>
          <option value="6">6 Passengers</option>
        </select>
        {/* <label for="pasajeros">
          <BsPersonFill />
        </label> */}
      </div>

      <hr />

      {checkAllInfo ? (
        <button
          onClick={handleSubmit}
          className="button"
          disabled={checkInfo.length !== 2 && checkInputs.length !== 2}
        >
          <NavLink
            to={`/route-list/${info.pasajeros}`}
            style={{
              textDecoration: ' none',
              width: '60px',
              color: 'white',
            }}
          >
            Search
          </NavLink>
        </button>
      ) : (
        <button className="button" disabled="true">
          <FormattedMessage
            id="searchBarHome.searchButton"
            defaultMessage=" Search"
          />
        </button>
      )}
    </form>
  );
}
