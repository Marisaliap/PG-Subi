const initialState = {
    routes : [],
    cities : [],
}


function rootReducer (state = initialState, action) {
    switch(action.type) {
        case "GET_ROUTES":
            return {
                ...state,
                routes: action.payload  //en mi estado routes que en un principio es un array vacio manda todo lo que te mande la accion getRoutes
            }
        case "GET_CITIES":
            return {
                ...state,
                cities: action.payload
            }   
        default: return state;  
    }
}




export default rootReducer;