import React from "react";
import { Link } from 'react-router-dom'; 
import styles from "../styles/LandingPage.module.css";


export default function CreateRoute() {
    return (
      <div className={styles.landingpage}>  
            <h1  className={styles.title}>Crear una ruta </h1>
        <div className={styles.back}>
        <Link to="/"><button className={styles.backButton} >Back</button></Link>
        </div>
        </div> 
    )
} 