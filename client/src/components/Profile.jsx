import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { getUserProfile } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "../Sass/Styles/Profile.scss";
import { FormattedMessage } from "react-intl";

export const Profile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userpro);
  const { user, isAuthenticated, isLoading } = useAuth0();

  let umail;
  isAuthenticated ? (umail = user.email) : (umail = "");

  useEffect(() => {
    dispatch(getUserProfile(umail));
  }, [dispatch, umail]);

  if (isLoading) {
    return (
      <div>
        <FormattedMessage id="profile.loading" defaultMessage="Loading..." />
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div>
        {/* <Link to={!userInfo.dni ? '/register' : '/profile'}> */}
        <img
          className="profilePicture"
          src={userInfo.photo ? userInfo.photo : user.picture}
          alt={user.name}
        />

        {/* </Link> */}
      </div>
    )
  );
};
