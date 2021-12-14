import React from "react";
import {
  BsWatch,
  BsPinMap,
  BsPinMapFill,
  BsFillPersonFill,
  BsCashCoin,
  BsCalendarCheckFill,
} from "react-icons/bs";
import "../Sass/Styles/CardRoute.scss";
import { FormattedMessage } from "react-intl";

export default function CardRoute({
  origin,
  destiny,
  date,
  hours,
  place,
  price,
  ...props
}) {
  return (
    <div className="CardRoute" {...props}>
      <h5>
        <BsPinMap className="icon" />
        {origin}
      </h5>
      <h5>
        <BsPinMapFill className="icon" />
        {destiny}
      </h5>
      <h5>
        <BsCalendarCheckFill className="icon" /> {date} | {hours}
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
          {place}{" "}
          <FormattedMessage
            id="cardroute.place"
            defaultMessage="Seats available"
          />
        </h5>
      )}
      <h5>
        <BsCashCoin className="icon" /> $ {price}
      </h5>
    </div>
  );
}
