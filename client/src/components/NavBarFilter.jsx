import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allRoutes, getRouteFromDb } from "../actions";
import "../Sass/Styles/NavBarFilter.scss";
import { FormattedMessage } from "react-intl";

export default function NavBarFilter({ places, currentRoutes }) {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  const [restriction, setRestriction] = useState("");
  const user = useSelector((state) => state.userpro);
  const { searchParams } = useSelector((state) => state);

  const handleSelect = (e) => {
    e.preventDefault();
    if (searchParams.originName && places) {
      dispatch(
        getRouteFromDb(
          searchParams.originName,
          searchParams.destinyName,
          searchParams.date,
          places,
          e.target.value,
          restriction
        )
      );
      setOrder(e.target.value);
    } else {
      // dispatch(getRouteFromDb('', '', '', '', e.target.value, restriction));
      dispatch(allRoutes(e.target.value, restriction));
      setOrder(e.target.value);
    }
  };

  const handleSelectFilters = (e) => {
    e.preventDefault();
    if (searchParams.originName && places) {
      dispatch(
        getRouteFromDb(
          searchParams.originName,
          searchParams.destinyName,
          searchParams.date,
          places,
          order,
          e.target.value
        )
      );
      setRestriction(e.target.value);
    } else {
      // dispatch(getRouteFromDb('', '', '', '', order, e.target.value));
      dispatch(allRoutes(order, e.target.value));
      setRestriction(e.target.value);
    }
  };

  return (
    <div className="NavBarFilter">
      <div>
        <select onChange={handleSelect} name="sorts">
          <FormattedMessage id="navbarfilter.orderby">
            {(message) => <option value="">{message}</option>}
          </FormattedMessage>
          <FormattedMessage id="navbarfilter.earliestdeparture">
            {(message) => <option value="time">{message}</option>}
          </FormattedMessage>
          <FormattedMessage id="navbarfilter.lowestprice">
            {(message) => <option value="price">{message}</option>}
          </FormattedMessage>
        </select>

        <select onChange={handleSelectFilters} name="filters">
          <FormattedMessage id="navbarfilter.amenities">
            {(messege) => <option value="">{messege}</option>}
          </FormattedMessage>
          <FormattedMessage id="navbarfilter.petsaloowed">
            {(messege) => <option value="petsAllowed">{messege}</option>}
          </FormattedMessage>
          <FormattedMessage id="navbarfilter.smokingallowed">
            {(messege) => <option value="smokersAllowed">{messege}</option>}
          </FormattedMessage>
          <FormattedMessage id="navbarfilter.foodallowed">
            {(messege) => <option value="foodAllowed">{messege}</option>}
          </FormattedMessage>
          <FormattedMessage id="navbarfilter.2intheback">
            {(messege) => <option value="twoMaxInTheBack">{messege}</option>}
          </FormattedMessage>
          <FormattedMessage id="navbarfilter.kidsallowed">
            {(messege) => <option value="kidsAllowed">{messege}</option>}
          </FormattedMessage>
          {user.genre === "Female" ? (
            <FormattedMessage id="navbarfilter.onlywomen">
              {(messege) => <option value="onlyWomen">{messege}</option>}
            </FormattedMessage>
          ) : (
            ""
          )}
        </select>
      </div>
    </div>
  );
}
