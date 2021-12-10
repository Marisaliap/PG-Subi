import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Sass/Styles/LandingPage.scss';
import img from '../img/logo.png';
import { FormattedMessage } from 'react-intl';
import styles from "../styles/LandingPageTwo.css";

export default function LandingPage2() {
    return (
      <div className={styles.landingpage}>
          <div className={styles.bkg}>
         {/*  <img className="logo" src={img} alt="Logo" /> */}
         <div className={styles.containerAll}>
         <div className={styles.container}>
            <div className={styles.buttonPosition}>
            <NavLink to ="/home">
                <button className={styles.button}>
                <FormattedMessage id="landing.enter" defaultMessage="Enter" />
                </button>
            </NavLink>
            </div>
            </div>
            </div>
        </div>
        </div> 
    )
} 


/* export default function LandingPage() {
  
  return (
    <div className="LandingPage">
      <div className="cosas">
        <img className="logo" src={img} alt="Logo" />
        <NavLink to="/home">
          <button className="button">
            <FormattedMessage id="landing.enter" defaultMessage="Enter" />
          </button>
        </NavLink>
      </div>
    </div>
  );
} */
