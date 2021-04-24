import { combineReducers } from "redux";
import cellReducer from "./cellReducer";
import bundleReducer from "./bundleReducer";

const rootReducer = combineReducers({
  cell: cellReducer,
  bundle: bundleReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
