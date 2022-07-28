import IPayment from "../../interfaces/IPayment";
import IEarning from "./IEarning";

interface IEarningAction {
  type: string;
  payload?: IPayment[] | IPayment;
}

export default IEarningAction;
