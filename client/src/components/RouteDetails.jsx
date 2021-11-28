import React from "react";
import { useSelector, dispatch } from "react-redux";
import {CardRoute} from "./CardRoute";
import {CardUser} from "./CardUser";
// import {CardCar} from "./CardCar";


export default RouteDetails = () => {
    const { allroute, } = useSelector(state => state);

    return (
        <>
            <CardUser
                photo={user.photo}
                name={user.name}
                calification = { user.calification }
            />
            <CardRoute
            origin={users.origin}
            destiny={users.destiny}
            infoRoute={users.infoRoute}
            price={users.price}

            />
          
        </>
    )
}