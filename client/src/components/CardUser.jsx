import React from 'react'

export default function CardUser({photo, name, lastName, genre, age, calification}) {
    return (
        <div>
        <h1>User Data</h1>
        <h2>{photo}</h2>
        <h2>{name}</h2>
        <h2>{lastName}</h2>
        <h2>{genre}</h2>
        <h2>{age}</h2>
        <h2>{calification}</h2>            
        </div>
    )
}
