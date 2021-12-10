/* import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser, getUserProfile, getUserAdmin } from '../actions';
import "../../styles/NewUser.css";


export default function NewUser() {
  const dispatch = useDispatch();
  const { userAdmin, id } = useSelector(state => state);
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");

  // ------------------<handles>------------------

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  console.log(input,"input hola")

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "EditPhotoUser");


    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dlwobuyjb/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
  };

  function handleCreateUser(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && validateInputs() === true) {
      dispatch(postUser(input));
      let emailUsuario = input.email;

      setInput({
        name: '',
        lastName: '',
        email: '',
        dni: '',
        genre: '',
        age: '',
        telephone: '',
        street: '',
        city: '',
        province: '',
        facebook: '',
        instagram: '',
        about: '',
        photo: '',
        photoDni: [],
      });

      
      dispatch(getUserDetail(emailUsuario));
      history.push('/home');
     return new swal({
        title: 'Good job!',
        text: 'User created correctly',
        icon: 'success',
        button: 'Aww yiss!',
      });
    } else {
     return new swal({
        title: 'Sorry',
        text: 'All mandatory fields must be filled to continue',
        icon: 'warning',
        button: 'Ok',
      });
    }
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="name"
             placeholder={userAdmin.name}
              value={input.name}
              className="userUpdateInput"
                />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input
                 onChange={(e) => handleChange(e)}
                 type="text"
                 name="lastName"
                placeholder={userAdmin.lastName}
                 value={input.lastName}
                 className="userUpdateInput"
                />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="email"
                 placeholder={userAdmin.email}
                  value={input.email}
                  className="userUpdateInput"

                />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="telephone"
               placeholder={userAdmin.telephone}
                value={input.telephone}
                className="userUpdateInput"
                />
        </div>
        <div className="newUserItem">
        <label>Street</label>
                <input
                 onChange={(e) => handleChange(e)}
                 type="text"
                 name="street"
                placeholder={userAdmin.street}
                 value={input.street}
                 className="userUpdateInput"
                />
        </div>
        <div className="newUserItem">
                <label>City</label>
                <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="city"
               placeholder={userAdmin.city}
                value={input.city}
                />
              </div>
          <div className="newUserItem">
                <label>Province</label>
                <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="city"
               placeholder={userAdmin.province}
                value={input.province}
                />
              </div>
        <div className="newUserItem">
                <label>Admin</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="isAdmin"
                 placeholder={userAdmin.isAdmin===true?"true":"false"}
                  value={input.isAdmin}
                />
              </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Rather not say</label>
          </div>
        </div>
        <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={userAdmin.photo}
                  alt=""
                />
                <div> <input
                  onChange={(e) => uploadImage(e)}
                  className="userUpdateInput"
                  type="file"
                  name="photo"
                  value={input.photo}
                  accept="image/png, image/jpeg"
                />
                </div>
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
        <button onClick={(e) => handleCreateUser(e)} className="newUserButton">Create</button>
      </form>
    </div>
  );
} */