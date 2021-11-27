import React from 'react'

export default function CardUser({photo, name, lastName, genre, age, calification}) {
    return (
        <div>
        <h4>User Data</h4>
        <h5>{photo}</h5>
        <h5>{name}</h5>
        <h5>{lastName}</h5>
        <h5>{genre}</h5>
        <h5>{age}</h5>
        <h5>{calification}</h5>            
        </div>
    )
}
