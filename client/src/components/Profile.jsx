import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "../Sass/Styles/Profile.scss";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="Profile">
        {/*en el link to de abajo deberiamos poner el detalle de usuario */}
        <Link to={"/user/" + user.email}>
          <img className="fotoPerfil" src={user.picture} alt={user.name} />
        </Link>
        {/* <h2 className="nombreUsuario">{user.name}</h2>
        <p className="emailUsuario">Email: {user.email}</p> */}
      </div>
    )
  );
};
