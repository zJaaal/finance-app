import IPayment from "../../interfaces/IPayment";

interface IPaymentState {
  payments: IPayment[];
  activePayment: IPayment | null;
}

export default IPaymentState;
