import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserByName } from "../actions";
import UserCardPerfil from "./UserCardPerfil";
import "../Sass/Styles/Users.scss";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function Users() {
  const { users } = useSelector((state) => state);
  const { userBuscado } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="userContainer">
      {users.length === 0 && userBuscado.email ? (
        <div className="usercard">
          <NavLink to={`/user/${userBuscado.email}`}>
            <UserCardPerfil
              name={userBuscado.name}
              lastName={userBuscado.lastName}
              email={userBuscado.email}
              genre={userBuscado.genre}
              age={userBuscado.age}
              photo={userBuscado.photo}
              calification={userBuscado.calification}
            />
          </NavLink>
        </div>
      ) : users.length > 0 ? (
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
          <button
            className="button"
            onClick={() => dispatch(getUserByName(""))}
          >
            <FormattedMessage
              id="user.button"
              defaultMessage="Load All Users"
            />
          </button>
        </>
      )}
      <div></div>
    </div>
  );
}
