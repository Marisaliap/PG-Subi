import React from 'react';
//import { BsStar } from "react-icons/bs";
import RatingStar from "./RatingStar.jsx";

export default function CardPost({description, calification}) {
    return (
        <div>
        {/* <h2>{calification}<BsStar /></h2>*/}
        <RatingStar 
            rating={calification}
          />
        <h2>{description}</h2>
        </div>
    )
}