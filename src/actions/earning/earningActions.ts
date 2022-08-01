import IPayment from "../../interfaces/IPayment";
import EarningActions from "./enum/EarningActions";

export type earningAdd = {
  type: typeof EarningActions.EARNING_ADD;
  payload: IPayment;
};

export type earningSelectActive = {
  type: typeof EarningActions.EARNING_SELECT_ACTIVE;
  payload: IPayment;
};
export type earningCleanActive = {
  type: typeof EarningActions.EARNING_CLEAN_ACTIVE;
};

export type earningUpdate = {
  type: typeof EarningActions.EARNING_UPDATE;
  payload: IPayment;
};

export type earningDelete = {
  type: typeof EarningActions.EARNING_DELETE;
};

export type earningActions =
  | earningAdd
  | earningSelectActive
  | earningCleanActive
  | earningUpdate
  | earningDelete;
