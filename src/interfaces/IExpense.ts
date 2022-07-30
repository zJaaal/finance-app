interface IExpense {
  id?: number;
  title: string;
  description: string;
  amount: number;
  date: string | Date;
}

export default IExpense;
