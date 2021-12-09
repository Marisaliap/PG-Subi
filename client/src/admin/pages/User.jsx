import React from "react";
import { useEffect } from "react";
import { getUserAdmin } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import {
    CalendarToday,
    LocationSearching,
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
  
  export default function User() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const { userAdmin, id } = useSelector(state => state);

  useEffect(() => {
  dispatch(getUserAdmin(id));
  }, [dispatch]);

  console.log(userAdmin, "soy user Admin")

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
                src={ userAdmin.photo || user.picture}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{userAdmin.name}</span>
               <span className="userShowUserTitle">{userAdmin?.cars?.length > 0 ? "Driver" : "Passenger"}</span>
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
                <span className="userShowInfoTitle">{!userAdmin.photoDni? "" : userAdmin.photoDni.map(e => e)}</span>
              </div>
              <div className="userShowInfo">
                <DirectionsCar className="userShowIcon" />
                <span className="userShowInfoTitle">{!userAdmin.cars? "" : userAdmin.cars.map(e => e)}</span>
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
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={userAdmin.photo}
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }