import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  
  return (
    <div>
    <br/>
    <br/>
      <Link to="/Faq">Faq</Link>
      <Link to="/terms-and-conditions">Terms and Conditions</Link>
      <Link to="/recommendations">Recommendations</Link>
      <Link to="/aboutus">About Us</Link>
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
