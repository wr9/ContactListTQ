import { combineReducers } from "redux";

import picker from "./picker";
import search from "./search";
import contacts from "./contacts";

export default combineReducers({
  picker,
  search,
  contacts
});
