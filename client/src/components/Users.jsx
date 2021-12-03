import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CardUser  from "./CardUser";
import {getUserByName} from '../actions/index'
export default function Users() {
const { users } = useSelector(state => state )

  return (
    <div>
      { users.map(user => {
        return(
          <CardUser  
          name = { user.name }
          lastName = { user.lastName }
          genre = { user.genre } 
          age = { user.age } 
          photo = { user.photo }
          calification = { user.calification }
          />
        )
      }) }
    
    </div>
  );
}
