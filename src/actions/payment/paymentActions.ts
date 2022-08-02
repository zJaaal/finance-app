import IPayment from "../../interfaces/IPayment";
import PaymentActions from "./enum/PaymentActions";

export type paymentAdd = {
  type: typeof PaymentActions.PAYMENT_ADD;
  payload: IPayment;
};

export type paymentsLoaded = {
  type: typeof PaymentActions.PAYMENTS_LOADED;
  payload: IPayment[];
};

export type paymentSelectActive = {
  type: typeof PaymentActions.PAYMENT_SELECT_ACTIVE;
  payload: IPayment;
};
export type paymentCleanActive = {
  type: typeof PaymentActions.PAYMENT_CLEAN_ACTIVE;
};

export type paymentUpdateActive = {
  type: typeof PaymentActions.PAYMENT_UPDATE_ACTIVE;
  payload: IPayment;
};

export type paymentDeleteActive = {
  type: typeof PaymentActions.PAYMENT_DELETE_ACTIVE;
};

export type paymentActions =
  | paymentAdd
  | paymentsLoaded
  | paymentSelectActive
  | paymentCleanActive
  | paymentUpdateActive
  | paymentDeleteActive;
