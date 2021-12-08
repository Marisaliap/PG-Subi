import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserById, getUserByName } from "../actions";
import CardUser from "./CardUser";

export default function Users() {
  const { users } = useSelector((state) => state);
  const { userBuscado } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {users.length === 0 && userBuscado.email ? (
        <CardUser
          name={userBuscado.name}
          lastName={userBuscado.lastName}
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
      ) : users.length > 0 ? (
        users.map((user) => {
          return (
            <CardUser
              name={user.name}
              lastName={user.lastName}
              genre={user.genre}
              age={user.age}
              photo={user.photo}
              calification={user.calification}
            />
          );
        })
      ) : (
        <>
          <p>No user matches those descriptions</p>
          <button onClick={() => dispatch(getUserByName(""))}>
            Load All Users
          </button>
        </>
      )}
    </div>
  );
}
