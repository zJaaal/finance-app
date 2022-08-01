import { debtActions } from "../../actions/debt/debtActions";
import DebtActions from "../../actions/debt/enum/DebtActions";
import IDebtState from "./IDebtState";

const initialState: IDebtState = {
  debts: [
    {
      id: 1,
      title: "Apartment",
      description: "",
      amount: 100000,
      date: "07/26/2022",
      paid: false,
      payments: [],
    },
    {
      id: 2,
      title: "Diego loan",
      description: "",
      amount: 5000,
      date: "07/28/2022",
      paid: false,
      payments: [],
    },
    {
      id: 3,
      title: "Phone",
      description: "",
      amount: 0,
      date: "07/28/2022",
      paid: true,
      payments: [],
    },
  ],
  activeDebt: null,
};

const debtReducer = (state: IDebtState = initialState, action: debtActions) => {
  switch (action.type) {
    case DebtActions.DEBT_ADD: {
      return {
        ...state,
        debts: [action.payload, ...state.debts],
      };
    }
    case DebtActions.DEBT_SELECT_ACTIVE: {
      return {
        ...state,
        activeDebt: action.payload,
      };
    }
    case DebtActions.DEBT_CLEAN_ACTIVE: {
      return {
        ...state,
        activeDebt: null,
      };
    }
    case DebtActions.DEBT_UPDATE_ACTIVE: {
      return {
        ...state,
        debts: state.debts.map((debt) =>
          debt.id == action.payload.id ? action.payload : debt
        ),
      };
    }
    case DebtActions.DEBT_DELETE: {
      return {
        ...state,
        debts: state.debts.filter((debt) => debt.id != state.activeDebt?.id),
        activeDebt: null,
      };
    }
    case DebtActions.DEBT_UPDATE_PAYMENTS: {
      return {
        ...state,
        activeDebt: {
          ...state.activeDebt,
          payments: [...action.payload],
        },
      };
    }
    default:
      return state;
  }
};

export default debtReducer;
