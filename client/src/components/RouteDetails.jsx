import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { allRoutes } from "../actions";
import CardRoute from "./CardRoute";
import CardUser from "./CardUser";

// import {CardCar} from "./CardCar";


const RouteDetails = () => {
    const dispatch = useDispatch();
    useEffect(() =>dispatch(allRoutes()), []);
    const { getRoutes} = useSelector(state => state);
    console.log( getRoutes);

    return (

        <>
        {getRoutes.map((route,i) => (
            <div>
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
            key={i+1}
            />
            </div>
            
        ))
        }
        </>
    )
}
export default RouteDetails