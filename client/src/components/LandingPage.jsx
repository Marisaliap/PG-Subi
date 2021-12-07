import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../Sass/Styles/LandingPage.scss';
import img from '../img/logo.png';
import { allRoutes, getAllUsers } from '../actions';
import { FormattedMessage } from 'react-intl';

export default function LandingPage() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(allRoutes()),
  dispatch(getAllUsers()), []);

  return (
    <div className="LandingPage">
      <div className="cosas">
        <img className="logo" src={img} alt="Logo" />
        <NavLink to="/home">
          <button className="button">
            <FormattedMessage id="landing.enter" defaultMessage="Enter" />
          </button>
        </NavLink>
      </div>
    </div>
  );
}
