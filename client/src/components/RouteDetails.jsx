import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { allRoutes } from "../actions";
import CardRoute from "./CardRoute";
import CardUser from "./CardUser";
import "../Sass/Styles/RouteCardContainer.scss"
import "../Sass/Styles/RouteCard.scss"
// import {CardCar} from "./CardCar";
import { Link } from "react-router-dom"

const RouteDetails = () => {
    const dispatch = useDispatch();
    useEffect(() =>dispatch(allRoutes()), []);
    const { getRoutes} = useSelector(state => state);
    console.log( getRoutes);

    return (

        <div className='RouteCardContainer'>
        {getRoutes.map((route,i) => (
           <Link to={`/route/${route.id}`}  style={{textDecoration:'none'}}>
            <div className='RouteCard'>
               
            
            <CardUser
                photo={route.users[0].photo}
                name={route.users[0].name}
                calification = { route.users[0].calification }
                key={i}
            />
           
             <CardRoute
            origin={route.originName}
            destiny={route.destinyName}
            infoRoute={route.infoRoute}
            date={route.date}
            hours = { route.hours }
            place = {route.place}
            key={i+1}
            />
    
            </div>
            </Link>
        ))
        }
        </div>
    )
}
export default RouteDetails