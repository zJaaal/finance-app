import IDebt from "../../interfaces/IDebt";
import IPayment from "../../interfaces/IPayment";
import DebtActions from "./enum/DebtActions";

export type debtAdd = {
  type: typeof DebtActions.DEBT_ADD;
  payload: IDebt;
};

export type debtSelectActive = {
  type: typeof DebtActions.DEBT_SELECT_ACTIVE;
  payload: IDebt;
};
export type debtCleanActive = {
  type: typeof DebtActions.DEBT_CLEAN_ACTIVE;
};

export type debtUpdateActive = {
  type: typeof DebtActions.DEBT_UPDATE_ACTIVE;
  payload: IDebt;
};

export type debtDelete = {
  type: typeof DebtActions.DEBT_DELETE;
};

export type debtUpdatePayments = {
  type: typeof DebtActions.DEBT_UPDATE_PAYMENTS;
  payload: IPayment[];
};

export type debtActions =
  | debtAdd
  | debtSelectActive
  | debtCleanActive
  | debtUpdateActive
  | debtDelete
  | debtUpdatePayments;
