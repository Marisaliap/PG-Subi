import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import CardCar from "./CardCar";
import { editUser, getUserDetail } from "../actions";
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
import "../Sass/Styles/App.scss";

let editInfo = false
export default function UserProfile() {
  const { user, isAuthenticated } = useAuth0();
  const userInfo = useSelector(state => state.user)
  const [boolean, setBoolean] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDetail(user.email));
  }, []);


 
    const [input, setInput] = useState({
      street: "",
      city: "",
      province: "",
      telephone: "",
      facebook: "",
      instagram: "",
      about: "",
      age: ""
    })

   

 function handleSubmit(e) {
   e.preventDefault()
   dispatch(editUser(userInfo.id, input))

  setInput({
    street: "",
    city: "",
    province: "",
    telephone: "",
    facebook: "",
    instagram: "",
    about: "",
    age: ""
})
}

 function handleChange(e){
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });
 }
 
  function handleClick (e) {
    if (boolean === false){
      setBoolean(true)
    } else {
      setBoolean(false)
    }
    setInput({
      street: userInfo.street,
      city: userInfo.city,
      province:userInfo.province,
      telephone:userInfo.telephone,
      facebook:userInfo.facebook,
      instagram:userInfo.instagram,
      about: userInfo.about,
      age: userInfo.age
    })
    
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
           <button onClick={e => handleClick(e)}>edit</button> 
           {boolean === false ? <>
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
          </> :  
          <div>
          <div className="UserDetails">
            <img src={input.img} alt="User Image" style={{ width: "250px" }} />
            <h2>
              {input.name} {input.lastName} {genderIcon(input.genre)}
            </h2>
            <p className="age">{input.age} years old</p>
            <input type='text'onChange={(e) => handleChange(e)}value={input.age} />
            <p className="about">{input.about}</p>
            <input onChange={(e) => handleChange(e)}type='text'value={input.about}/>
            </div>
            < br/>
            <div className="moreInfo">
              <div className="cadaLinea">
              <h4>
                <BsStarFill className="icon" /> {input.calification} / 5
              </h4>
              </div>
              <div className="cadaLinea">
              <h4>
                <BsFillTelephoneFill className="icon" /> 
              </h4>
              <input onChange={(e) => handleChange(e)}type='text'value={input.telephone}/>
              </div>
              <div className="cadaLinea">
              <h4>
                <BsEnvelope className="icon" /> 
               
              </h4>
              {userInfo.email}
              </div>
              <div className="cadaLinea">
              <h4>
                <BsFacebook className="icon" /> 
              </h4>
              <input onChange={(e) => handleChange(e)}type='text'value={input.facebook}/>
              </div>
              <div className="cadaLinea">
              <h4>
                <BsInstagram className="icon" /> 
              </h4>
              <input onChange={(e) => handleChange(e)}type='text'value={input.instagram}/>
              </div>
              <div className="cadaLinea">
              <h4>
                <BsMap className="icon" />
              </h4>
              <input onChange={(e) => handleChange(e)}type='text'name='street' value={input.street}/> {/*es eSTO*/}
              <input onChange={(e) => handleChange(e)}type='text'value={input.city}/>
              <input onChange={(e) => handleChange(e)}value={input.province}/>
              
              </div>
            </div>
            <button type='submit' onSubmit={e => handleSubmit(e)}></button>
          </div>

          }

        </div>
    )
}
