import ISaving from "../../interfaces/ISaving";
import SavingActions from "./enum/SavingActions";

export type savingAdd = {
  type: typeof SavingActions.SAVING_ADD;
  payload: ISaving;
};

export type savingUpdateActive = {
  type: typeof SavingActions.SAVING_UPDATE_ACTIVE;
  payload: ISaving;
};

export type savingDeleteActive = {
  type: typeof SavingActions.SAVING_DELETE_ACTIVE;
};

export type savingSelectActive = {
  type: typeof SavingActions.SAVING_SELECT_ACTIVE;
  payload: ISaving;
};

export type savingCleanActive = {
  type: typeof SavingActions.SAVING_CLEAN_ACTIVE;
};

export type savingActions =
  | savingAdd
  | savingUpdateActive
  | savingDeleteActive
  | savingSelectActive
  | savingCleanActive;
