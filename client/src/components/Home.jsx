import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Sass/Styles/Home.scss';
// import header from "../img/header.png";
import group2 from '../img/group2.png';
import SearchBarHome from './SearchBarHome';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

export default function Home() {
  const users = useSelector((state) => state.user);
  return (
    <div className="w-screen">
      {/* <div>
        <img className="fotoHeader" src={header} alt="header" />
      </div> */}
      <div>
        <SearchBarHome />
      </div>
      <div className="p-5 md:p-20">
        <img
          className="w-full mb-5 rounded-xl shadow-xl lg:float-left lg:w-6/12 "
          src={group2}
          alt="Home"
        />
        <article className="lg:float-right lg:w-6/12 lg:text-left lg:p-8">
          <h1 className="m-5 font-semibold text-2xl">
            <FormattedMessage
              id="home.save"
              defaultMessage="Save money while driving"
            />
          </h1>

          <p className="m-5 font-semibold">
            {' '}
            <FormattedMessage
              id="home.paragraph1"
              defaultMessage="Publish your next round trip on Gimme a Ride and get, on average, 80
              dollars * of your passengers. You will only need a couple of minutes
              to publish your route. Do we share a trip?"
            />
            <p className="mt-5 font-light">
              <FormattedMessage
                id="home.paragraph2"
                defaultMessage="* Average amount received by drivers in 2021."
              />
            </p>
          </p>

    
          {
            <NavLink
              to={
                !users.dni
                  ? '/register'
                  : users.name && users.cars.length === 0
                  ? '/car'
                  : users.name && users.cars[0].patent
                  ? '/route'
                  : ''
              }
            >
              <button className="font-semibold bg-green-500 m-2 py-2 px-6 md:py-4 md:px-12 border-0 rounded-3xl text-white transition duration-500 ease-in-out hover:bg-green-700">
                <FormattedMessage id="menu.post" defaultMessage="Post a Trip" />
              </button>
            </NavLink>
          }
          <p className="searchContainer"><FormattedMessage id="home.post" defaultMessage="Post a Trip" /></p>
          <div>
            {
              <NavLink to="/route-list">
                <p><FormattedMessage
              id="home.routes"
              defaultMessage="See all routes available!"
            /></p>
              </NavLink>
            }
          </div>
        </article>
      </div>
    </div>
  );
}
