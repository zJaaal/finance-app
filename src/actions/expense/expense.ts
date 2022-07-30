import IExpense from "../../interfaces/IExpense";
import ExpenseActions from "./enum/ExpenseActions";

export type expenseAdd = {
  type: typeof ExpenseActions.EXPENSE_ADD;
  payload: IExpense;
};

export type expenseUpdate = {
  type: typeof ExpenseActions.EXPENSE_UPDATE;
  payload: IExpense;
};

export type expenseDelete = {
  type: typeof ExpenseActions.EXPENSE_DELETE;
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
  | expenseUpdate
  | expenseDelete
  | expenseSelectActive
  | expenseCleanActive;
