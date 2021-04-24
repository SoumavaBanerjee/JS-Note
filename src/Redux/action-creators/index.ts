import {
  DeleteCellAction,
  InsertCellAction,
  MoveCellAction,
  UpdateCellAction,
} from "../actions";
import { ActionType } from "../action-types";
import { CellDirection, CellType } from "../../interfaces";

export const moveCell = (
  id: string,
  direction: CellDirection
): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};

export const insertCellAfter = (
  id: string | null,
  type: CellType
): InsertCellAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type,
    },
  };
};

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};
