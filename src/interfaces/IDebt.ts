import IPayment from "./IPayment";

interface IDebt {
  id: number;
  title: string;
  description: string;
  date: string | Date;
  deadline?: string | Date;
  payments: IPayment[];
  paid: boolean;
}

export default IDebt;
