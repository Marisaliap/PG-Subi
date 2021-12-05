import React, { useContext } from 'react';
import { useEffect } from 'react';
import Logo from '../img/logo.png';
import autitos from '../img/autitos.png';
import { Profile } from './Profile';
import SearchUserByName from './SearchUserByName';
import { useSelector, useDispatch } from 'react-redux';
import Auth from './Auth';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import { getUserDetail } from '../actions';
import { BsPlusCircle } from 'react-icons/bs';
import '../Sass/Styles/NavBar.scss';
import es from './../img/spain.png';
import en from './../img/united-kingdom.png';
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
    <header className="bg-white top-0 flex justify-between items-center px-5 py-3 border-green-500 border-b md:px-20 md:py-8 shadow-xl w-screen">
      <NavLink to="/home">
        <img className="md:hidden" src={autitos} alt="" />
        <img className="hidden w-60 md:block lg:w-96" src={Logo} alt="" />
      </NavLink>
      <nav className="flex items-center justify-end">
        {/* <NavLink to="/route-list" className="searchContainerItem">
        <button className="button">Route List</button>
      </NavLink> */}
        <ul className="">
          <li className="inline-block mx-2 align-middle">
            <NavLink
              className="flex"
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
              <BsPlusCircle className="text-green-500 w-6 h-full" />
              <h3 className="hidden lg:block text-green-500 ml-2 font-semibold">
                <FormattedMessage
                  id="navBar.post"
                  defaultMessage="Post a Trip"
                />
              </h3>
            </NavLink>
          </li>

          <li className="text-green-500 inline-block mx-2 align-middle">|</li>

          <li className="inline-block p-0 my-0 mx-2 align-middle">
            <Profile />
          </li>
        </ul>

        {/* <SearchUserByName /> */}

        {/* <Auth /> */}
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
