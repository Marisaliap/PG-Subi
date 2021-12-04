import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserByName } from "../actions";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/SearchUserByName.scss";
import {FormattedMessage} from 'react-intl';


export default function SearchUserByName() {
  const dispatch = useDispatch();
  const [name, setName] = useState(''); //lo que está tipeando el usuario es mi estado local name

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value); //el value del input que ingresa por búsqueda va a setear el value del estado
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getUserByName(name));
    setName('');
  }

    return (
        <div className="SearchUserByName"> 
        <FormattedMessage id="searchUserByName.placeholder" defaultMessage=" 🔍  Find user...">
    {placeholder=>  
            <input type="text" value={name} placeholder={placeholder} onChange={(e) => handleInput(e)} />
        }
    </FormattedMessage>
    <button type="submit" onClick={(e) => handleSubmit(e)} > <NavLink className="Navlink" to="/users">
              <FormattedMessage
							id="searchUserByName.search"
							defaultMessage="Search"
						/></NavLink> </button>
        </div>
    )
}
