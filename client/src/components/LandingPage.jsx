import React from 'react';
import { Link } from 'react-router-dom';
import '../Sass/Styles/LandingPage.scss';
import img from '../img/logo.png';
import cityDriver from '../img/cityDriver.svg';
import carDriver from '../img/carDriver.svg';
import { FormattedMessage } from 'react-intl';

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

      <section className="lowerSection">
        <div>
          <img className="SVGs" src={cityDriver} alt="Are you a passenger?" />
          <p>
            Book a place in other person's car, have fun alongside other people
            and go wherever you want, by paying less than you would by using
            other travelling methods.
          </p>
          <Link to="/home">
            <button className="button">Let's go</button>
          </Link>
        </div>
        <div>
          <img className="SVGs" src={carDriver} alt="Are you a passenger?" />
          <p>
            With Gimme A Ride, allow other people with common destinations to
            get into your car and have fun together while spending less!
          </p>
          <Link to="/home">
            <button className="button">Let's go</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
