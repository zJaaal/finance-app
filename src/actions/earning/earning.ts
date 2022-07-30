import IPayment from "../../interfaces/IPayment";
import types from "../../store/types";
import EarningActions from "./enum/EarningActions";

export type earningAdd = {
  type: typeof EarningActions.earningAdd;
  payload: IPayment;
};

export type earningSelectActive = {
  type: typeof EarningActions.earningSelectActive;
  payload: IPayment;
};
export type earningCleanActive = {
  type: typeof EarningActions.earningCleanActive;
};

export type earningUpdate = {
  type: typeof EarningActions.earningUpdate;
  payload: IPayment;
};

export type earningDelete = {
  type: typeof EarningActions.earningDelete;
};

export type earningActions =
  | earningAdd
  | earningSelectActive
  | earningCleanActive
  | earningUpdate
  | earningDelete;
