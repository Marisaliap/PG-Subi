import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/SubFooter.scss";
import { SiTwitter, SiInstagram, SiFacebook } from "react-icons/si";
import { FormattedMessage } from "react-intl";

export default function SubFooter() {
  return (
    <div className="SubFooter">
      <div className="info">
        <div></div>
        <div className="left">
          <FormattedMessage
            id="subFooter.app"
            defaultMessage="Gimme a Ride is an app to share trips between people. Wherever you
              go, find your ideal trip."
          />
        </div>
        <div className="suggestionBoxContainer">
          <Link to="/suggestion-box" target="_blank" rel="noreferrer">
            <button className="buttonSuggestion">
              <FormattedMessage
                id="subFooter.sbox"
                defaultMessage="Suggestion Box"
              />
            </button>
          </Link>
        </div>
        <div className="redesSociales">
          <p>
            <a
              href="https://www.instagram.com/gimmearide/"
              target="_blank"
              rel="noreferrer"
            >
              <SiInstagram className="icon" />
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/GimmeARide_"
              target="_blank"
              rel="noreferrer"
            >
              <SiTwitter className="icon" />
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=100075632223946"
              target="_blank"
              rel="noreferrer"
            >
              <SiFacebook className="icon" />
            </a>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
