import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/SubFooter.scss";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

export default function SubFooter() {
  return (
    <div className="SubFooter">
      <div className="info">
        <br />
        <div className="left">
          Give me a ride is an app to share trips between people. Wherever you
          go, find your ideal trip.
        </div>
        <div className="redesSociales">
          <p>
            <a href="https://www.instagram.com/givemearideapp/" target="_blank">
              <BsInstagram className="icon" />
            </a>
          </p>
          <p>
            <a href="https://twitter.com/givemearideapp" target="_blank">
              <BsTwitter className="icon" />
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/people/Give-me-a-ride/100075632223946/?sk=about"
              target="_blank"
            >
              <BsFacebook className="icon" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
