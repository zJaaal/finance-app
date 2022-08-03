import { authActions } from "../../actions/auth/authActions";
import AuthActions from "../../actions/auth/enum/AuthActions";
import IAuthState from "./IAuthState";

const initialState: IAuthState = {
  uid: null,
  username: null,
  isChecking: false,
};

const authReducer = (state: IAuthState = initialState, action: authActions) => {
  switch (action.type) {
    case AuthActions.AUTH_LOGIN: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case AuthActions.AUTH_CHECKING_FINISHED: {
      return {
        ...state,
        isChecking: false,
      };
    }
    case AuthActions.AUTH_LOGOUT: {
      return {
        uid: null,
        username: null,
        isChecking: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
