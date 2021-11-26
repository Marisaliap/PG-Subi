import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Sass/Styles/LandingPage.scss';

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="LandingPageContainer">
        <h1 className="title">subiquetellevo</h1>
        <p className="paragraph">Una forma distinta de viajar.</p>
        <div></div>
        <NavLink to="/home">
          <button className="button">Ingresar</button>
        </NavLink>
      </div>
    </div>
  );
}
