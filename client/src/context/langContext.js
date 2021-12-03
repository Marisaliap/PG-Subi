import React, { useState} from "react";
import MensajesIngles from "./../lang/en-US.json";
import MensajesEspanol from "./../lang/es-Ar.json";

const langContext = React.createContext();

const LangProvider = ({children}) => {
const [ mensajes, establecerMensajes] = useState(MensajesIngles);
const [ locale, establecerLocale] = useState("en-US");

const establecerLenguaje = (lenguaje) => {
    console.log("Cambiamos el lenguaje a", lenguaje );
}

    return (
        <langContext.Provider value= {{establecerLenguaje: establecerLenguaje}}> 
            {children}
        </langContext.Provider>
    );
}

export { LangProvider };
export default langContext;