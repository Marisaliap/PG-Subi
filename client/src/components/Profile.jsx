import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserDetail } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import '../Sass/Styles/Profile.scss';

export const Profile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const { user, isAuthenticated, isLoading } = useAuth0();

  let umail;
  isAuthenticated ? (umail = user.email) : (umail = '');

  useEffect(() => {
    dispatch(getUserDetail(umail));
  }, [dispatch, umail]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <Link to={!userInfo.dni ? '/register' : '/profile'}>
        <img
          className="rounded-full w-12"
          src={userInfo.photo ? userInfo.photo : user.picture}
          alt={user.name}
        />
      </Link>
    )
  );
};
