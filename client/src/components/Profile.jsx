import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUserDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "../Sass/Styles/Profile.scss";

export const Profile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    dispatch(getUserDetail(isAuthenticated?user.email:user));
  }, [dispatch, isAuthenticated?user.email:user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="Profile">
        <Link to={"/user/" + user.email}>
          <img
            className="fotoPerfil"
            src={isAuthenticated ? userInfo.photo : user.picture}
            alt={user.name}
          />
        </Link>
      </div>
    )
  );
};
