import IPayment from "../../interfaces/IPayment";

interface IEarningAction {
  type: string;
  payload?: IPayment;
}

export default IEarningAction;
