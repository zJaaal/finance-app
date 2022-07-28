import IPayment from "../../interfaces/IPayment";

interface IEarningState {
  earnings: IPayment[];
  activeEarning: IPayment | null;
}

export default IEarningState;
