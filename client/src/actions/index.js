import axios from "axios";

export function getSuggestions(input) {
  return function (dispatch) {
    axios.get("http://localhost:3001/maps?name=" + input).then((cities) => {
      dispatch({
        type: "GET_SUGGESTIONS",
        payload: cities.data,
      });
    });
  };
}

export function getSuggestions2(input) {
  return function (dispatch) {
    axios.get("http://localhost:3001/maps?name=" + input).then((cities) => {
      dispatch({
        type: "GET_SUGGESTIONS2",
        payload: cities.data,
      });
    });
  };
}

export function getRoute(long1, lat1, long2, lat2) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/maps/?long1=${long1}&lat1=${lat1}&long2=${long2}&lat2=${lat2}`
      );

      return dispatch({
        type: "GET_ROUTE",
        payload: response.data,
      });
    } catch (error) {}
  };
}

export function getUserProfile(id) {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`http://localhost:3001/user/${id}`))
        .data;
      return dispatch({
        type: "GET_USER_PROFILE",
        payload: response,
      });
    } catch (error) {}
  };
}
export function getUserDetail(id) {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`http://localhost:3001/user/${id}`))
        .data;
      return dispatch({
        type: "GET_USER_DETAIL",
        payload: response,
      });
    } catch (error) {}
  };
}
export function getAllUser() {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`http://localhost:3001/user`)).data;
      return dispatch({
        type: "GET_ALL_USER",
        payload: response,
      });
    } catch (error) {}
  };
}

export function getUserAdmin(id) {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`http://localhost:3001/user/${id}`))
        .data;
      return dispatch({
        type: "GET_USER_ADMIN",
        payload: response,
      });
    } catch (error) {}
  };
}

export function getRouteById(id) {
  return async function (dispatch) {
    try {
      const response = (
        await axios.get(`http://localhost:3001/maps/route/` + id)
      ).data;

      return dispatch({
        type: "GET_ROUTE_BY_ID",
        payload: response,
      });
    } catch (error) {}
  };
}

export function getUserByName(name) {
  return async function (dispatch) {
    try {
      const response = (
        await axios.get(`http://localhost:3001/user/?name=` + name)
      ).data;

      return dispatch({
        type: "GET_USER_BY_NAME",
        payload: response,
      });
    } catch (error) {}
  };
}

export function getUserById(id) {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`http://localhost:3001/user/${id}`))
        .data;
      return dispatch({
        type: "GET_USER_BY_ID",
        payload: response,
      });
    } catch (error) {}
  };
}

export function getAllUsers() {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`http://localhost:3001/user/`)).data;

      return dispatch({
        type: "GET_ALL_USERS",
        payload: response,
      });
    } catch (error) {}
  };
}

export function editUser(id, info) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `http://localhost:3001/user/` + id,
        info
      );

      return dispatch({
        type: "EDIT_USER",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getId(id) {
  return {
    type: "ID",
    payload: id,
  };
}

export function deleteUser(id) {
  return async function (dispatch) {
    try {
      const response = (await axios.delete(`http://localhost:3001/user/` + id))
        .data;
      return dispatch({
        type: "DELETE_USER",
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllCars() {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`http://localhost:3001/car/`)).data;

      return dispatch({
        type: "GET_CARS",
        payload: response,
      });
    } catch (error) {}
  };
}

export function editCar(id, info) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`http://localhost:3001/car/` + id, info);

      return dispatch({
        type: "EDIT_CAR",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getRouteFromDb(originName, destinyName, date, place, order, restriction) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/maps/route?from=${originName}&to=${destinyName}&date=${date}&place=${place}&order=${order ? order : ""
      }&restriction=${restriction ? restriction : ""}`
      );
        console.log(response.data, 'soy data')
      return dispatch({
        type: "GET_ROUTE_FROM_DB",
        payload: response.data,
      });
    } catch (error) {}
  };
}

export function getSearchParams(originName, destinyName, date, place) {
      return ({
        type: "GET_SEARCH_PARAMS",
        payload: {
          originName,
          destinyName,
          date,
          place
        },
      });
    
}
// -----------------------------< filters >----------------------------------
// export function filterBySmoke(payload) {
//   return {
//     type: "FILTER_BY_SMOKE",
//     payload,
//   };
// }

// export function filterByPets(payload) {
//   return {
//     type: "FILTER_BY_PETS",
//     payload,
//   };
// }

export function orderByRestriction(restriction) {
  return {
    type: "FILTER",
    payload: restriction,
  };
}

export function filterByTwoPeopleBehind(payload) {
  return {
    type: "FILTER_BY_PEOPLE_BEHIND",
    payload,
  };
}
export function orderByDistance(payload) {
  return {
    type: "ORDER_BY_DISTANCE",
    payload,
  };
}
// ----------------------------------------------------------------------

export function postUser(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/user/add`,
        payload
      );
      return dispatch({
        type: "POST_USER",
        payload: response.data,
      });
    } catch (error) {}
  };
}

export function postCar(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/car/add`,
        payload
      );
      return dispatch({
        type: "POST_CAR",
        payload: response.data,
      });
    } catch (error) {}
  };
}

export function postMejorasYReclamos(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/suggestionbox/add`,
        payload
      );
      return dispatch({
        type: "POST_RECLAMOSYMEJORAS",
        payload: response.data,
      });
    } catch (error) {}
  };
}

export function getMejorasYReclamos(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/suggestionbox/`,
        payload
      );
      return dispatch({
        type: "GET_RECLAMOSYMEJORAS",
        payload: response.data,
      });
    } catch (error) { }
  };
}

export function deleteReclamos(id) {
  return async function (dispatch) {
    try {
      const response = ( await axios.delete(
        `http://localhost:3001/suggestionbox/${id}`
      )).data;
      return dispatch({
        type: "DELETE_RECLAMOSYMEJORAS",
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postRoute(routeInfo) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/maps/route/add`,
        routeInfo
      );
      return dispatch({
        type: "POST_ROUTE",
        payload: response.data,
      });
    } catch (error) {}
  };
}
export function RoutePostInfo(info) {
  return {
    type: "ROUTE_POST_INFO",
    payload: info,
  };
}

export function deleteRoute() {
  return {
    type: "DELETE_ROUTE",
  };
}
export function deleteRouteFromDb(param) {
  console.log(param)
  return {
    type: "DELETE_ROUTE_FROM_DB",
  };
}
export function deleteOrder(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`http://localhost:3001/order/` + id);
      return {
        type: "DELETE_ORDER",
      };
    } catch (error) {}
  };
}

export function getOrder(order) {
  return {
    type: "ORDER",
    payload: order,
  };
}

export function getOrderDetails() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/order/`);
      return dispatch({
        type: "GET_ORDER_DETAILS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function allRoutes(order, restriction) {
  return async function (dispatch) {
    try {
      const response = (
        await axios.get(
          `http://localhost:3001/maps/route?order=${
            order ? order : ""
          }&restriction=${restriction ? restriction : ""}`
        )
      ).data;
      return dispatch({
        type: "GET_ALL_ROUTE_INFO",
        payload: response,
      });
    } catch (error) {}
  };
}

export function setPost(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/user/post`,
        payload
      );
      return dispatch({
        type: "SET_POST",
        payload: response.data,
      });
    } catch (error) {}
  };
}

export function userPost(id) {
  console.log("id=>", id);
  return async function (dispatch) {
    try {
      const response = (
        await axios.get(`http://localhost:3001/user/post/${id}`)
      ).data;
      return dispatch({
        type: "USER_POST",
        payload: response,
      });
    } catch (error) {}
  };
}

export function putRatingUser(id) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `http://localhost:3001/user/rating/${id}`
      );
      return dispatch({
        type: "PUT_RATING_USER",
        payload: response.data,
      });
    } catch (error) {}
  };
}

export function getChatOtro(id) {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`http://localhost:3001/chat/${id}`))
        .data;
      return dispatch({
        type: "GET_CHAT_OTRO",
        payload: response,
      });
    } catch (error) {}
  };
}

export function getChatPropio(id) {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`http://localhost:3001/chat/${id}`))
        .data;
      return dispatch({
        type: "GET_CHAT_PROPIO",
        payload: response,
      });
    } catch (error) {}
  };
}

export function postChat(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/chat/add`,
        payload
      );
      return dispatch({
        type: "POST_CHAT",
        payload: response.data,
      });
    } catch (error) {}
  };
}
