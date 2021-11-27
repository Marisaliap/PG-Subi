import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserByName } from "../actions";
import { Link } from "react-router-dom";


export default function SearchUserByName() {
    const dispatch = useDispatch();
    const [ name, setName ] = useState(""); //lo que está tipeando el usuario es mi estado local name
    
    function handleInput(e) {
        e.preventDefault();
        setName(e.target.value)  //el value del input que ingresa por búsqueda va a setear el value del estado
        console.log(name)    //probar
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getUserByName(name));
        setName("")
    }

    return (
        <div> 
            <input type="text" value={name} placeholder="Find user..." onChange={(e) => handleInput(e)} />
            <button type="submit" onClick={(e) => handleSubmit(e)} ><Link to="/users">Search</Link> </button>
        </div>
    )
}
