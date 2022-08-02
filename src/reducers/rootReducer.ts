import { combineReducers } from "redux";
import debtReducer from "./debt/debtReducer";
import earningReducer from "./earning/earningReducer";
import expenseReducer from "./expense/expenseReducer";
import paymentReducer from "./payment/paymentReducer";
import savingReducer from "./saving/savingReducer";

const rootReducer = combineReducers({
  earning: earningReducer,
  saving: savingReducer,
  expense: expenseReducer,
  debt: debtReducer,
  payment: paymentReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
