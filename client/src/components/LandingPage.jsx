import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/LandingPage.scss";
import img from "../img/logo.png";
import saveMoney from "../img/saveMoney.svg";
import electricCar from "../img/electricCar.svg";
import natureBenefits from "../img/natureBenefits.svg";
import { FormattedMessage } from "react-intl";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <section className="upperSection">
        <img className="logo" src={img} alt="Logo" />
        <h4>Wherever you like, whenever you like.</h4>
        <p>
          Gimme A Ride allows you to connect both drivers and passengers willing
          to travel together between cities, sharing the cost of the adventure
        </p>
        <p>Wanna know more?</p>
        <Link to="/home">
          <button className="button">
            <FormattedMessage id="landing.enter" defaultMessage="Enter" />
          </button>
        </Link>
      </section>

      <br />

      <section className="sectionBelow">
        <h1>
          <FormattedMessage
            id="home.title2"
            defaultMessage="Why use GimmeARide?"
          />
        </h1>
        <div className="belowContainer">
          <div>
            <img src={natureBenefits} alt="Eco-Consciousness" />
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
