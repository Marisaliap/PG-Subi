import React from "react";
import { useEffect } from "react";
import Post from "./Post";
import { getUserDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function UserDetails(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // http://localhost:3000/user/56f3c41c-06ce-47aa-bd25-9613ab0af1f3

  useEffect(() => {
    dispatch(getUserDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  // falta condicion de pago para mostrar toda la info o primeara parte
  {
    return (
      <>
        <div>
          {user.length > 0 ? (
            <div>
              <h1>Users Data</h1>
              <img src={user[0].photo} alt="Img not found" />
              <h2>{user[0].lastName}</h2>
              <h2>{user[0].email}</h2>
              <h2>{user[0].name}</h2>
              <h2>{user[0].telephone}</h2>
              <h2>{user[0].facebook}</h2>
              <h2>{user[0].instagram}</h2>
              <h2>{user[0].province}</h2>
              <h2>{user[0].city}</h2>
              <h2>{user[0].street}</h2>
              <h2>{user[0].genre}</h2>
              <h2>{user[0].age}</h2>
              <h2>{user[0].about}</h2>
              <h2>{user[0].genre}</h2>
              <h2>{user[0].calification}</h2>
              <div>
                <Post />
              </div>
            </div>
          ) : (
            <p> Loading...</p>
          )}
        </div>
      </>
    );
  }
}
