import produce from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { BundleState } from "../../interfaces";

const initialState: BundleState = {};

const reducer = produce(
  (state: BundleState = initialState, action: Action): BundleState => {
    switch (action.type) {
      case ActionType.BUNDLE_CREATED:
        return state;
      default:
        return state;
    }
  }
);

export default reducer;
