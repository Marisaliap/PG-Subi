import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Sass/Styles/Home.scss';
// import header from "../img/header.png";
import navigator from '../img/navigator.svg';
import ecoConscious from '../img/ecoConscious.svg';
import saveMoney from '../img/saveMoney.svg';
import offRoad from '../img/offRoad.svg';
import SearchBarHome from './SearchBarHome';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

export default function Home() {
  const users = useSelector((state) => state.user);
  return (
    <div className="h-full p-5 md:p-20">
      {/* <div>
        <img className="fotoHeader" src={header} alt="header" />
      </div> */}
      {/* <SearchBarHome /> */}
      <section>
        <img
          src={navigator}
          className="w-full mb-5 rounded-xl lg:float-left lg:w-2/5"
          alt="Home"
        />
        <article className="lg:float-right lg:w-6/12 lg:text-left lg:pt-8">
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
          <div>
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
                <button className="font-semibold bg-green-500 m-2 py-2 px-6 border-0 rounded-3xl text-white transition duration-500 ease-in-out hover:bg-green-700">
                  <FormattedMessage
                    id="menu.post"
                    defaultMessage="Post a Trip"
                  />
                </button>
              </NavLink>
            }
            {
              <NavLink to="/route-list">
                <button className="font-semibold bg-green-500 m-2 py-2 px-6 border-0 rounded-3xl text-white transition duration-500 ease-in-out hover:bg-green-700">
                  <FormattedMessage
                    id="home.routes"
                    defaultMessage="See all routes available!"
                  />
                </button>
              </NavLink>
            }
          </div>
        </article>
      </section>
      {/* <section className="grid">
        <h1>Why should you use GimmeARide?</h1>
        <div>
          <img
            src={ecoConscious}
            alt="Eco-Consciousness"
            className="sm:w-2/6"
          />
          <h3>It's eco-conscious</h3>
          <p>
            By reducing the number of vehicles on the road, the environment is
            greatly benefited.
          </p>
        </div>

        <div>
          <img src={saveMoney} alt="Save some money!" className="sm:w-2/6" />
          <h3>Lets you save money</h3>
          <p>
            Share your travel expenses with select passengers, you will end up
            spending less on each trip!
          </p>
        </div>

        <div>
          <img src={offRoad} alt="It's super fun" className="sm:w-2/6" />
          <h3>Have fun</h3>
          <p>
            Meet new people with whom to share excellent experiences. Traveling
            alone is boooring.
          </p>
        </div>
      </section> */}
    </div>
  );
}
