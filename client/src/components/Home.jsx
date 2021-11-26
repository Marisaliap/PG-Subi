import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Sass/Styles/Home.scss';
import RouteDetails from './RouteDetails';
//import SearchBar from './SearchBar';

export default function Home() {
  const dispatch = useDispatch();
  const allRoutes = useSelector((state) => state.route);

  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="Home">
      <ul className="searchContainer">
        <NavLink className="searchContainerItem" to="/">
          {/* <SearchBar /> */}
          <h3>🔍 Buscar</h3>
        </NavLink>
        <NavLink className="searchContainerItem" to="/route">
          <button className="button">Post a Trip</button>
        </NavLink>
      </ul>
      <hr className="divider" />
      <h1>subiquetellevo</h1>
      <Link to="/register">Register as User</Link>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {' '}
        Refresh Routes{' '}
      </button>
      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select>
          <option value="opcion1">Opción Uno</option>
          <option value="opcion2">Opción Dos</option>
          <option value="opcion3">Opción Tres</option>
          <option value="opcion4">Opción Cuatro</option>
        </select>
      </div>
      {
        <div className="mainContainer">
          {allRoutes?.map((el) => {
            return (
              <div className="dogContainer">
                <Link className="a" to={'/maps/' + el.name}>
                  <RouteDetails name={el.name} image={el.image} />
                </Link>
              </div>
            );
          })}
        </div>
      }

      <Link to="/">
        <button className="buttonBlue">Back</button>
      </Link>
    </div>
  );
}
