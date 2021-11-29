import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoute,
  getSuggestions,
  getSuggestions2,
  RoutePostInfo,
} from "../actions"
import { NavLink } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";
import "../Sass/Styles/Home.scss";

let inputs = {Origin: '' , Destination: ''};
let info = {pasajeros: 1, date: '', hours: ''}

const validateInputs = (input) => {
  const errors = {}
  let inputs = Object.keys(input)
  for (let i = 0; i < inputs.length; i++) {
    if (!input[inputs[i]]) {
      errors[inputs[i]] = inputs[i] + ' is required.'
    }
  }
  return errors
}
const validateInfo = (routeInfo) => {
  const errors = {}
  let info = Object.keys(routeInfo)
 
  for (let i = 0; i < info.length; i++) {
    if (!routeInfo[info[i]]) {
      errors[info[i]] = info[i] + ' is required.'
    }
  }
  return errors
}

export default function SearchBar() {

  const cities = useSelector((state) => state.suggestions1);
  const cities2 = useSelector((state) => state.suggestions2);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({validations: {}})

  function inputHandleChange(e) {
    inputs[e.target.name] = e.target.value;
    dispatch(getSuggestions(inputs.Origin));
    dispatch(getSuggestions2(inputs.Destination));
    const validations = validateInputs(inputs)
    console.log(validations, 'soy input')
    setErrors(() => {
      const errorState = {...errors, validations} 
      return errorState
  })
    console.log(errors)
  }

  const { validations } = errors

  const checkInputs = Object.values(inputs)
  const checkInfo = Object.values(info)

  // const checkValidations = Object.keys(validations)
  function handleChange(e) {
    info[e.target.name] = e.target.value;
    const validations = validateInfo(info)
    
    setErrors(() => {
      const errorState = {...errors, validations} 
      return errorState
  })
  
  }

const checkAllInfo = inputs.Origin.length > 6 && inputs.Destination.length > 6  && info.date.length > 1 && info.hours.length > 1 
  function handleSubmit(e) {
    e.preventDefault();

      if (checkAllInfo ) {
        dispatch(getRoute(cities[0].coordinates[0], cities[0].coordinates[1],cities2[0].coordinates[0], cities2[0].coordinates[1]));
       
        dispatch(RoutePostInfo(info))
       inputs = {Origin: '' , Destination: ''};
        info = {pasajeros: 1, date: '', hours: ''}
      }
    
 
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
          <p>{validations && validations.Origin}</p>
   

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
        <p>{validations && validations.Destination}</p>
        <div>
        <input type="date" name='date' min="2021-11-28" onChange={handleChange} /> 
        <p>{validations && validations.date}</p>
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
        <input type="time" id="hours" name="hours"
       min="09:00" max="18:00" required onChange={handleChange} />
       <p>{validations && validations.hours}</p>
        </div>
        <div className={styles.back}>

          <NavLink to="/">
            <button className={styles.backButton}>Back</button>
          </NavLink>
            
          
           
             <div>
            
          {checkAllInfo ? <button onClick={handleSubmit}  className='button' disabled={checkInfo.length !== 3 && checkInputs.length !== 2}>
          <NavLink to='/route/finish' style={{textDecoration:' none', width:'60px', color:'white'}}>
           Submit
          </NavLink>
           </button> : <button className='button' disabled='true'>Submit</button>}

            
             </div>
          
         
             
        </div>
      </form>
     
    </div>
  );
}
