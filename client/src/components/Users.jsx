import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserById, getUserByName } from "../actions";
import CardUser from "./CardUser";
import "../Sass/Styles/Users.scss";

export default function Users() {
  const { users } = useSelector((state) => state);
  const { userBuscado } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="userContainer">
      {users.length === 0 && userBuscado.email ? (
        <div className="usercard">
          <CardUser
            name={userBuscado.name}
            lastName={userBuscado.lastName}
            email={userBuscado.email}
            genre={userBuscado.genre}
            age={userBuscado.age}
            photo={userBuscado.photo}
            calification={
              userBuscado.email && userBuscado.calification.length > 0
                ? userBuscado.calification
                    .map((c) => parseInt(c.calification))
                    .reduce((a, b) => a + b, 0) / userBuscado.posts.length
                : 0
            }
          />
        </div>
      ) : users.length > 0 ? (
        users.map((user) => {
          return (
            <div className="usercard">
              <CardUser
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
          <p>No user matches those descriptions</p>
          <button
            className="button"
            onClick={() => dispatch(getUserByName(""))}
          >
            Load All Users
          </button>
        </>
      )}
    </div>
  );
}
