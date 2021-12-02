import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <br />
      <br />
      <div>
        <h4 className="titulo">Language:</h4>
        <div className="cosasAbajo">SELECT idiomas</div>
      </div>
      <hr classname="lineahr" />
      <div>
        <h4 className="titulo">About</h4>
        <div className="cosasAbajo">
          <Link to="/aboutus" className="Link" target="_blank">
            About Us
          </Link>
        </div>
      </div>
      <hr classname="lineahr" />
      <div className="helpcita">
        <h4 className="titulo">Help</h4>
        <div className="help">
          <Link to="/Faq" className="Link" target="_blank">
            FAQs
          </Link>
          <Link to="/recommendations" className="Link" target="_blank">
            Recommendations
          </Link>
        </div>
      </div>
      <hr classname="lineahr" />
      <div className="legal">
        <h4 className="titulo">Legal information</h4>
        <div className="cosasAbajo">
          <Link to="/terms-and-conditions" className="Link" target="_blank">
            Terms and Conditions
          </Link>
          <Link to="/privacy-policy" className="Link" target="_blank">
            Privacy Policy
          </Link>
          <Link to="/cookies-policy" className="Link" target="_blank">
            Cookies Policy
          </Link>
        </div>
      </div>
      <hr classname="lineahr" />
      <div className="Info">
        <h3>
          Grupo 10 © |{" "}
          <a href="https://www.soyhenry.com/" className="Link" target="_blank">
            {" "}
            Soy Henry ©
          </a>{" "}
          | 2021{" "}
        </h3>
      </div>
    </div>
  );
}
