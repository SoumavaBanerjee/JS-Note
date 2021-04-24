import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// Testing
import { ActionType } from "./action-types";

export const Store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

Store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: "text",
  },
});

Store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: "code",
  },
});

Store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: "text",
  },
});
