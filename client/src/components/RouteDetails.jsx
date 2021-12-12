import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allRoutes } from "../actions";
import CardRoute from "./CardRoute";
import CardUser from "./CardUser";
import NavBarFilter from "./NavBarFilter";
import "../Sass/Styles/RouteCardContainer.scss";
import "../Sass/Styles/RouteCard.scss";
import Pagination from "./Pagination" ;
// import {CardCar} from "./CardCar";
import { Link } from "react-router-dom";

const RouteDetails = () => {
  const dispatch = useDispatch();

  const { getRoutes } = useSelector((state) => state);
  useEffect(() => {dispatch(allRoutes())}, []);
  // useEffect(() =>  dispatch(getOrder()), [getRoutes.length]);

  // ------------------<paged>------------------

  const [currentPage, setCurrentPage] = useState(1)      //le paso el estado local con la primer página que se renderiza
  const [ routesPerPage, setRoutesPerPage ] = useState (15)                   //cuántas rutas quiero por página
  const indexOfLastRoute = currentPage * routesPerPage       //cuando empieza será 8 
  const indexOffirstRoute = indexOfLastRoute - routesPerPage   // 0
  const currentRoutes = getRoutes.slice(indexOffirstRoute, indexOfLastRoute)     //slice toma una porción del arreglo dependiendo lo que le estoy pasando por parámetro

  const pagedTotal = (pageNumber) => {                      
    setCurrentPage(pageNumber)                        //acá el paginado va a setear la pagina en el numero de pagina que se vaya clickeando
}                                                     //cuando setea la página los índices cambian y el slide se va modificando
console.log(currentRoutes, "soy currentRoutes")
// ------------------<pagedEnd>------------------

  return (
    <div className="RouteDetails">
      <NavBarFilter />

      <div className="RouteCardContainer">
        {/* getRoutes */currentRoutes.map((route, i) => (
          <Link className="link" id="link" to={`/route/${route.id}`}>
            <div className="RouteCard">
              {console.log(route.users)}{route.users && (
                <CardUser
                  photo={route.users.length > 0 && route.users[0].photo}
                  name={route.users.length > 0 && route.users[0].name}
                  lastName={route.users.length > 0 && route.users[0].lastName}
                  genre={route.users.length > 0 && route.users[0].genre}
                  age={route.users.length > 0 && route.users[0].age}
                  email={route.users.length > 0 && route.users[0].UserRoutes.userEmail}
                  calification={
                    route.users.length > 0 && route.users[0].calification
                  }
                  key={i}
                />
              
              )}
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
          routesPerPage= { routesPerPage }
          getRoutes= { getRoutes.length }                     //le paso getRoutes.length porque necesito un valor numérico
          pagedTotal= { pagedTotal }
        />
      </div>
    </div>
  );
};
export default RouteDetails;
