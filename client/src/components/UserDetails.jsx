import React from "react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Post from "./Post"; 
import { getUserDetail } from "../actions";
import { useDispatch, useSelector } from 'react-redux';


export default function UserDetails(props){
const dispatch = useDispatch()
const user = useSelector((state) => state.user)
console.log(user)


useEffect (() => {
dispatch(getUserDetail(props.match.params.id)) 
}, [dispatch, props.match.params.id])


// falta condicion de pago para mostrar toda la info o primeara parte

  return (
    <>
      <div>
        { user ? 
        <div>
        <h1>User Info</h1>
        <img src={user.photo} alt="Img not found" />
        <h2> Name: {user.name}</h2>
        <h2> Last Name: {user.lastName}</h2>
        <h2> Genre: {user.genre}</h2>
        <h2> Age: {user.age}</h2>
        <h2> Phone number: {user.telephone}</h2>
        <h2> Email: {user.email}</h2>
        <h2> Street: {user.street}</h2>
        <h2> City: {user.city}</h2>
        <h2> State: {user.province}</h2>
        <h2> Facebook: {user.facebook}</h2>
        <h2> Instagram: {user.instagram}</h2>
        <h2> About: {user.about}</h2>
        <h2> Calification: {user.calification}</h2>
      {<div>
        <Post/>
      </div>}
      </div> : <p> Loading...</p>
      }
      <Link to="/home">
        <button className="buttonBlue">Back</button>
      </Link>
      </div>
    </>
  )
}

