import produce from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { BundleState } from "../../interfaces";

const initialState: BundleState = {};

// sample bundle state will look like this:
// const dummystate = {
//   cdHHD_VY: {
//     code:
//       "console.log(`Hey! If you're reading this, why don't you give me a interview oppurtunity?`);",
//     error: "",
//   },
// };

const reducer = produce(
  (state: BundleState = initialState, action: Action): BundleState => {
    switch (action.type) {
      case ActionType.BUNDLE_CREATED:
        state[action.payload.cellId] = action.payload.bundle;
        return state;
      default:
        return state;
    }
  },
  initialState
);

export default reducer;
