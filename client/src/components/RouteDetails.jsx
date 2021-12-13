import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allRoutes, deleteRouteFromDb } from '../actions';
import CardRoute from './CardRoute';
import CardUser from './CardUser';
import NavBarFilter from './NavBarFilter';
import '../Sass/Styles/RouteDetails.scss';
import Pagination from './Pagination';
// import {CardCar} from "./CardCar";
import { Link } from 'react-router-dom';

const RouteDetails = ({ match }) => {
  const dispatch = useDispatch();

  const { getRoutes } = useSelector((state) => state);
  const { filteredRouteFromDb } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allRoutes());
  }, []);
  useEffect(() => {
    return () => {
      dispatch(deleteRouteFromDb('lala'));
    };
  }, []);

  // ------------------<paged>------------------

  const [currentPage, setCurrentPage] = useState(1);
  const [routesPerPage, setRoutesPerPage] = useState(6);
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
      <NavBarFilter places={match.params.id} currentRoutes={currentRoutes} />

      <div className="RouteCardContainer">
        {currentRoutes.map((route, i) => (
          <Link className="link" id="link" to={`/route/${route.id}`}>
            <div className="RouteCard">
              {console.log(route.users)}
              {route.users && (
                <CardUser
                  photo={route.users.length > 0 && route.users[0].photo}
                  name={route.users.length > 0 && route.users[0].name}
                  lastName={route.users.length > 0 && route.users[0].lastName}
                  genre={route.users.length > 0 && route.users[0].genre}
                  age={route.users.length > 0 && route.users[0].age}
                  email={
                    route.users.length > 0 &&
                    route.users[0].UserRoutes.userEmail
                  }
                  calification={
                    route.users.length > 0 && route.users[0].calification
                  }
                  key={i}
                />
              )}
              <hr />

              <hr />

              <CardRoute
                origin={route.originName}
                destiny={route.destinyName}
                infoRoute={route.infoRoute}
                date={route.date}
                hours={route.hours}
                place={route.place}
                key={i + 1}
                price={route.price}
              />
            </div>
          </Link>
        ))}
      </div>
      <div>
        <Pagination
          routesPerPage={routesPerPage}
          getRoutes={getRoutes.length}
          pagedTotal={pagedTotal}
        />
      </div>
    </div>
  );
};
export default RouteDetails;
