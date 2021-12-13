import React from 'react';
import {
  BsWatch,
  BsPinMap,
  BsPinMapFill,
  BsFillPersonFill,
  BsCashCoin,
} from 'react-icons/bs';
import '../Sass/Styles/CardRoute.scss';
import { FormattedMessage } from 'react-intl';

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
      <h5>
        {/* <FormattedMessage id="cardroute.from" defaultMessage="From:" /> */}
        <BsPinMap className="icon" />
        {origin}
      </h5>
      <h5>
        {/* <FormattedMessage id="cardroute.to" defaultMessage="To:" /> */}
        <BsPinMapFill className="icon" />
        {destiny}
      </h5>
      {/* <h5>
        <FormattedMessage id="cardroute.date" defaultMessage="Date:" />
        {date}
      </h5> */}
      <h5>
        {/* <FormattedMessage id="cardroute.time" defaultMessage="Time:" />  */}
        <BsWatch className="icon" /> {hours}
      </h5>
      {place === 0 ? (
        <div className="buttonx">
          <h5>
            <FormattedMessage
              id="cardroute.placefull"
              defaultMessage="Trip Full"
            />
          </h5>
        </div>
      ) : (
        <h5>
          <BsFillPersonFill className="icon" />
          {place}{' '}
          <FormattedMessage
            id="cardroute.place"
            defaultMessage="Seats available:"
          />
        </h5>
      )}
      <h5>
        <BsCashCoin className="icon" /> $ {price}
      </h5>
    </div>
  );
}
