import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserByName, getUserDetail } from "../actions";
import UserCardPerfil from "./UserCardPerfil";
import "../Sass/Styles/Users.scss";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function Users() {
  const users = useSelector((state) => state.users);
  // const userBuscado = useSelector((state) => state.userBuscado);
  const dispatch = useDispatch();


  return (
    <>
    <div className="userContainer">
      {users.length > 0 ? (
        users.map((user) => {
          return (
            <div className="usercard">
              <UserCardPerfil
                name={user.name}
                lastName={user.lastName}
                email={user.email}
                genre={user.genre}
                age={user.age}
                photo={user.photo}
                calification={user.calification}
              />
            </div>
          );
        })
      ) : (
        <>
          <p>
            <FormattedMessage
              id="user.result"
              defaultMessage="No user matches those descriptions"
            />
          </p>
          </>
          )}
          </div>
          <div>
          <button
            className="button"
            onClick={() => dispatch(getUserByName(""))}
          >
            <FormattedMessage
              id="user.button"
              defaultMessage="Load All Users"
            />
          </button>      
      </div>
    </>
  );
}
