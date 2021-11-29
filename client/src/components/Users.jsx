import React from "react";
import { useSelector } from 'react-redux';
import CardUser  from "./CardUser";

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
