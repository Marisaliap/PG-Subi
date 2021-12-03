import React from 'react';
import { Link } from 'react-router-dom';
import '../Sass/Styles/Home.scss';
import header from '../img/header.png';
import group2 from '../img/group2.png';
import SearchBarHome from './SearchBarHome';
import { useSelector } from 'react-redux';

export default function Home() {
  const users = useSelector((state) => state.user);
  return (
    <div className="w-screen">
      {/* <div>
        <img className="fotoHeader" src={header} alt="header" />
      </div> */}
      <div>{/* <SearchBarHome /> */}</div>
      <div className="p-5 md:p-20">
        <img
          className="w-full mb-5 rounded-xl shadow-xl lg:float-left lg:w-6/12 "
          src={group2}
          alt="Home"
        />
        <article className="lg:float-right lg:w-6/12 lg:text-left lg:p-8">
          <h1 className="m-5 font-semibold text-2xl">
            Save money while driving!
          </h1>
          <p className="m-5 font-semibold">
            Publish your next trip on GimmeARide and get, on average, 80
            dollars* from your passengers. You'll only need a couple of minutes
            to publish your trip. Wanna share it?
            <p className="mt-5 font-light">
              * Average amount received by drivers in 2021.
            </p>
          </p>
          {
            <Link
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
                Post a Trip
              </button>
            </Link>
          }
        </article>
      </div>
    </div>
  );
}
