const initialState = {
  suggestions1: [],
  suggestions2: [],
  matched: [],
  route: [],
  user: [],
  users: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SUGGESTIONS":
      return {
        ...state,
        suggestions1: action.payload,
      };
    case "MATCHED_CITY":
      return {
        ...state,
        matched: action.payload,
      };
    case "GET_USER_DETAIL":
      return {
        ...state,
        matched: action.payload,
      };
    case "GET_SUGGESTIONS2":
      return {
        ...state,
        suggestions2: action.payload,
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
      };
    case "POST_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "DELETE_ROUTE":
      return {
        ...state,
        route: [],
      };
    default:
      return state;
  }
}

export default rootReducer;
