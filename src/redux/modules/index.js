import { combineReducers } from "redux";

import dashboard from "./dashboard";
import contacts from "./contacts";

export default combineReducers({
  dashboard,
  contacts
});
