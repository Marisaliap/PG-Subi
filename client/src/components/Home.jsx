import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/Home.scss";
// import header from "../img/header.png";
import navigator from "../img/navigator.svg";
import ecoConscious from "../img/ecoConscious.svg";
import saveMoney from "../img/saveMoney.svg";
import electricCar from "../img/electricCar.svg";
import SearchBarHome from "./SearchBarHome";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getUserProfile } from "../actions";
import Loggin from "./Loggin";

export default function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile(user.email));
  }, [dispatch, user.email, getUserProfile]);
  const [id, setId] = useState("");

  return (
    <div className="Homepage">
      {/* <div>
        <img className="fotoHeader" src={header} alt="header" />
      </div> */}
      <div>
        <SearchBarHome />
        <>
          <h1>{id}</h1>
          {/* <Loggin onIdSubmit={setId} /> */}
        </>
      </div>
      <section>
        <img className="homepageImage" src={navigator} alt="Home" />
        <article>
          <h1>
            <FormattedMessage
              id="home.title1"
              defaultMessage="Save money while driving"
            />
          </h1>

          <p className="description">
            <FormattedMessage
              id="home.p1"
              defaultMessage="Publish your next round trip on Gimme a Ride and get, on average, 80
              dollars * of your passengers. You will only need a couple of minutes
              to publish your route. Do we share a trip?"
            />
          </p>
          <p className="detail">
            <FormattedMessage
              id="home.p2"
              defaultMessage="* Average amount received by drivers in 2021."
            />
          </p>
          {/* 
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
              <button className="button">
                <FormattedMessage id="menu.post" defaultMessage="Post a Trip" />
              </button>
            </NavLink>
          } */}
          <div>
            {
              <NavLink to="/route-list">
                <button className="button">
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

      <section className="sectionBelow">
        <h1>
          <FormattedMessage
            id="home.title2"
            defaultMessage="Why use GimmeARide?"
          />
        </h1>
        <div className="belowContainer">
          <div>
            <img src={ecoConscious} alt="Eco-Consciousness" />
            <h3>
              <FormattedMessage
                id="home.subtitle1"
                defaultMessage="It's Eco-Conscious"
              />
            </h3>
            <p>
              <FormattedMessage
                id="home.p4"
                defaultMessage="By reducing the number of vehicles on the road, the environment is
                greatly benefited."
              />
            </p>
          </div>

          <div>
            <img src={electricCar} alt="It's hella fun" />
            <h3>
              <FormattedMessage id="home.subtitle2" defaultMessage="Have fun" />
            </h3>
            <p>
              <FormattedMessage
                id="home.p5"
                defaultMessage="Meet new people with whom to share excellent experiences.
                Traveling alone is boooring."
              />
            </p>
          </div>

          <div>
            <img src={saveMoney} alt="Lets you save money" />
            <h3>
              <FormattedMessage
                id="home.subtitle3"
                defaultMessage="Lets you save money"
              />
            </h3>
            <p>
              <FormattedMessage
                id="home.p6"
                defaultMessage="Share your travel expenses with select passengers, you will end up
                spending less on each trip!"
              />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
