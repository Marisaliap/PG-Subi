import React from 'react';

export default function CardRoute({
  origin,
  destiny,
  date,
  hours,
  place,
  price,
  infoRoute,
  ...props
}) {
  return (
    <div {...props}>
      <h5>From: {origin}</h5>
      <h5>To: {destiny}</h5>
      <h5>Date: {date}</h5>
      <h5>Time: {hours}</h5>
      <h5>Seats available: {place}</h5>
      {/* <h5>{price}</h5> */}
      <h5>{infoRoute}</h5>
    </div>
  );
}
