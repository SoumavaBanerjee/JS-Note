import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../Redux/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
