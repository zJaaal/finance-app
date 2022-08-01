import IPayment from "./IPayment";

interface IDebt {
  id: number;
  title: string;
  description: string;
  amount: number;
  date: string | Date;
  paid: boolean;
  payments: IPayment[];
}

export default IDebt;
