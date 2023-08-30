import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  HANDLE_CHANGE,
} from "../actions/LoginActions";

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  success: false,
  error: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case LOGIN:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        username: "",
        password: "",
      };
    default:
      return state;
  }
};
