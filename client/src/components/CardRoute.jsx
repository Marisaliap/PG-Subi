import React from 'react'

export default function CardRoute({origin, destiny, date, hours, place}) {
    return (
        <div>
        <h4>Route Data</h4>
        <h5>{origin}</h5>
        <h5>{destiny}</h5>
        <h5>{date}</h5>
        <h5>{hours}</h5>
        <h5>{place}</h5>            
        </div>
    )
}
