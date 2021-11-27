import React from "react";
import { useEffect } from 'react';
import Post from "./Post";
import { getUserDetail } from "../actions";
import { useDispatch, useSelector } from 'react-redux';


export default function UserDetails(props){
const dispatch = useDispatch()
const [userDetail] = useSelector((state) => state)

useEffect (() => {
dispatch(getUserDetail(props.match.params.id)) 
}, [dispatch, props.match.params.id])


// falta condicion de pago para mostrar toda la info o primeara parte
{
  return (
    <>
      <div>
        { userDetail.length > 0 ? 
        <div>
        <h1>Users Data</h1>
        <img src={userDetail[0].photo} alt="Img not found" />
        <h2>{userDetail[0].lastName}</h2>
        <h2>{userDetail[0].email}</h2>
        <h2>{userDetail[0].name}</h2>
        <h2>{userDetail[0].telephone}</h2>
        <h2>{userDetail[0].facebook}</h2>
        <h2>{userDetail[0].instagram}</h2>
        <h2>{userDetail[0].province}</h2>
        <h2>{userDetail[0].city}</h2>
        <h2>{userDetail[0].street}</h2>
        <h2>{userDetail[0].genre}</h2>
        <h2>{userDetail[0].age}</h2>
        <h2>{userDetail[0].about}</h2>
        <h2>{userDetail[0].genre}</h2>
        <h2>{userDetail[0].calification}</h2>
      <div>
        <Post/>
      </div>
      </div> : <p> Loading...</p>
      }
      </div>
    </>
  )
}
}
