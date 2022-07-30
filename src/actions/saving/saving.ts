import ISaving from "../../interfaces/ISaving";
import SavingActions from "./enum/SavingActions";

export type savingAdd = {
  type: typeof SavingActions.savingAdd;
  payload: ISaving;
};

export type savingUpdate = {
  type: typeof SavingActions.savingUpdate;
  payload: ISaving;
};

export type savingDelete = {
  type: typeof SavingActions.savingDelete;
};

export type savingSelectActive = {
  type: typeof SavingActions.savingSelectActive;
  payload: ISaving;
};

export type savingCleanActive = {
  type: typeof SavingActions.savingCleanActive;
};

export type savingActions =
  | savingAdd
  | savingUpdate
  | savingDelete
  | savingSelectActive
  | savingCleanActive;
