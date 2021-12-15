import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/LandingPage.scss";
import img from "../img/logo.png";
import saveMoney from "../img/saveMoney.svg";
import electricCar from "../img/electricCar.svg";
import natureBenefits from "../img/natureBenefits.svg";
import { langContext } from "./../context/langContext.js";
import es from "./../img/spain.png";
import en from "./../img/united-kingdom.png";
import { FormattedMessage } from "react-intl";

export default function LandingPage() {
  const idioma = useContext(langContext);
  return (
    <div className="LandingPage">
      <div className="LandingPage__container">
        <div className="poneteBien">
          <img className="logo" src={img} alt="Logo" />
          <div className="cosasAbajo">
            <button
              className="botonBandera"
              onClick={() => idioma.establecerLenguaje("es-AR")}
            >
              <img className="banderas" src={es} alt="" />
            </button>
            <button
              className="botonBandera"
              onClick={() => idioma.establecerLenguaje("en-US")}
            >
              <img className="banderas" src={en} alt="" />
            </button>
          </div>
        </div>
        <section className="sectionBelow">
          <div className="belowContainer">
            <div className="centralosporfa">
              <div>
                <h1 className="porqueUsarLaApp">
                  <FormattedMessage
                    id="landingPage.t1"
                    defaultMessage="Why use GimmeARide?"
                  />
                </h1>
                <p className="unpoquitoMas">
                  <FormattedMessage
                    id="landingPage.p2"
                    defaultMessage="Gimme A Ride allows you to connect both drivers and passengers willing
        to travel together between cities, sharing the cost of the adventure"
                  />
                </p>
              </div>
              <h2 className="losPorque">
                <div className="cadaGilada">
                  <img src={natureBenefits} alt="Eco-Consciousness" />
                  <h3>
                    <FormattedMessage
                      id="landingPage.t2"
                      defaultMessage="It's Eco-Conscious"
                    />
                  </h3>
                  <p className="pelodeces">
                    <FormattedMessage
                      id="landingPage.p4"
                      defaultMessage="By reducing the number of vehicles on the road, the environment is
                greatly benefited."
                    />
                  </p>
                </div>

                <div className="cadaGilada">
                  <img src={electricCar} alt="It's hella fun" />
                  <h3>
                    <FormattedMessage
                      id="landingPage.t3"
                      defaultMessage="Have fun"
                    />
                  </h3>
                  <p className="pelodeces">
                    <FormattedMessage
                      id="landingPage.p5"
                      defaultMessage="Meet new people with whom to share excellent experiences.
                Traveling alone is boooring."
                    />
                  </p>
                </div>

                <div className="cadaGilada">
                  <img src={saveMoney} alt="Lets you save money" />
                  <h3>
                    <FormattedMessage
                      id="landingPage.t4"
                      defaultMessage="Lets you save money"
                    />
                  </h3>
                  <p className="pelodeces">
                    <FormattedMessage
                      id="landingPage.p6"
                      defaultMessage="Share your travel expenses with select passengers, you will end up
                spending less on each trip!"
                    />
                  </p>
                </div>
              </h2>
            </div>
          </div>
        </section>

        <br />

        <section className="upperSection">
          <Link to="/home">
            <button className="button">
              <FormattedMessage id="landing.enter" defaultMessage="Enter" />
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
