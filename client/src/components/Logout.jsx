import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../Sass/Styles/Login.scss';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <h3 onClick={() => logout({ returnTo: window.location.origin })}>Logout</h3>
  );
};
