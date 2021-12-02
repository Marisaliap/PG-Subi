import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/SubFooter.scss";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { Route } from "react-router-dom";
import SuggestionBox from "./SuggestionBox";

export default function SubFooter() {
  return (
    <div className="SubFooter">
      <div className="info">
        <br />
        <div className="left">
          Gimme A Ride is an app to share trips between people. Wherever you go,
          find your ideal trip.
        </div>
        <div>
          {/* <Route path="/suggestionbox" component={SuggestionBox} /> */}
          <Link to="/sugggestion-box" target="_blank" rel="noreferrer">
            <button className="buttonSuggestion">Suggestion Box</button>
          </Link>
        </div>
        <div className="redesSociales">
          <p>
            <a
              href="https://www.instagram.com/gimmearide/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="icon" />
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/GimmeARide_"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter className="icon" />
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=100075632223946"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="icon" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
