import React from 'react';
import '../Sass/Styles/CardRoute.scss';

export default function CardRoute({
  origin,
  destiny,
  date,
  hours,
  place,
  price,
  //infoRoute,
  ...props
}) {
  return (
    <div className="CardRoute" {...props}>
      <h5>From: {origin}</h5>
      <h5>To: {destiny}</h5>
      <h5>Date: {date}</h5>
      <h5>Time: {hours}</h5>
    {place === 0 ? <div className='buttonx'><h5>Trip Full</h5></div> : <h5>Seats available: {place}</h5>}
      <h5>$ {price}</h5>
      
    </div>
  );
}
