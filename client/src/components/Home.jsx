import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { getRoutes, getCities } from "../actions"; */
import styles from "../styles/Home.module.css";
import RouteDetails from "./RouteDetails";
import SearchBar from "../components/SearchBar"


export default function Home() {

const dispatch = useDispatch()   //declaro una constante para despachar mis acciones
const allRoutes = useSelector((state) => state.routes) // me traigo desde el reducer el estado routes donde están todas las rutas 

/* useEffect(() => {
    dispatch(getRoutes());
},[])

useEffect(() => {
    dispatch(getCities());
},[]) */

function handleClick(e) {
    e.preventDefault();
   /*  dispatch(getRoutes()); */
}
    return (
        <div className={styles.home}>
            <div className={styles.searchContainer}>
    <div>
        {/*  <SearchBar />  */}
         </div>
         <div>
        <Link to="/route"><button className={styles.createButton} >Post a Trip</button></Link>
        </div>
    </div>
    <hr className={styles.line}/>
    <div className={styles.title}>
            <h1> SUBI QUE TE LLEVO</h1>
            </div>
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


