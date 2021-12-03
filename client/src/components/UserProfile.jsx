import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import CardCar from "./CardCar";
import { getUserDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import {
  BsFillTelephoneFill,
  BsGenderFemale,
  BsGenderMale,
  BsInstagram,
  BsFacebook,
  BsStarFill,
  BsMap,
  BsEnvelope,
} from "react-icons/bs";
import "../Sass/Styles/UserDetails.scss";
import img from "../img/photoDefault.jpg";
import CardFullUser from "./CardFullUser";

let editInfo = false
export default function UserProfile() {
  const dispatch = useDispatch()
    const [input, setInput] = useState({})
    const userInfo = useSelector(state => state.user)
    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
      dispatch(getUserDetail(user.email));
    }, []);

 
  const { user, isAuthenticated } = useAuth0();



  function handleClick (e) {
    editInfo = !editInfo
    console.log(editInfo)
  }
  function handleClick2 (e) {
    if (boolean === false){
      setBoolean(true)
    } else {
      setBoolean(false)
    }
    
  }
  function handleChange (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
    function genderIcon(gender) {
        if (gender === "Male") {
          return <BsGenderMale className="maleGender" />;
        } else if (gender === "Female") {
          return <BsGenderFemale className="femaleGender" />;
        }
      }
      
    return (
        <div> 
           <button onClick={e => handleClick2(e)}>edit</button> 
           {editInfo === false ? <>
          <div className="UserDetails">
            <img src={userInfo.img} alt="User Image" style={{ width: "250px" }} />
            <h2>
              {userInfo.name} {userInfo.lastName} {genderIcon(userInfo.genre)}
            </h2>
            <p className="age">{userInfo.age} years old</p>
            <p className="about">{userInfo.about}</p>
            </div>
            < br/>
            <div className="moreInfo">
              <h4>
                <BsStarFill className="icon" /> {userInfo.calification} / 5
              </h4>
              <h4>
                <BsFillTelephoneFill className="icon" /> {userInfo.telephone}
              </h4>
              <h4>
                <BsEnvelope className="icon" /> {userInfo.email}
              </h4>
              <h4>
                <BsFacebook className="icon" /> {userInfo.facebook}
              </h4>
              <h4>
                <BsInstagram className="icon" /> {userInfo.instagram}
              </h4>
              <h4>
                <BsMap className="icon" /> {userInfo.street}, {userInfo.city},
                {userInfo.province}
              </h4>
            </div>
          </> : <div>holis</div>
         
          
          }
        </div>
    )
}
