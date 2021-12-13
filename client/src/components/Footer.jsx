import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Sass/Styles/Footer.scss';
import { FormattedMessage } from 'react-intl';
import { langContext } from './../context/langContext.js';
import es from './../img/spain.png';
import en from './../img/united-kingdom.png';
import SubFooter from './SubFooter.jsx';
import {useSelector} from 'react-redux';

export default function Footer() {
  const idioma = useContext(langContext);
  const{user}=useSelector(state => state)
  return (
    <div className="los2footers">
      <div className="Footer">
        {/* <hr classname="lineahr" /> */}
        <div></div>
        <div>
          <h4 className="titulo">
            <FormattedMessage id="footer.about" defaultMessage="About" />
          </h4>
          <div className="cosasAbajo">
            <Link
              to="/aboutus"
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="footer.aboutUs" defaultMessage="About Us" />
            </Link>
          </div>
        </div>
        <hr classname="lineahr" />
        <div className="helpcita">
          <h4 className="titulo">
            <FormattedMessage id="footer.help" defaultMessage="Help" />
          </h4>
          <div className="help">
            <Link to="/Faq" className="Link" target="_blank" rel="noreferrer">
              <FormattedMessage id="footer.faq" defaultMessage="FAQ" />
            </Link>
            <Link
              to="/recommendations"
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage
                id="footer.rec"
                defaultMessage="Recommendations"
              />
            </Link>
          </div>
        </div>
        <hr classname="lineahr" />
        <div className="legal">
          <h4 className="titulo">
            <FormattedMessage
              id="footer.legal"
              defaultMessage="Legal Information"
            />
          </h4>
          <div className="cosasAbajo">
            <Link
              to="/terms-and-conditions"
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage
                id="footer.terms"
                defaultMessage="Terms and Conditions"
              />
            </Link>
            <Link
              to="/privacy-policy"
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage
                id="footer.privacy"
                defaultMessage="Privacy Policy"
              />
            </Link>
            <Link
              to="/cookies-policy"
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage
                id="footer.cookies"
                defaultMessage="Cookies Policy"
              />
            </Link>
          </div>
        </div>
        <hr classname="lineahr" />
        <div className="Info">
          <h3>
            <FormattedMessage
              id="footer.group10"
              defaultMessage="Group 10 © |"
            />{' '}
            <a
              href="https://www.soyhenry.com/"
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Soy Henry ©
            </a>{" "}
             2021{" "}
          </h3>
        </div>
        <hr classname="lineahr" />
        <div className="languages">
          <h4 className="titulo">
            <FormattedMessage id="footer.lang" defaultMessage="Language" />
          </h4>
          <div className="cosasAbajo">
            <button
              className="botonBandera"
              onClick={() => idioma.establecerLenguaje('es-AR')}
            >
              <img className="banderas" src={es} alt="" />
            </button>
            <button
              className="botonBandera"
              onClick={() => idioma.establecerLenguaje('en-US')}
            >
              <img className="banderas" src={en} alt="" />
            </button>
          </div>
        </div>
      </div>
      <SubFooter />
    </div>
  );
}
