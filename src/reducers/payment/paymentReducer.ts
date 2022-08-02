import PaymentActions from "../../actions/payment/enum/PaymentActions";
import { paymentActions } from "../../actions/payment/paymentActions";
import IPaymentState from "./IPaymentState";

const initialState: IPaymentState = {
  payments: [],
  activePayment: null,
};

const paymentReducer = (
  state: IPaymentState = initialState,
  action: paymentActions
) => {
  switch (action.type) {
    case PaymentActions.PAYMENTS_LOADED: {
      return {
        ...state,
        payments: action.payload,
      };
    }
    case PaymentActions.PAYMENT_ADD: {
      return {
        ...state,
        payments: [action.payload, ...state.payments],
      };
    }
    case PaymentActions.PAYMENT_SELECT_ACTIVE: {
      return {
        ...state,
        activePayment: action.payload,
      };
    }
    case PaymentActions.PAYMENT_UPDATE_ACTIVE: {
      return {
        ...state,
        payments: state.payments.map((payment) =>
          payment.id == action.payload.id ? action.payload : payment
        ),
      };
    }
    case PaymentActions.PAYMENT_DELETE_ACTIVE: {
      return {
        ...state,
        payments: state.payments.filter(
          (payment) => payment.id != state.activePayment?.id
        ),
        activePayment: null,
      };
    }
    case PaymentActions.PAYMENT_CLEAN_ACTIVE: {
      return {
        ...state,
        activePayment: null,
      };
    }
    default:
      return state;
  }
};

export default paymentReducer;
