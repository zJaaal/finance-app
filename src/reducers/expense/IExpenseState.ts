import IExpense from "../../interfaces/IExpense";

interface IExpenseState {
  expenses: IExpense[];
  activeExpense: IExpense | null;
}

export default IExpenseState;
