import React from 'react'

export default function CardRoute({origin, destiny, date, hours, place}) {
    return (
        <div>
        <h1>Route Data</h1>
        <h2>{origin}</h2>
        <h2>{destiny}</h2>
        <h2>{date}</h2>
        <h2>{hours}</h2>
        <h2>{place}</h2>            
        </div>
    )
}
