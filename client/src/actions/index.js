import axios from "axios";


export function getRoutes(){
    return async function(dispatch) {
        var json = await axios.get ("http://localhost:3003/maps"); //acá sucede la conexión con el back!! :)
        return dispatch ({
            type: "GET_ROUTES",
            payload: json.data

        })
    }
}


export function getCities(){
    return async function(dispatch) {
        var json = await axios ("http://localhost:3003/maps/location");
        return dispatch ({
            type: "GET_CITIES",
            payload: json.data
        })
    }
}