import IPayment from "../../interfaces/IPayment";

interface IEarning {
  earnings: IPayment[];
  activeEarning: IPayment | null;
}

export default IEarning;
