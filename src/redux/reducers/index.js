import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import AppReducer from "./AppReducer";
import ListContactReducer from "./ListContactReducer";
import ListTalkReducer from "./ListTalkReducer";
import ListChatReducer from "./ListChatReducer";

export default combineReducers({
  AuthReducers,
  AppReducer,
  ListContactReducer,
  ListTalkReducer,
  ListChatReducer
});
