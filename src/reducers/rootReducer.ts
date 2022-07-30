import { combineReducers } from "redux";
import earningReducer from "./earning/earningReducer";
import savingReducer from "./saving/savingReducer";

const rootReducer = combineReducers({
  earning: earningReducer,
  saving: savingReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
