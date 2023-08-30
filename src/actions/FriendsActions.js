export const GET_FRIENDS = "GET_FRIENDS";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";
export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

import { axiosWithAuth } from "../utils/axiosAuth";

export const getFriends = () => (dispatch) => {
  dispatch({ type: GET_FRIENDS });
  axiosWithAuth()
    .get("http://localhost:9000/api/friends")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_FRIENDS_FAILURE, payload: err });
    });
};

export const addFriend = (friend) => (dispatch) => {
  dispatch({ type: ADD_FRIEND });
  axiosWithAuth()
    .post("http://localhost:9000/api/friends", friend)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_FRIEND_FAILURE, payload: err });
    });
};

export const deleteFriend = (id) => (dispatch) => {
  dispatch({ type: DELETE_FRIEND });
  axiosWithAuth()
    .delete(`http://localhost:9000/api/friends/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: DELETE_FRIEND_FAILURE, payload: err });
    });
};
