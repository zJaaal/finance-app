import ExpenseActions from "../../actions/expense/enum/ExpenseActions";
import { expenseActions } from "../../actions/expense/expenseActions";
import IExpenseState from "./IExpenseState";

const initialState: IExpenseState = {
  expenses: [
    {
      id: 1,
      title: "PS5",
      description: "",
      amount: 100000,
      date: "07/26/2022",
    },
    {
      id: 2,
      title: "Jogger",
      description: "",
      amount: 5000,
      date: "07/28/2022",
    },
  ],
  activeExpense: null,
};

const expenseReducer = (
  state: IExpenseState = initialState,
  action: expenseActions
) => {
  switch (action.type) {
    case ExpenseActions.EXPENSE_ADD: {
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
      };
    }
    case ExpenseActions.EXPENSE_SELECT_ACTIVE: {
      return {
        ...state,
        activeExpense: action.payload,
      };
    }
    case ExpenseActions.EXPENSE_CLEAN_ACTIVE: {
      return {
        ...state,
        activeExpense: null,
      };
    }
    case ExpenseActions.EXPENSE_UPDATE: {
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id == action.payload.id ? action.payload : expense
        ),
      };
    }
    case ExpenseActions.EXPENSE_DELETE: {
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id != state.activeExpense?.id
        ),
        activeExpense: null,
      };
    }
    default:
      return state;
  }
};

export default expenseReducer;
