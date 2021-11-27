import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <br />
      <br />
      <div className="cosasAbajo">
        <Link to="/Faq">Faq</Link>
        <div>{" - "}</div>
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
        <div>{" - "}</div>
        <Link to="/recommendations">Recommendations</Link>
        <div>{" - "}</div>
        <Link to="/aboutus">About Us</Link>
      </div>
      <h3>
        Grupo 10 © |{" "}
        <a href="https://www.soyhenry.com/" target="_blank">
          {" "}
          Soy Henry ©
        </a>{" "}
        | 2021{" "}
      </h3>
    </div>
  );
}
