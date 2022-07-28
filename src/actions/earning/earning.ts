import IPayment from "../../interfaces/IPayment";
import types from "../../store/types";

export const addEarning = (earning: IPayment) => ({
  type: types.earningAdd,
  payload: earning,
});

export const selectActiveEarning = (earning: IPayment) => ({
  type: types.earningSelectActive,
  payload: earning,
});
export const cleanActiveEarning = () => ({
  type: types.earningCleanActive,
});

export const updateEarning = (earning: IPayment) => ({
  type: types.earningUpdate,
  payload: earning,
});

export const deleteEarning = () => ({
  type: types.earningDelete,
});
