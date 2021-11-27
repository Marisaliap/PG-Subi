import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRoute,
  getRoute,
  getSuggestions,
  getSuggestions2,
  matchedCity,
  RoutePostInfo,
} from "../actions"
import { Link } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";


const inputs = {};
const info = {pasajeros: '1'}

export default function SearchBar() {

  const cities = useSelector((state) => state.suggestions1);
  const cities2 = useSelector((state) => state.suggestions2);
  const dispatch = useDispatch();


  function inputHandleChange(e) {
    inputs[e.target.name] = e.target.value;
    dispatch(getSuggestions(inputs.Origin));
    dispatch(getSuggestions2(inputs.Destination));
  }


  function handleChange(e) {
    info[e.target.name] = e.target.value;
    console.log(info)
  }


  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getRoute(cities[0].coordinates[0], cities[0].coordinates[1],cities2[0].coordinates[0], cities2[0].coordinates[1]));
    dispatch(RoutePostInfo(info))
  }

  
  return (
    <div>
      <form>
        <input
          type="text"
          list="cities"
          onChange={inputHandleChange}
          name="Origin"
          placeholder="Origin"
          style={{ width: "400px" }}
        />

        <datalist id="cities">
          {cities && cities.map((city) => (
            <option>{city.name}</option>
          ))}
        </datalist>

        <br />

        <input
          type="text"
          list="cities2"
          onChange={inputHandleChange}
          name="Destination"
          placeholder="Destination"
          style={{ width: "400px" }}
        />

        <datalist id="cities2">
          {cities2 && cities2.map((city) => (
            <option>{city.name}</option>
          ))}
        </datalist>
       
        <div>
        <input type="date" name='date' onChange={handleChange} /> 
        </div>

        <div>
            <label for="pasajeros">Seats available:</label>
            <select name="pasajeros" onChange={handleChange} id="pasajeros">
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select>
        </div>

        <div>
        <div><input name='price' type="text" placeholder='price' onChange={handleChange} /></div>
        </div>
        <div>
        <input type="time" id="hours" name="hours"
       min="09:00" max="18:00" required onChange={handleChange} />
        </div>
      <div className={styles.landingpage}>
        <h1 className={styles.title}>Crear una ruta </h1>
        <div className={styles.back}>

          <Link to="/">
            <button className={styles.backButton}>Back</button>
          </Link>

          <button onClick={handleSubmit} className={styles.back}> 
           <Link to='/route/finish'>
            submit
           </Link>
          </button>
         
        </div>
      </div>
    
      </form>
     
    </div>
  );
}
