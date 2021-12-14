import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../Sass/Styles/Login.scss';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <h3 onClick={() => loginWithRedirect()}>Login</h3>;
};
