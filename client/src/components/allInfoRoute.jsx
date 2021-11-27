import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import  CardRoute  from "./CardRoute.jsx";
import  CardUser  from "./CardUser.jsx";
import  CardCar  from "./CardCar.jsx";

export default function AllInfoRoute() {
  
//   const dispatch = useDispatch();
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
      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select>
          <option value="opcion1">Opción Uno</option>
          <option value="opcion2">Opción Dos</option>
          <option value="opcion3">Opción Tres</option>
          <option value="opcion4">Opción Cuatro</option>
        </select>
      </div>

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
            </Link>
            <Link>
              <CardUser
                photo={user.users[0].photo}
                name={user.users[0].name}
                lastName={user.users[0].lastName}
                genre={user.users[0].genre}
                age={user.users[0].age}
                calification={user.users[0].calification}
              />
            </Link>
            <Link>
              <CardCar
                patent={user.users[0].cars[0].patent}
                brand={user.users[0].cars[0].brand}
                model={user.users[0].cars[0].model}
                color={user.users[0].cars[0].color}
              />
            </Link>
          </div>
    :(<h3>Loading...</h3>)}
    </div>
  );
}
