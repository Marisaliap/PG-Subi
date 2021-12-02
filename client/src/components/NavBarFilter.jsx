import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allRoutes } from '../actions';

export default function NavBarFilter() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState('');
  const [restriction, setRestriction] = useState('');

  const handleSelect = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
    dispatch(allRoutes(order, restriction));
  };

  const handleSelectFilters = (e) => {
    e.preventDefault();
    setRestriction(e.target.value);
    dispatch(allRoutes(order, restriction));
  };

  useEffect(() => allRoutes({}), []);

  return (
    <div>
      <div>
        <select onChange={handleSelect} name="sorts">
          <option value="">Order By...</option>
          <option value="time">Earliest Departure</option>
          <option value="price">Lowest Price</option>
        </select>
      </div>
      <div>
        <select onChange={handleSelectFilters} name="filters">
          <option value="">Filter by Amenities</option>
          <option value="petsAllowed">Pets Allowed</option>
          <option value="smokersAllowed">Smoking Allowed</option>
          <option value="foodAllowed">Food Allowed</option>
          <option value="twoMaxInTheBack">Max. 2 in the back</option>
          <option value="kidsAllowed">Kids Allowed</option>
          <option value="onlyWomen">Only Women</option>
        </select>
      </div>
    </div>
  );
}
