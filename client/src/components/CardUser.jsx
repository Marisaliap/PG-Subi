import React from 'react';
import { BsStarFill } from 'react-icons/bs';

export default function CardUser({
  photo,
  name,
  lastName,
  genre,
  age,
  calification,
  ...props}) { 
  return (
    <>
    <div {...props}>
      <br />
      <br />
      <img src={photo} style={{ width: '150px' }} alt="" />{' '}
      <h5>{name}</h5>
      <h5>{lastName}</h5>
      <h5>{genre}</h5>
      <h5>{age}</h5>
      <h5>
        <BsStarFill className="icon" />
        {calification}
      </h5>
    </div>
    </>
  );
}
