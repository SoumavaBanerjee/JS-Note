import { ActionType } from "../action-types/index";
import { CellDirection, CellType } from "../../interfaces/index";

export interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: CellDirection;
  };
}

export interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}

export interface InsertCellAction {
  type: ActionType.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellType;
  };
}

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export interface BundleCreatedAction {
  type: ActionType.BUNDLE_CREATED;
  payload: {
    code: string;
    error: string;
  };
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAction
  | UpdateCellAction
  | BundleCreatedAction;
