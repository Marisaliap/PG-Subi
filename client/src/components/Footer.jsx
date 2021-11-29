import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <br />
      <br />
      <div>
        <h4 className="titulo">About</h4>
        <div className="cosasAbajo">
          <Link to="/aboutus" className="Link">
            About Us
          </Link>
        </div>
      </div>
      <hr/>
      <div className="helpcita">
        <h4 className="titulo">Help</h4>
        <div className="help">
          <Link to="/Faq" className="Link">
            Faq
          </Link>
          <br />
          <hr />
          <br />
          <Link to="/recommendations" className="Link">
            Recommendations
          </Link>
        </div>
      </div>
      <hr/>
      <div>
        <h4 className="titulo">Legal information</h4>
        <div>
          <Link to="/terms-and-conditions" className="Link">
            Terms and Conditions
          </Link>
        </div>
      </div>
      <hr/>
      <div className="Info">
        <h3>
          Grupo 10 © |{" "}
          <a href="https://www.soyhenry.com/" target="_blank">
            {" "}
            Soy Henry ©
          </a>{" "}
          | 2021{" "}
        </h3>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
