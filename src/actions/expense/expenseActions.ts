import IExpense from "../../interfaces/IExpense";
import ExpenseActions from "./enum/ExpenseActions";

export type expenseAdd = {
  type: typeof ExpenseActions.EXPENSE_ADD;
  payload: IExpense;
};

export type expenseUpdateActive = {
  type: typeof ExpenseActions.EXPENSE_UPDATE_ACTIVE;
  payload: IExpense;
};

export type expenseDeleteActive = {
  type: typeof ExpenseActions.EXPENSE_DELETE_ACTIVE;
};

export type expenseSelectActive = {
  type: typeof ExpenseActions.EXPENSE_SELECT_ACTIVE;
  payload: IExpense;
};

export type expenseCleanActive = {
  type: typeof ExpenseActions.EXPENSE_CLEAN_ACTIVE;
};

export type expenseActions =
  | expenseAdd
  | expenseUpdateActive
  | expenseDeleteActive
  | expenseSelectActive
  | expenseCleanActive;
