import ISaving from "../../interfaces/ISaving";
import SavingActions from "./enum/SavingActions";

export type savingAdd = {
  type: typeof SavingActions.SAVING_ADD;
  payload: ISaving;
};

export type savingUpdate = {
  type: typeof SavingActions.SAVING_UPDATE;
  payload: ISaving;
};

export type savingDelete = {
  type: typeof SavingActions.SAVING_DELETE;
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
  | savingUpdate
  | savingDelete
  | savingSelectActive
  | savingCleanActive;
