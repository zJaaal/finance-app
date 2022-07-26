import SavingActions from "../../actions/saving/enum/SavingActions";
import { savingActions } from "../../actions/saving/savingActions";
import ISavingState from "./ISavingState";

const initialState: ISavingState = {
  activeSaving: null,
  savings: [
    {
      id: 1,
      amount: 3000,
      date: "07/26/2022",
    },
    {
      id: 2,
      amount: 5000,
      date: "07/28/2022",
    },
    {
      id: 3,
      amount: 9000,
      date: "07/29/2022",
    },
  ],
};

const savingReducer = (
  state: ISavingState = initialState,
  action: savingActions
) => {
  switch (action.type) {
    case SavingActions.SAVING_ADD: {
      return {
        ...state,
        savings: [action.payload, ...state.savings],
      };
    }
    case SavingActions.SAVING_SELECT_ACTIVE: {
      return {
        ...state,
        activeSaving: action.payload,
      };
    }
    case SavingActions.SAVING_CLEAN_ACTIVE: {
      return {
        ...state,
        activeSaving: null,
      };
    }
    case SavingActions.SAVING_UPDATE_ACTIVE: {
      return {
        ...state,
        savings: state.savings.map((saving) =>
          saving.id == action.payload.id ? action.payload : saving
        ),
      };
    }
    case SavingActions.SAVING_DELETE_ACTIVE: {
      return {
        ...state,
        savings: state.savings.filter(
          (saving) => saving.id != state.activeSaving?.id
        ),
        activeSaving: null,
      };
    }
    default:
      return state;
  }
};

export default savingReducer;
