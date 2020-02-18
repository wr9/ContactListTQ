import { combineReducers } from "redux";

import picker from "./picker";
import search from "./search";

export default combineReducers({
  picker,
  search
});
