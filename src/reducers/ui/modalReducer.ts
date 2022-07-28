import types from "../../store/types";
import IModal from "./IModal";
import IModalAction from "./IModalAction";

const initialState: IModal = {
  isOpen: false,
};

const modalReducer = (state: IModal = initialState, action: IModalAction) => {
  switch (action.type) {
    case types.modalOpen: {
      return { ...state, isOpen: true };
    }
    case types.modalClose: {
      return { ...state, isOpen: false };
    }
    default:
      return state;
  }
};

export default modalReducer;
