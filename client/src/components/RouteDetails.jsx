import React from "react";

export default function RouteDetails({ name, image}) {
    return (
        <div> 
            <h3>{name}</h3>
            <img src={image} alt="img not found" width="250px" height="250px" />
        </div>
    )
}