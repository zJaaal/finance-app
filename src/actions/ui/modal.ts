import IModalAction from "../../reducers/ui/IModalAction";
import types from "../../store/types";

export const modalOpen = (): IModalAction => ({
  type: types.modalOpen,
});

export const modalClose = (): IModalAction => ({
  type: types.modalClose,
});
