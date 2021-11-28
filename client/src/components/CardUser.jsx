import React from 'react'
import img from '../img/photoDefault.jpg'
export default function CardUser({photo, name, lastName, genre, age, calification}) {
    return (
        <div>
        <h4>User Data</h4>
        <img src={img} style={{width:'150px'}} alt=''/>  {/*agregar url de img*/}
        <h5>{name}</h5>
        <h5>{lastName}</h5>
        <h5>{genre}</h5>
        <h5>{age}</h5>
        <h5>{calification}</h5>            
        </div>
    )
}
