import { RootState } from "../../Redux/";
import { Action } from "../../Redux/actions/";

// annotates the type of state and dispatch with the provided generics
interface MiddlewareAPI<S, A> {
  getState(): S;
  dispatch(action: A): void;
}

// annotates type of the next function and action based on provided generics
interface _Middleware<S, A> {
  (api: MiddlewareAPI<S, A>): (
    next: (action: A) => void
  ) => (action: A) => void;
}

export type Middleware = _Middleware<RootState, Action>;
