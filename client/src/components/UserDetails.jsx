import React from "react";
import Post from "./Post";

export default function UserDetails({
  name,
  lastName,
  genre,
  email,
  facebook,
  instagram,
  age,
  dni,
  image,
  province,
  telephone,
  about,
  calification,
})
// falta condicion de pago para mostrar toda la info o primeara parte
{
  return (
    <>
      <div>
        <h1>Users Data</h1>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h2>{lastName}</h2>
        <h2>{genre}</h2>
        <h2>{age}</h2>
        <h2>{province}</h2>
        <h2>{about}</h2>
        <h2>{calification}</h2>

        <h2>{dni}</h2>
        <h2>{telephone}</h2>
        <h2>{email}</h2>
        <h2>{facebook}</h2>
        <h2>{instagram}</h2>
      </div>
      <div>
        <Post/>
      </div>
    </>
  );
}
