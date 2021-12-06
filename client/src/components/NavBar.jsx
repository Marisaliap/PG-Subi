import React, { useContext } from 'react';
import { useEffect } from 'react';
import autitos from '../img/autitos.png';
import Logo from '../img/logo.png';
import { Profile } from './Profile';
import SearchUserByName from './SearchUserByName';
import { useSelector, useDispatch } from 'react-redux';
import Auth from './Auth';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, NavLink } from 'react-router-dom';
import { getUserDetail } from '../actions';
import { BsPlusCircle } from 'react-icons/bs';
import '../Sass/Styles/NavBar.scss';
import { FormattedMessage } from 'react-intl';
import { langContext } from './../context/langContext.js';

export default function Nav() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const { user, isAuthenticated } = useAuth0();
  const id = isAuthenticated ? user.email : '';
  const idioma = useContext(langContext);

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [dispatch, id]);

  return (
    <header className="NavBar">
      <NavLink to="/home">
        <img className="autitos" src={autitos} alt="" />
        <img className="logo" src={Logo} alt="" />
      </NavLink>
      <nav>
        {/* <NavLink to="/route-list" className="searchContainerItem">
        <button className="button">Route List</button>
      </NavLink> */}
        <ul>
          <li>
            <NavLink
              className="postNavLink"
              to={
                !users.dni
                  ? '/register'
                  : users.name && users.cars.length === 0
                  ? '/car'
                  : users.name && users.cars[0].patent
                  ? '/route'
                  : ''
              }
            >
              <BsPlusCircle className="BsPlusCircle" />
              <h3>
                <FormattedMessage
                  id="navBar.post"
                  defaultMessage="Post a Trip"
                />
              </h3>
            </NavLink>
          </li>

          <li className="barrita">|</li>

          <li className="profile">
            <Profile />
          </li>
          <li>
            <Auth />
          </li>
        </ul>

        {/* <SearchUserByName /> */}

        {/* <div className="banderas">
            <button onClick={() => idioma.establecerLenguaje("es-AR")}>
            <img src={es} alt=""></img>
            </button>
            <button onClick={() => idioma.establecerLenguaje("en-US")}>
            <img src={en} alt=""></img>
            </button>
          </div> */}
      </nav>
    </header>
  );
}
