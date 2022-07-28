import ISaving from "../../interfaces/ISaving";
import types from "../../store/types";

export const addSaving = (saving: ISaving) => ({
  type: types.savingAdd,
  payload: saving,
});

export const updateSaving = (saving: ISaving) => ({
  type: types.savingUpdate,
  payload: saving,
});

export const deleteSaving = () => ({
  type: types.savingDelete,
});

export const selectActiveSaving = (saving: ISaving) => ({
  type: types.savingSelectActive,
  payload: saving,
});

export const cleanActiveSaving = () => ({
  type: types.savingCleanActive,
});
