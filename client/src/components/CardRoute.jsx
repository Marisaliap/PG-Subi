import React from 'react';
import '../Sass/Styles/CardRoute.scss';
import { FormattedMessage } from "react-intl";

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
      <h5><FormattedMessage id="cardroute.from" defaultMessage="From:"/>{origin}</h5>
      <h5><FormattedMessage id="cardroute.to" defaultMessage="To:"/>{destiny}</h5>
      <h5><FormattedMessage id="cardroute.date" defaultMessage="Date:"/>{date}</h5>
      <h5><FormattedMessage id="cardroute.time" defaultMessage="Time:"/>{hours}</h5>
    {place === 0 ? <div className='buttonx'><h5><FormattedMessage id="cardroute.placefull" defaultMessage="Trip Full"/></h5></div> : <h5><FormattedMessage id="cardroute.place" defaultMessage="Seats available:"/>{place}</h5>}
      <h5>$ {price}</h5>
      
    </div>
  );
}

