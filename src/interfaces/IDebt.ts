import IPayment from "./IPayment";

interface IDebt {
  id: number;
  title: string;
  description: string;
  date: string;
  deadline?: string;
  payments: IPayment[];
  paid: boolean;
}

export default IDebt;
