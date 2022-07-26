import { typographyClasses } from "@mui/material";
import types from "../../store/types";
import IAction from "../IAction";
import IModal from "./IModal";

const initialState: IModal = {
  isOpen: false,
};

const modalReducer = (state: IModal = initialState, action: IAction) => {
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
