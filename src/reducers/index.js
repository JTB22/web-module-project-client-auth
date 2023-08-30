import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { friendsReducer } from "./FriendsReducer";

export const rootReducer = combineReducers({
  loginReducer,
  friendsReducer,
});
