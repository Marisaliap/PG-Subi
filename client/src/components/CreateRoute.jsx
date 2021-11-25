import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";
import SearchBarPostRuta from "./SearchBarPostRuta";

export default function CreateRoute() {
  return (
    <>
      <SearchBarPostRuta />
        <div>
        <input type="date" /> 
        </div>
        <div>
            <label for="pasajeros">Seats available:</label>
            <select name="pasajeros" id="pasajeros">
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select>
        </div>
      <div className={styles.landingpage}>
        <h1 className={styles.title}>Crear una ruta </h1>
        <div className={styles.back}>
          <Link to="/">
            <button className={styles.backButton}>Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}
