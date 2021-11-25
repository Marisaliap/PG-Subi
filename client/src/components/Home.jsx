import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import RouteDetails from "./RouteDetails";

export default function Home() {

const dispatch = useDispatch()   
const allRoutes = useSelector((state) => state.route) 

function handleClick(e) {
    e.preventDefault();
}
    return (
        <div className={styles.home}>
        <div className={styles.searchContainer}>
    <div>
         </div>
         <div>
        <Link to="/route"><button className={styles.createButton} >Post a Trip</button></Link>
        </div>
    </div>
    <hr className={styles.line}/>
            <h1> SUBI QUE TE LLEVO</h1>
            <Link to="/route">Post a Trip</Link>
            <Link to="/register">Register as User</Link>
            <button onClick={e => {handleClick(e)}}> Refresh Routes </button>
            <div> 
                <select> 
                    <option value= "asc">Ascendente</option>
                    <option value= "desc">Descendente</option>
                </select>
                <select> 
                    <option value= "opcion1">Opción Uno</option>
                    <option value= "opcion2">Opción Dos</option>
                    <option value= "opcion3">Opción Tres</option>
                    <option value= "opcion4">Opción Cuatro</option>
                </select>
            </div>
            {<div className={styles.mainContainer}>
                { allRoutes?.map( el => {
                    return (
                        <div className={styles.dogContainer}>
                             <Link className={styles.a} to={"/maps/"  + el.name }>
                    <RouteDetails name={el.name} image={el.image}/>
                    </Link>
                    </div>
                    );
                })}
            </div>}
            <div className={styles.back}>
        <Link to="/"><button className={styles.backButton} >Back</button></Link>
        </div>
        </div>
        
    )
}


