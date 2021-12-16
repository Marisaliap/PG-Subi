import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allRoutes } from "../actions";
import CardRoute from "./CardRoute";
import CardUser from "./CardUser";
import NavBarFilter from "./NavBarFilter";
import "../Sass/Styles/RouteDetails.scss";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

const RouteDetails = ({ match }) => {
  const dispatch = useDispatch();

  const { getRoutes } = useSelector((state) => state);
  const { filteredRouteFromDb } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allRoutes());
    window.scrollTo(0, 0);
  }, []); // eslint-disable-line
  // ------------------<paged>------------------

  const [currentPage, setCurrentPage] = useState(1);
  const [routesPerPage, setRoutesPerPage] = useState(6); // eslint-disable-line
  const indexOfLastRoute = currentPage * routesPerPage;
  const indexOffirstRoute = indexOfLastRoute - routesPerPage;
  const currentRoutes =
    filteredRouteFromDb.length > 0 || match.params.id
      ? filteredRouteFromDb.slice(indexOffirstRoute, indexOfLastRoute)
      : getRoutes.slice(indexOffirstRoute, indexOfLastRoute);

  const pagedTotal = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // ------------------<pagedEnd>------------------

  return (
    <div className="RouteDetails">

      <Link to="/home">
        <button className="buttonBlue"><FormattedMessage id= "routedetails.home"/></button>
      </Link>
      
      <NavBarFilter places={match.params.id} currentRoutes={currentRoutes} />

      <div className="RouteCardContainer">
        {currentRoutes.length === 0 ? (
          <h1>No rutes match those filters</h1>
        ) : (
          currentRoutes.map((route, i) => (
            <Link
              className="link"
              id="link"
              to={`/route/${route.id}`}
              key={i + "L"}
            >
              <div className="RouteCard">
                {route.users && (
                  <div>
                    <CardUser
                      photo={route.users.length > 0 && route.users[0].photo}
                      name={route.users.length > 0 && route.users[0].name}
                      lastName={
                        route.users.length > 0 && route.users[0].lastName
                      }
                      genre={route.users.length > 0 && route.users[0].genre}
                      age={route.users.length > 0 && route.users[0].age}
                      email={
                        route.users.length > 0 &&
                        route.users[0].UserRoutes.userEmail
                      }
                      calification={
                        route.users.length > 0 && route.users[0].calification
                      }
                      key={i + "CU"}
                    />
                  </div>
                )}

                <hr />

                <CardRoute
                  origin={route.originName}
                  destiny={route.destinyName}
                  infoRoute={route.infoRoute}
                  date={route.date}
                  hours={route.hours}
                  place={route.place}
                  key={i + "CR"}
                  price={route.price}
                />
              </div>
            </Link>
          ))
        )}
      </div>
      <div>
        <Pagination
          routesPerPage={routesPerPage}
          getRoutes={
            filteredRouteFromDb.length > 0 || match.params.id
              ? filteredRouteFromDb.length
              : getRoutes.length
          }
          pagedTotal={pagedTotal}
        />
      </div>
    </div>
  );
};
export default RouteDetails;
