import { produce } from "immer";
import { nanoid } from "nanoid";

import { Action } from "../actions/index";
import { CellInterface } from "../../interfaces/index";
import { ActionType } from "../action-types";

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

//  PS: data has been modeled like that (instead of an array) to prevent .find()/.filter() calls.
//  This simplefies accesing stuff.

//  state will look something like this:
//   const stateDummy = [
//   {
//     loading: false,
//     error: "",
//     order: ["id1", "id2", "id3", "id4"],
//     data: {
//       id1: {
//         id: "Hs2UHJ_Vw",
//         type: "code",
//         content: "const xyz = 231283",
//       },
//       id2: {
//         id: "DswZH_B_S",
//         type: "text",
//         content: "# Header '\n' -rest of the stuff ",
//       },
//     },
//   },
// ];

const reducer = produce((state: cellState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      const { content, id } = action.payload;
      state.data[id].content = content;
      return state;

    case ActionType.MOVE_CELL:
      const { direction } = action.payload;
      const idIndex = state.order.findIndex((id) => id === action.payload.id);
      const swapTargetIndex = direction === "up" ? idIndex - 1 : idIndex + 1;

      // check for swapTargetIndex out of bounds
      if (swapTargetIndex < 0 || swapTargetIndex > state.order.length - 1) {
        console.error("swapTargetIndex is out of bounds");
        return state;
      }

      // Swap id orders
      state.order[idIndex] = state.order[swapTargetIndex];
      state.order[swapTargetIndex] = action.payload.id;

      return state;

    case ActionType.DELETE_CELL:
      // from both order and data
      delete state.data[action.payload];
      const index = state.order.findIndex((id) => id === action.payload);
      state.order.splice(index, 1);
      return state;

    case ActionType.INSERT_CELL_AFTER:
      const { type } = action.payload;
      const newCell: CellInterface = {
        content: "",
        type,
        id: nanoid(),
      };

      // insert new cell in data
      state.data[newCell.id] = newCell;

      // get index of previous cell and insert newCell after it
      const prevCellIndex = state.order.findIndex(
        (id) => id === action.payload.id
      );

      if (prevCellIndex === -1) {
        state.order.unshift(newCell.id);
      } else {
        state.order.splice(prevCellIndex + 1, 0, newCell.id);
      }

      return state;
    default:
      return state;
  }
}, initialState);

export default reducer;
