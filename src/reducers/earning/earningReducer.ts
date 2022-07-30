import IPayment from "../../interfaces/IPayment";
import types from "../../store/types";
import IEarningState from "./IEarningState";
import IEarningAction from "./IEarningAction";
import { earningActions } from "../../actions/earning/earning";
import EarningActions from "../../actions/earning/enum/EarningActions";

const initialState: IEarningState = {
  earnings: [
    {
      id: 1,
      title: "Salary",
      description: "",
      amount: 100000,
      date: "07/26/2022",
    },
    {
      id: 2,
      title: "Some payment I got from mentoring",
      description: "",
      amount: 5000,
      date: "07/28/2022",
    },
  ],
  activeEarning: null,
};

const earningReducer = (
  state: IEarningState = initialState,
  action: earningActions
) => {
  switch (action.type) {
    case EarningActions.earningAdd: {
      return {
        ...state,
        earnings: [action.payload, ...state.earnings],
      };
    }
    case EarningActions.earningSelectActive: {
      return {
        ...state,
        activeEarning: action.payload,
      };
    }
    case EarningActions.earningCleanActive: {
      return {
        ...state,
        activeEarning: null,
      };
    }
    case EarningActions.earningUpdate: {
      return {
        ...state,
        earnings: state.earnings.map((earning) =>
          earning.id == action.payload?.id ? action.payload : earning
        ),
      };
    }
    case EarningActions.earningDelete: {
      return {
        ...state,
        earnings: state.earnings.filter(
          (earning) => earning.id != state.activeEarning?.id
        ),
        activeEarning: null,
      };
    }
    default:
      return state;
  }
};

export default earningReducer;
