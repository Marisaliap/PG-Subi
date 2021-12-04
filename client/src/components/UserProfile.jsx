import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useEffect } from "react";
import { getUserDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "../Sass/Styles/UserDetails.scss";
import CardFullUser from "./CardFullUser";

export default function UserProfile() {
  const dispatch = useDispatch()

    const userInfo = useSelector(state => state.user)
    const { user, isAuthenticated } = useAuth0();
    
    useEffect(() => {
    dispatch(getUserDetail(user.email));
  }, [dispatch, user.email]);
    

    
      return <div style={{display:'flex'}}>
       { user && isAuthenticated ? (
            <CardFullUser
              name={userInfo.name}
              lastName={userInfo.lastName}
              email={userInfo.email}
              genre={userInfo.genre}
              photo={userInfo.photo}
              age={userInfo.age}
              about={userInfo.about}
              telephone={userInfo.telephone}
              facebook={userInfo.facebook}
              instagram={userInfo.instagram}
              street={userInfo.street}
              city={userInfo.city}
              province={userInfo.province}
              calification={userInfo.calification}
            />) : <span>logueate pa</span>
        }
        
        </div>
    
}
