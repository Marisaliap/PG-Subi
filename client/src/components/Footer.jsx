import React from "react";
import { Link } from "react-router-dom";
import Faq from "./Faq";

export default function Footer() {
  return (
    <div>
    <br/>
    <br/>
      <Link to="/Faq">Faq</Link>
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
