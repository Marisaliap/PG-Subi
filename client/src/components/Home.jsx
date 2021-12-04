import React from "react";
import { NavLink } from "react-router-dom";
import "../Sass/Styles/Home.scss";
// import header from "../img/header.png";
import group2 from "../img/group2.png";
import SearchBarHome from "./SearchBarHome";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

export default function Home() {
  const users = useSelector((state) => state.user);
  return (
    <div className="Home">
      {/* <div>
        <img className="fotoHeader" src={header} alt="header" />
      </div> */}
      <div>
        <SearchBarHome />
      </div>
      <div className="Article">
        <div></div>
        <div>
          <img className="foto" src={group2} alt="Home" />
        </div>
        <article>
          <h1>
            <FormattedMessage
              id="home.save"
              defaultMessage="Save money while driving"
            />
          </h1>
          <p>
            {" "}
            <FormattedMessage
              id="home.paragraph1"
              defaultMessage="Publish your next round trip on Gimme a Ride and get, on average, 80
              dollars * of your passengers. You will only need a couple of minutes
              to publish your route. Do we share a trip?"
            />
            <p>
              <FormattedMessage
                id="home.paragraph2"
                defaultMessage="* Average amount received by drivers in 2021."
              />
            </p>
          </p>
          <div className="linksdelhome">
            {
              <NavLink
                to={
                  !users.dni
                    ? "/register"
                    : users.name && users.cars.length === 0
                    ? "/car"
                    : users.name && users.cars[0].patent
                    ? "/route"
                    : ""
                }
              >
                <FormattedMessage id="menu.post" defaultMessage="Post a Trip" />
              </NavLink>
            }
            <p>or</p>
            <div>
              {
                <NavLink to="/route-list">
                  <p> See all routes available!</p>
                </NavLink>
              }
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
