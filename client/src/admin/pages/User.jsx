import React, { useEffect, useState } from "react";
import { getUserAdmin } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import {
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  AssignmentInd,
  WcOutlined,
  Event,
  PhotoCamera,
  DirectionsCar,
  Facebook,
  Instagram,
  Home,
  VpnKey,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../../styles/User.css";
import { useAuth0 } from "@auth0/auth0-react";
import { editUser, getUserProfile } from "../../actions";

export default function User() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const { userAdmin, id } = useSelector(state => state);


  const [input, setInput] = useState({
    email:userAdmin.email,
    name: userAdmin.name,
    lastName: userAdmin.lastName,
    genre: userAdmin.genre,
    age: userAdmin.age,
    dni:userAdmin.dni,
    street: userAdmin.street,
    city: userAdmin.city,
    province: userAdmin.province,
    telephone: userAdmin.telephone,
    facebook: userAdmin.facebook,
    instagram: userAdmin.instagram,
    photo: userAdmin.photo,
    photoDni: userAdmin.photoDni,
    isAdmin: userAdmin.isAdmin,
    car: userAdmin.cars
  });
  const [image, setImage] = useState("");
  ;
  useEffect(() => {
    dispatch(getUserAdmin(id))
    dispatch(getUserProfile(id))
  }, [dispatch,input]);

  // ------------------<handles>------------------
  const handleSubmitUser = (e) => {
    e.preventDefault();

    dispatch(editUser(id, input));
    dispatch(getUserProfile(id));
    dispatch(getUserAdmin(id))

  }

  console.log(userAdmin)
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

  // _______________________________________________________________________________


  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/admin/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={userAdmin.photo || user.picture}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{userAdmin.name}</span>
              {/* <span className="userShowUserTitle">{userAdmin?.cars?.length > 0 ? "Driver" : "Passenger"}</span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.name}</span>
              <span className="userShowInfoTitle">{userAdmin.lastName}</span>
            </div>
            <div className="userShowInfo">
              < AssignmentInd className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.dni}</span>
            </div>
            <div className="userShowInfo">
              <Event className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.age}</span>
            </div>
            <div className="userShowInfo">
              <WcOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.genre}</span>
            </div>
            <div className="userShowInfo">
              <Home className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.street + "|"}</span>
              <span className="userShowInfoTitle">{userAdmin.city + "|"}</span>
              <span className="userShowInfoTitle">{userAdmin.province}</span>
            </div>
            <div className="userShowInfo">
              <VpnKey className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.isAdmin === true ? "Admin" : "Not Admin"}</span>
            </div>
            <span className="userShowTitle">Account Documents</span>
            <div className="userShowInfo">
              <PhotoCamera className="userShowIcon" />
              {!userAdmin.photoDni ? "" : userAdmin.photoDni.map(e => <img src={e} alt="" className="userShowImge" />)}
              {/* <img src ={!userAdmin.photoDni? "" : userAdmin.photoDni[0]}className="userShowImge" />
              <img src ={!userAdmin.photoDni? "" : userAdmin.photoDni[1]} className="userShowImge" /> */}
            </div>
            <div className="userShowInfo">
              <DirectionsCar className="userShowIcon" />
              {/* <span className="userShowInfoTitle">{!userAdmin.cars ? "" : userAdmin.cars[0]}</span> */}
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.telephone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{userAdmin.email}</span>
            </div>
            <div className="userShowInfo">
              <Facebook className="userShowIcon" />
              <span className="userShowInfoTitle">{!userAdmin.facebook ? "No Facebook added" : userAdmin.facebook}</span>
            </div>
            <div className="userShowInfo">
              <Instagram className="userShowIcon" />
              <span className="userShowInfoTitle">{!userAdmin.instagram ? "No Instagram added" : userAdmin.instagram}</span>
            </div>
          </div>
        </div>


        {/*-----------------------------< From>-------------------------  */}
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <div className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
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

              <div className="userUpdateItem">
                <label>LastName</label>
                <input
                 onChange={(e) => handleChange(e)}
                 type="text"
                 name="lastName"
                placeholder={userAdmin.lastName}
                 value={input.lastName}
                 className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="email"
                 placeholder={userAdmin.email}
                  value={input.email}
                  className="userUpdateInput"

                />
                {/* <input
                  onChange={(e) => handleChange(e)}
                  placeholder={userAdmin.email}
                  value={input.email}
                  className="userUpdateInput"
                /> */}
              </div>


              <div className="userUpdateItem">
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
              <div className="userUpdateItem">
                <label>street</label>
                <input
                 onChange={(e) => handleChange(e)}
                 type="text"
                 name="street"
                placeholder={userAdmin.street}
                 value={input.street}
                 className="userUpdateInput"
                />

              </div>
              <div className="userUpdateItem">
                <label>Admin</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="isAdmin"
                 placeholder={userAdmin.isAdmin===true?"true":"false"}
                  value={input.isAdmin}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>City</label>
                <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="city"
               placeholder={userAdmin.city}
                value={input.city}
                className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Genre</label>
                <input
                 onChange={(e) => handleChange(e)}
                 type="text"
                 name="genre"
                placeholder={userAdmin.genre}
                 value={input.genre}
                 className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Instagram</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="instagram"
                 placeholder={userAdmin.instagram}
                  value={input.instagram}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Facebook</label>
                <input
                   onChange={(e) => handleChange(e)}
                   type="text"
                   name="facebook"
                   placeholder={userAdmin.facebook}
                   value={input.facebook}
                  className="userUpdateInput"
                />
              </div>
              
              <div className="userUpdateItem">
                <label>Province</label>
                <input
                 onChange={(e) => handleChange(e)}
                 type="text"
                 name="province"
                placeholder={userAdmin.province}
                 value={input.province}
                 className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>DNI</label>
                <input
                onChange={(e) => handleChange(e)}
                type="number"
                name="dni"
               placeholder={userAdmin.dni}
                value={input.dni}
                className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Age</label>
                <input
               onChange={(e) => handleChange(e)}
               type="number"
               name="age"
              placeholder={userAdmin.age}
               value={input.age}
               className="userUpdateInput"
                />
                {/* <input
                  onChange={handleChange}
                  type="text"
                  name="city"
                  value={input.age}
                  className="userUpdateInput"
                /> */}
              </div>

            </div>
            <div className="userUpdateRight">
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
              <button onClick={(e) => handleSubmitUser(e)} className="userUpdateButton">Update</button>
              {/* <button className="userUpdateButton">Update</button> */}
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}