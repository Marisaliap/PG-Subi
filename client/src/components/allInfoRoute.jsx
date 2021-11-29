import React from "react";
//import { useDispatch, useSelector } from 'react-redux';
//import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import  CardRoute  from "./CardRoute.jsx";
import  CardUser  from "./CardUser.jsx";
import NavBarFiltre from "./NavBarFiltre.jsx";


export default function AllInfoRoute() {
  
  // const dispatch = useDispatch();
//  const user = useSelector((state) => state.allRoutes);

//  useEffect (() => {
//   dispatch(getUserDetail()) 
//   }, [dispatch])

  const user = 
   {
      origin: [
          "4565456",
          "4564546"
      ],
      destiny: [
          "45664456",
          "5664545"
      ],
      date: "6456",
      hours: 5745,
      place: 2,
      id: "aef0124a-0337-4cd2-bd97-f54160e961cb",
      users: [
          {
              name: "pepe ramiro",
              photo: "dkjas5df",
              lastName: "fernndez",
              genre: "M2-72",
              age: 323,
              calification: 0,
              cars: [
                  {
                      patent: "897-mk",
                      color: "black",
                      brand: "peugeot",
                      model: "206"
                  }
              ],
            UserRoutes: {
                  userId: "d873c6f7-e738-415a-a108-63b1fa5697d1",
                  routeId: "aef0124a-0337-4cd2-bd97-f54160e961cb"
              }
          }
      ]
  }

  
  function handleClick(e) {
    e.preventDefault();
  }
  <NavBarFiltre />
  
  
  
  return (
    <div>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {" "}
        Refresh Routes{" "}
      </button>

    { user?
          <div>
            <Link>
              <CardRoute
                origin={user.origin[0]}
                destiny={user.destiny[0]}
                date={user.date}
                hours={user.hours}
                place={user.place}
              />
              <CardUser
                photo={user.users[0].photo}
                name={user.users[0].name}
                calification={user.users[0].calification}
              />
            </Link>
          </div>
    :(<h3>Loading...</h3>)}
    </div>
  );
}
