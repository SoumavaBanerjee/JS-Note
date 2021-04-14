import { Action } from "../actions/index";
import { CellType } from "../../interfaces/index";
import { ActionType } from "../action-types";

interface cellState {
  loading: boolean;
  error: string;
  order: string[];
  data: {
    [keys: string]: CellType;
  };
}

const initialState: cellState = {
  loading: false,
  error: "",
  order: [],
  data: {},
};

const reducer = (
  state: cellState = initialState,
  action: Action
): cellState => {
  switch (action.type) {
    case ActionType.MOVE_CELL:
      return state;

    case ActionType.DELETE_CELL:
      return state;
    case ActionType.INSERT_CELL_BEFORE:
      return state;
    case ActionType.UPDATE_CELL:
      return state;
    default:
      return state;
  }
};

export default reducer;
