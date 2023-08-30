import {
  GET_FRIENDS,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
  ADD_FRIEND,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  DELETE_FRIEND,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
} from "../actions/FriendsActions";

const initialState = {
  friends: [],
  isLoading: false,
  error: "",
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        friends: action.payload,
      };
    case GET_FRIENDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_FRIEND:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        friends: action.payload,
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DELETE_FRIEND:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        friends: action.payload,
      };
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
