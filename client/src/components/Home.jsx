import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Home() {
    return (
        <div> 
            <h1> Hola Mundo!</h1>
            <Link to="/"> Acá vamos a algún lugar  </Link>
        </div>
    )
}

