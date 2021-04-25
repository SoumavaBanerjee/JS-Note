import type { Middleware } from "../../interfaces";
import { ActionType } from "../action-types";
import bundle from "../../Bundler";

let timer: any;
export const bundleMiddleware: Middleware = ({ getState, dispatch }) => (
  next
) => (action) => {
  next(action);

  if (action.type !== ActionType.UPDATE_CELL) return;

  //   check for text cell-type
  const {
    cell: { data: cellData },
  } = getState();
  const cell = cellData[action.payload.id];

  if (cell.type === "text") return;

  clearTimeout(timer);
  timer = setTimeout(async () => {
    console.log("initiating bundling");
    const result = await bundle(action.payload.content);

    dispatch({
      type: ActionType.BUNDLE_CREATED,
      payload: {
        cellId: action.payload.id,
        bundle: result,
      },
    });

    console.log("bundling finished", "action dispatched");
  }, 1000);
};
