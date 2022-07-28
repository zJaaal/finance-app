import types from "../../store/types";
import ISavingAction from "./ISavingAction";
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
  action: ISavingAction
) => {
  switch (action.type) {
    case types.savingAdd: {
      return {
        ...state,
        savings: [action.payload, ...state.savings],
      };
    }
    case types.savingSelectActive: {
      return {
        ...state,
        activeSaving: action.payload,
      };
    }
    case types.savingCleanActive: {
      return {
        ...state,
        activeSaving: null,
      };
    }
    case types.savingUpdate: {
      return {
        ...state,
        savings: state.savings.map((saving) =>
          saving.id == action.payload.id ? action.payload : saving
        ),
      };
    }
    case types.savingDelete: {
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
