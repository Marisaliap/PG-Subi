const initialState = {
  suggestions1: [], // resultados de la primera ciudad del searchbar
  suggestions2: [], // resultados de la segunda ciudad del searchbar
  routePostInfo: {}, // información del formulario para crear una ruta
  route: [], //información de la ruta(coordenadas de todo el viaje)
  user: [],
  users: [],
  getRoutes: [],
  car: [],
  routeById: [],
  routeFromDb: [],
  usuariosRegistrados: [],
  // ---------------< filters rami>----------------------------------

  restriction: "",
  order: "",
  filtersRoute: [],

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
    case "GET_USER_DETAIL":
      return {
        ...state,
        user: action.payload,
        car: action.payload.cars[0],
      };
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
        user: action.payload,
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
    case "EDIT_CAR":
      return {
        ...state,
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
    case "GET_ROUTE_FROM_DB":
      return {
        ...state,
        routeFromDb: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
