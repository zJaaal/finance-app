import IExpense from "../../interfaces/IExpense";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Chart = ({ color, type }: { color: string; type: string }) => {
  const expenses: IExpense[] = [
    {
      title: "Games",
      description: "I bought some games",
      amount: 60,
      date: "July, 25",
    },
    {
      title: "Games",
      description: "I bought some games",
      amount: 1000,
      date: "July, 26",
    },
    {
      title: "Games",
      description: "I bought some games",
      amount: 200,
      date: "July, 27",
    },
    {
      title: "Games",
      description: "I bought some games",
      amount: 3000,
      date: "July, 28",
    },
  ];

  return (
    <ResponsiveContainer height={180} width={"80%"}>
      <LineChart data={expenses}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line name={type} type="monotone" dataKey="amount" stroke={color} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
