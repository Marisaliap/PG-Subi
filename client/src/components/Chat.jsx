import React, { useEffect, useRef, useState } from 'react';
import socket from './Socket';

const Chat = ({ nombre }) => {
    const [menssage, setMessage] = useState("");
    const [menssages, setMessages] = useState([]);

    useEffect(() => {
        socket.emit("conectado", nombre);
    }, [nombre])

    useEffect(() => {
        socket.on("messages", menssage => {
            setMessages([...menssages, menssage])
        });
        return () => {
            socket.off();
        }
    }, [menssages])

const divRef = useRef(null);
useEffect(() => {
    divRef.current.scrollIntoView({behavior: "smooth"});
})

    const submit = (e) => {
        e.preventDefault();
        socket.emit("message", nombre, menssage);
        setMessage("");
    }

    return (
        <div>
            <div style="width:50% min-height:50vh max-heigth:50vh overflow:scroll boder:2px solid black">
                {menssages.map((e,i) =><div key={i}><div>{e.nombre}</div><div>{e.menssage}</div></div>)}
                <div ref={divRef}></div>
            </div>
            <form onSubit={submit}>
                <label>escribe tu mensaje</label>
                <textarea name="" id="" cols="30" rows="10"
                    value={menssage}
                    onChange={e => setMessage(e.target.value)}>
                </textarea>
                <button>Send</button>
            </form>
        </div>
    )
}


export default Chat;
