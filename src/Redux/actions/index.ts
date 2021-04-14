import { ActionType } from "../action-types/index";
import { CellType } from "../../interfaces/index";

interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: "up" | "down";
  };
}

interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}

interface InsertCellAction {
  type: ActionType.INSERT_CELL_BEFORE;
  payload: {
    id: string;
    type: CellType;
  };
}

interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAction
  | UpdateCellAction;
