interface IPayment {
  id: number;
  title: string;
  description: string;
  date: string | Date;
  amount: number;
}

export default IPayment;
