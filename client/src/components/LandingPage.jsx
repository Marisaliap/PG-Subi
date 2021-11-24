import React from "react";
import { NavLink } from 'react-router-dom'; 
import styles from "../styles/LandingPage.module.css";


export default function LandingPage() {
    return (
      <div className={styles.landingpage}>
          <div className={styles.bkg}>
         <div className={styles.containerAll}>
         <div className={styles.container}>
             <div className={styles.centrador}>
            <h1  className={styles.title}> Subí que te Llevo! &#128662;</h1>
            <div className={styles.buttonPosition}>
            </div>
            <NavLink to ="/home">
                <button className={styles.button}>Ingresar</button>
            </NavLink>
            </div>
            </div>
            </div>
        </div>
        </div> 
    )
} 