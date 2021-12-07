import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allRoutes } from '../actions';
import '../Sass/Styles/NavBarFilter.scss';

export default function NavBarFilter() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState('');
  const [restriction, setRestriction] = useState('');
  const user = useSelector(state => state.user)

  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(allRoutes(e.target.value, restriction));
    setOrder(e.target.value);
  };

  const handleSelectFilters = (e) => {
    e.preventDefault();
    dispatch(allRoutes(order, e.target.value));
    setRestriction(e.target.value);
  };

  return (
    <div className="NavBarFilter">
      <div>
        <select onChange={handleSelect} name="sorts">
          <option value="">Order by...</option>
          <option value="time">Earliest Departure</option>
          <option value="price">Lowest Price</option>
        </select>

        <select onChange={handleSelectFilters} name="filters">
          <option value="">Filter by Amenities</option>
          <option value="petsAllowed">Pets Allowed</option>
          <option value="smokersAllowed">Smoking Allowed</option>
          <option value="foodAllowed">Food Allowed</option>
          <option value="twoMaxInTheBack">Max. 2 in the back</option>
          <option value="kidsAllowed">Kids Allowed</option>
         {user.genre === 'Female' && <option value="onlyWomen">Only Women</option>}
        </select>
      </div>
    </div>
  );
}
