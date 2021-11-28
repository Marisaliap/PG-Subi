import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Sass/Styles/Home.scss';
//import SearchBar from './SearchBar';

export default function Home() {
  

  
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
      <Link to="/route-list">Route List</Link>
      
     

      <Link to="/">
        <button className="buttonBlue">Back</button>
      </Link>
    </div>
  );
}
