import React from "react";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/Home.scss";
// import header from "../img/header.png";
import navigator from "../img/navigator.svg";
import ecoConscious from "../img/ecoConscious.svg";
import saveMoney from "../img/saveMoney.svg";
import offRoad from "../img/offRoad.svg";
import electricCar from "../img/electricCar.svg";
import group2 from "../img/group2.png";
import SearchBarHome from "./SearchBarHome";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

export default function Home() {
  const users = useSelector((state) => state.user);
  return (
    <div className="Homepage">
      {/* <div>
        <img className="fotoHeader" src={header} alt="header" />
      </div> */}
      <SearchBarHome />
      <div className="secciones">
        <section className="sectionAbove">
          <img className="homepageImage" src={navigator} alt="Home" />
          <article>
            <h1>
              <FormattedMessage
                id="home.save"
                defaultMessage="Save money while driving"
              />
            </h1>

            <p className="description">
              <FormattedMessage
                id="home.paragraph1"
                defaultMessage="Publish your next round trip on Gimme a Ride and get, on average, 80
              dollars * of your passengers. You will only need a couple of minutes
              to publish your route. Do we share a trip?"
              />
              <p className="detail">
                <FormattedMessage
                  id="home.paragraph2"
                  defaultMessage="* Average amount received by drivers in 2021."
                />
              </p>
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
          <h1>Why use GimmeARide?</h1>
          <div className="belowContainer">
            <div>
              <img src={ecoConscious} alt="Eco-Consciousness" />
              <h3>It's Eco-Conscious</h3>
              <p>
                By reducing the number of vehicles on the road, the environment
                is greatly benefited.
              </p>
            </div>

            <div>
              <img src={electricCar} alt="It's hella fun" />
              <h3>Have fun</h3>
              <p>
                Meet new people with whom to share excellent experiences.
                Traveling alone is boooring.
              </p>
            </div>

            <div>
              <img src={saveMoney} alt="Lets you save money" />
              <h3>Lets you save money</h3>
              <p>
                Share your travel expenses with select passengers, you will end
                up spending less on each trip!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
