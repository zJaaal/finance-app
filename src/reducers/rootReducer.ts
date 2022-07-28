import { combineReducers } from "redux";
import earningReducer from "./earning/earningReducer";
import savingReducer from "./saving/savingReducer";
import modalReducer from "./ui/modalReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  earning: earningReducer,
  saving: savingReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
