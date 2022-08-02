import IEarning from "../../interfaces/IEarning";
import EarningActions from "./enum/EarningActions";

export type earningAdd = {
  type: typeof EarningActions.EARNING_ADD;
  payload: IEarning;
};

export type earningSelectActive = {
  type: typeof EarningActions.EARNING_SELECT_ACTIVE;
  payload: IEarning;
};
export type earningCleanActive = {
  type: typeof EarningActions.EARNING_CLEAN_ACTIVE;
};

export type earningUpdateActive = {
  type: typeof EarningActions.EARNING_UPDATE_ACTIVE;
  payload: IEarning;
};

export type earningDeleteActive = {
  type: typeof EarningActions.EARNING_DELETE_ACTIVE;
};

export type earningActions =
  | earningAdd
  | earningSelectActive
  | earningCleanActive
  | earningUpdateActive
  | earningDeleteActive;
