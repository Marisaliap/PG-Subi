const initialState = {
  suggestions1: [],
  suggestions2: [],
  routePostInfo: {},
  route: [],
  user: [],
  users: [],
  allRoutes: [],
  car:[]
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
      console.log(action.payload, 'SOY PAYLOAD')
      return {
        ...state,
        route: action.payload,
      };
    case "GET_USER_DETAIL":  
      return {
        ...state,
        user: action.payload,
      };
    case "GET_ALL_ROUTE_INFO":  
      return {
        ...state,
        allRoutes: action.payload,
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
    case "GET_USER_BY_NAME":
      return {
        ...state,
        users: action.payload,
      };
    case "FILTER_BY_SMOKE":
      return {
        ...state,
        route: action.payload,
      };
    case "FILTER_BY_PETS":
      return {
        ...state,
        route: action.payload,
      };
    case "FILTER_BY_PEOPLE_BEHIND":
      return {
        ...state,
        route: action.payload,
      };
    case "ORDER_BY_TIME":
      return {
        ...state,
        route: action.payload,
      };
    case "ORDER_BY_PRICE":
      return {
        ...state,
        route: action.payload,
      };
    case "ORDER_BY_DISTANCE":
      return {
        ...state,
        route: action.payload,
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
    default:
      return state;
  }
}

export default rootReducer;
