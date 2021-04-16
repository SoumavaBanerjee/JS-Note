import { Action } from "../actions/index";
import { CellInterface } from "../../interfaces/index";
import { ActionType } from "../action-types";
import { produce } from "immer";

interface cellState {
  loading: boolean;
  error: string;
  order: string[];
  data: {
    [keys: string]: CellInterface;
  };
}

const initialState: cellState = {
  loading: false,
  error: "",
  order: [],
  data: {},
};

/** state will look something like this:
 * 
  const stateDummy = [
  {
    loading: false,
    error: "",
    order: ["id1", "id2", "id3", "id4"],
    data: {
      id1: {
        id: "code1",
        type: "code",
        content: "const xyz = 231283",
      },
      id2: {
        id: "text1",
        type: "text",
        content: "# Header '\n' -rest of the stuff ",
      },
    },
  },
];
 
 */

const reducer = produce((state: cellState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      const { content, id } = action.payload;
      state.data[id].content = content;
      return;
    case ActionType.MOVE_CELL:
      return state;

    case ActionType.DELETE_CELL:
      return state;
    case ActionType.INSERT_CELL_BEFORE:
      return state;
    default:
      return state;
  }
});

export default reducer;
