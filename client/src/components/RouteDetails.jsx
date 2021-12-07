import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allRoutes, getOrder } from '../actions';
import CardRoute from './CardRoute';
import CardUser from './CardUser';
import NavBarFilter from './NavBarFilter';
import '../Sass/Styles/RouteCardContainer.scss';
import '../Sass/Styles/RouteCard.scss';
// import {CardCar} from "./CardCar";
import { Link } from 'react-router-dom';

const RouteDetails = () => {
  const dispatch = useDispatch();

  const { getRoutes } = useSelector((state) => state);
  useEffect(() => dispatch(allRoutes()), []);
  // useEffect(() =>  dispatch(getOrder()), [getRoutes.length]);
  console.log(getRoutes)
  return (
    <div className="RouteDetails">
      <NavBarFilter />
    

      <div className="RouteCardContainer">
        {
          getRoutes.map((route, i) => (
            <Link className="link" to={`/route/${route.id}`} >
              <div className="RouteCard">
              
               {
                 route.users && <CardUser
                  photo={ route.users.length > 0 && route.users[0].photo}
                  name={route.users.length > 0 && route.users[0].name}
                  lastName={route.users.length > 0 && route.users[0].lastName}
                  genre={route.users.length > 0 && route.users[0].genre}
                  age={route.users.length > 0 && route.users[0].age}
                  calification={route.users.length > 0 && route.users[0].calification}
                  key={i}
                />
              }
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
          ))
        }
      </div>
    </div>
  );
};
export default RouteDetails;
