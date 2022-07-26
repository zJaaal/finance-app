import IAction from "../../reducers/IAction";
import types from "../../store/types";

export const modalOpen = (): IAction => ({
  type: types.modalOpen,
});

export const modalClose = (): IAction => ({
  type: types.modalClose,
});
