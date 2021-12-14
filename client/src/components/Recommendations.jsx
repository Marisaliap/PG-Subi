import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/Recommendations.scss";
import { FormattedMessage } from "react-intl";

export default function Recommendations() {
  return (
    <div className="Recommendations">
      <Link to="/home">
        <button className="buttonBlue">Home</button>
      </Link>
      <article>
        <div></div>
        <div>
          <h2>
            <FormattedMessage
              id="Recommendations.title"
              defaultMessage="Recommendations"
            />
            - Gimme A Ride®
          </h2>

          <p>
            <FormattedMessage id="Recommendations.p1" defaultMessage="" />
          </p>

          <h3>
            <FormattedMessage id="Recommendations.h31" defaultMessage="" />
          </h3>
          <p>
            <FormattedMessage id="Recommendations.p2" defaultMessage="" />
          </p>

          <h3>
            <FormattedMessage id="Recommendations.h32" defaultMessage="" />
          </h3>
          <p>
            <FormattedMessage id="Recommendations.p3" defaultMessage="" />
          </p>

          <h3>
            <FormattedMessage id="Recommendations.h33" defaultMessage="" />
          </h3>
          <ul>
            <li>
              <FormattedMessage id="Recommendations.li1" defaultMessage="" />
            </li>
            <li>
              <FormattedMessage id="Recommendations.li2" defaultMessage="" />
            </li>
            <li>
              <FormattedMessage id="Recommendations.li3" defaultMessage="" />
            </li>
            <li>
              <FormattedMessage id="Recommendations.li4" defaultMessage="" />
            </li>
            <li>
              <FormattedMessage id="Recommendations.li5" defaultMessage="" />
            </li>
            <li>
              <FormattedMessage id="Recommendations.li6" defaultMessage="" />
            </li>
          </ul>

          <p>
            <FormattedMessage id="Recommendations.p4" defaultMessage="" />
            <a href="http://localhost:3000/terms-and-conditions">
              <FormattedMessage id="Recommendations.a1" defaultMessage="" />
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}
