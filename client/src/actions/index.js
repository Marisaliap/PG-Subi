import axios from "axios";

export function getSuggestions(input) {
  return function (dispatch) {
    axios
      .get("http://localhost:3003/maps/location/?name=" + input)
      .then((cities) => {
        dispatch({
          type: "GET_SUGGESTIONS",
          payload: cities.data,
        });
      });
  };
}
export function getSuggestions2(input) {
  return function (dispatch) {
    axios
      .get("http://localhost:3003/maps/location/?name=" + input)
      .then((cities) => {
        dispatch({
          type: "GET_SUGGESTIONS2",
          payload: cities.data,
        });
      });
  };
}
export function getRoute(long1, lat1, long2, lat2) {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3003/maps/?long1=${long1}&lat1=${lat1}&long2=${long2}&lat2=${lat2}`
      )
      .then((route) => {
        dispatch({
          type: "GET_ROUTE",
          payload: route.data,
        });
      });
  };
}

export function matchedCity([city]) {
  return {
    type: "MATCHED_CITY",
    payload: city,
  };
}

export function deleteRoute() {
  return {
    type: "DELETE-ROUTE",
  };
}
