import AuthActions from "./enum/AuthActions";
import IAuthState from "../../reducers/auth/IAuthState";
import IUserLogin from "../../interfaces/IUserLogin";
import { Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export const startLogin =
  (user: IUserLogin): ThunkAction<void, IAuthState, {}, authLogin> =>
  (dispatch: ThunkDispatch<IAuthState, {}, authLogin>) => {
    return dispatch({
      type: AuthActions.AUTH_LOGIN,
      payload: {
        uid: Date.now(),
        username: user.username,
        isChecking: false,
      },
    });
  };

export type authLogin = {
  type: typeof AuthActions.AUTH_LOGIN;
  payload: IAuthState;
};

export type authCheckingFinished = {
  type: typeof AuthActions.AUTH_CHECKING_FINISHED;
};

export type authLogout = {
  type: typeof AuthActions.AUTH_LOGOUT;
};

export type authActions = authLogin | authCheckingFinished | authLogout;
