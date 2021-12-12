import axios from "axios";

export function getSuggestions(input) {
  return function (dispatch) {
    axios.get("/maps?name=" + input).then((cities) => {
      dispatch({
        type: "GET_SUGGESTIONS",
        payload: cities.data,
      });
    });
  };
}

export function getSuggestions2(input) {
  return function (dispatch) {
    axios.get("/maps?name=" + input).then((cities) => {
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
        `/maps/?long1=${long1}&lat1=${lat1}&long2=${long2}&lat2=${lat2}`
      );

      return dispatch({
        type: "GET_ROUTE",
        payload: response.data,
      });
    } catch (error) { }
  };
}

export function getUserProfile(id) {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`/user/${id}`))
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
      const response = (await axios.get(`/user/${id}`)).data;
      return dispatch({
        type: "GET_USER_DETAIL",
        payload: response,
      });
    } catch (error) { }
  };
}
export function getAllUser() {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`/user`)).data;
      return dispatch({
        type: "GET_ALL_USER",
        payload: response,
      });
    } catch (error) { }
  };
}

export function getUserAdmin(id) {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`/user/${id}`))
        .data;
      return dispatch({
        type: "GET_USER_ADMIN",
        payload: response,
      });
    } catch (error) {}
  };
}

export function getAlluserpro(id) {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`/user/${id}`))
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
        await axios.get(`/maps/route/` + id)
      ).data;

      return dispatch({
        type: "GET_ROUTE_BY_ID",
        payload: response,
      });
    } catch (error) { }
  };
}

export function getUserByName(name) {
  return async function (dispatch) {
    try {
      const response = (
        await axios.get(`/user/?name=` + name)
      ).data;

      return dispatch({
        type: "GET_USER_BY_NAME",
        payload: response,
      });
    } catch (error) { }
  };
}

export function getUserById(id) {
  return async function (dispatch) {
    try {
      const response = (await axios.get(`/user/${id}`))
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
      const response = (await axios.get(`/user/`)).data;

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
        `/user/` + id,
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
      const response = ( await axios.delete(
        `/user/` + id
      )).data;
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
      const response = (await axios.get(`/car/`)).data;

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
      const response = await axios.put(`/car/` + id, info);

      return dispatch({
        type: "EDIT_CAR",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getRouteFromDb(originName, destinyName, date, place) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `/maps/route?from=${originName}&to=${destinyName}&date=${date}&place=${place}`
      );

      return dispatch({
        type: "GET_ROUTE_FROM_DB",
        payload: response.data,
      });
    } catch (error) { }
  };
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
        `/user/add`,
        payload
      );
      return dispatch({
        type: "POST_USER",
        payload: response.data,
      });
    } catch (error) { }
  };
}

export function postCar(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `/car/add`,
        payload
      );
      return dispatch({
        type: "POST_CAR",
        payload: response.data,
      });
    } catch (error) { }
  };
}

export function postMejorasYReclamos(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `/suggestionbox/add`,
        payload
      );
      return dispatch({
        type: "POST_RECLAMOSYMEJORAS",
        payload: response.data,
      });
    } catch (error) { }
  };
}

export function postRoute(routeInfo) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/maps/route/add`, routeInfo);
      return dispatch({
          type: "POST_ROUTE",
          payload: response.data,
        });
      }
    catch (error) {
      console.log(error)
    }
  }
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
export function deleteOrder(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `/order/` + id,
      );
      return {
        type: "DELETE_ORDER",
      };
    } catch (error) { }
  };
 
}


export function getOrder(order) {
  return {
    type: "ORDER",
    payload: order,
  };
}

export function getOrderDetails () {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `/order/`,
      );
      return dispatch({
        type: "GET_ORDER_DETAILS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error)
    }
  }
}
export function allRoutes(order, restriction) {
  return async function (dispatch) {
    try {
      const response = (
        await axios.get(
          `/maps/route?order=${order ? order : ""
          }&restriction=${restriction ? restriction : ""}`
        )
      ).data;
      return dispatch({
        type: "GET_ALL_ROUTE_INFO",
        payload: response,
      });
    } catch (error) { }
  };
}

export function setPost(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `/user/post`,
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
  return async function (dispatch) {
    try {
      const response = (await axios.get(`/user/post/${id}`))
        .data;
      return dispatch({
        type: "USER_POST",
        payload: response,
      });
    } catch (error) {}
  };
}

export function putRatingUser(id){
  return async function (dispatch) {
    try {
      const response = await axios.put(`/user/rating/${id}`)
      return dispatch({
        type: "PUT_RATING_USER",
        payload: response.data,
      });
    } catch (error) {}
  };
}
