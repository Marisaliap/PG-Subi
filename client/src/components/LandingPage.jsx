import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../Sass/Styles/LandingPage.scss';
import img from '../img/logo.png';
import { allRoutes } from '../actions';
import { FormattedMessage } from 'react-intl';

export default function LandingPage() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(allRoutes()), []);

  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="LandingPageContainer">
        <div className="flex flex-col">
          <img className="mx-10 mb-5 md:mx-20" src={img} />
          <NavLink to="/home">
            <button className="font-semibold bg-green-500 m-2 py-2 px-6 border-0 rounded-3xl text-white transition duration-500 ease-in-out hover:bg-green-700">
              <FormattedMessage id="landing.enter" defaultMessage="Enter" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
