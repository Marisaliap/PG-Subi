const initialState = {
  suggestions1: [], // resultados de la primera ciudad del searchbar
  suggestions2: [], // resultados de la segunda ciudad del searchbar
  routePostInfo: {}, // información del formulario para crear una ruta
  route: [], //información de la ruta(coordenadas de todo el viaje)
  user: [],
  users: [],
  getRoutes: [],
  car: [],
  userpro: [],
  carpro: [],
  routeById: [],
  routeFromDb: [],
  setPost:[],
  userPost:[],
  usuariosRegistrados: [],
  userBuscado: [],
  orderDetails: [],
  carMatch: [],
  filteredRouteFromDb: [],
  //-------------------------< admin store >------------------------ 
  userAdmin: [],
  id: "",
  carAdmin: [],
  // ---------------< filters rami>----------------------------------

  restriction: "",
  order: "",
  filtersRoute: [],
  userDeleted: "",

  reclamosymejoras: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SUGGESTIONS":
      return {
        ...state,
        suggestions1: action.payload.cities,
      };
    case "MATCHED_CITY":
      return {
        ...state,
        matched: action.payload,
      };
    case "GET_SUGGESTIONS2":
      return {
        ...state,
        suggestions2: action.payload.cities,
      };
    case "GET_ROUTE":
      return {
        ...state,
        route: action.payload,
      };
    case "GET_USER_PROFILE":
      return {
        ...state,
        userpro: action.payload,
        carpro: action.payload.cars[0],
      };
    case "GET_USER_DETAIL":
      return {
        ...state,
        user: action.payload,
        car: action.payload.cars[0],
      };
      //  --------------------------------------< admin reducer>----------------------

    case "GET_ORDER_DETAILS":
      return {
        ...state,
        orderDetails: action.payload
      };
    case "GET_USER_ADMIN":
      return {
        ...state,
        userAdmin: action.payload,
        carAdmin: action.payload.cars[0]
        };
  

    case "ID" :
      return {
        ...state,
        id: action.payload
      }
      // ______________________________________________________________________--________

    case "GET_ALL_ROUTE_INFO":
      return {
        ...state,
        getRoutes: action.payload,
      };
    case "POST_CAR":
      return {
        ...state,
        car: action.payload,
      };
    case "POST_USER":
      return {
        ...state,
        userpro: action.payload[0],
      };
    case "POST_RECLAMOSYMEJORAS":
      return {
        ...state,
        reclamosymejoras: action.payload,
      };
    case "GET_USER_BY_NAME":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_USER_BY_ID":
      return {
        ...state,
        userBuscado: action.payload,
      };
    case "GET_ALL_USERS":
      return {
        ...state,
        usuariosRegistrados: action.payload,
      };
    case "EDIT_USER":
      return {
        ...state,
        user: [action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        userDeleted: [action.payload]
      }
    case "EDIT_CAR":
      return {
        ...state,
      };
    case "GET_CARS":
      return {
        ...state,
        carMatch: action.payload,
      };
    // -----------------------------< filters >----------------------------------

    case "RESTRICTION":
      return {
        ...state,
        restriction: action.payload,
      };

    case "ORDER":
      return {
        ...state,
        order: action.payload,
      };

    case "ORDER_BY_DISTANCE":
      return {
        ...state,
        route: action.payload,

        // case "FILTER_BY_SMOKE":
        //   return {
        //     ...state,
        //     route: action.payload,
        //   };

        // case "FILTER_BY_PETS":
        //   return {
        //     ...state,
        //     route: action.payload,
        //   };

        // ----------------------------------------------------------------------------
      };
    case "DELETE_ROUTE":
      return {
        ...state,
        route: [],
      };
      case "DELETE_ROUTE_FROM_DB":
      return {
        ...state,
        routeFromDb: [],
        filteredRouteFromDb: []
      };
    case "ROUTE_POST_INFO":
      return {
        ...state,
        routePostInfo: action.payload,
      };
    case "GET_ROUTE_BY_ID":
      return {
        ...state,
        routeById: action.payload,
      };
    case "GET_ROUTE_FROM_DB": {
  
      if (state.routeFromDb.length === 0 && action.payload.length > 0) {
        return {
          ...state,
          routeFromDb: action.payload,
          filteredRouteFromDb: action.payload
        };
      } if ( action.payload.length === 0) {
        return {
          ...state,
          filteredRouteFromDb: [...state.routeFromDb]
        }} 
        return {
          ...state,
          filteredRouteFromDb: action.payload,
            };
           
      };
      case "SET_POST":
      return {
        ...state,
        setPost: action.payload,
      };
      case "USER_POST":
      return {
        ...state,
        userPost: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
