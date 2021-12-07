import React from 'react'

export default function CardPost({description, calification}) {
    return (
        <div>
        <h2>{calification}</h2>            
        <h2>{description}</h2>
        </div>
    )
}