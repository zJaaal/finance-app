import { combineReducers } from "redux";
import modalReducer from "./ui/modalReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
