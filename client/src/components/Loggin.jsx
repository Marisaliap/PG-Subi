import React, { useRef } from 'react'
// const socket=io()

export default function Loggin({ onIdSubmit }) {
    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> enter your id</label>
                <input type="text" ref={idRef} />
            </form>
            <button type="submit" className="btn btn-default mr-2">login</button>
            <button variant="secondary">create id</button>
        </div>
    )
}
