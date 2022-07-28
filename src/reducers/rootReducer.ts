import { combineReducers } from "redux";
import earningReducer from "./earning/earningReducer";
import modalReducer from "./ui/modalReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  earning: earningReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
