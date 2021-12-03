import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserByName } from "../actions";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/SearchUserByName.scss";


export default function SearchUserByName() {
  const dispatch = useDispatch();
  const [name, setName] = useState(''); //lo que está tipeando el usuario es mi estado local name

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value); //el value del input que ingresa por búsqueda va a setear el value del estado
   // console.log(name); //probar
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getUserByName(name));
    setName('');
  }

    return (
        <div className="SearchUserByName"> 
            <input type="text" value={name} placeholder=" 🔍  Find user..." onChange={(e) => handleInput(e)} />
            <button type="submit" onClick={(e) => handleSubmit(e)} > <NavLink className="Navlink" to="/users"> Search</NavLink> </button>
        </div>
    )
}
