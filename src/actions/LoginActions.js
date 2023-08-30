export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

import axios from "axios";
import { Navigate } from "react-router-dom";

export const handleChange = (e) => {
  console.log(e.target.name, e.target.value);
  return { type: HANDLE_CHANGE, payload: e };
};

export const login = (credentials) => (dispatch) => {
  dispatch({ type: LOGIN });
  return axios
    .post("http://localhost:9000/api/login", credentials)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const logout = () => {
  return { type: LOGOUT };
};
