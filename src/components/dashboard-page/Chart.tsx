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
      id: 1,
      title: "Games",
      description: "I bought some games",
      amount: 60,
      date: "July, 25",
    },
    {
      id: 2,
      title: "Games",
      description: "I bought some games",
      amount: 1000,
      date: "July, 26",
    },
    {
      id: 3,
      title: "Games",
      description: "I bought some games",
      amount: 200,
      date: "July, 27",
    },
    {
      id: 4,
      title: "Games",
      description: "I bought some games",
      amount: 3000,
      date: "July, 28",
    },
  ];

  return (
    <ResponsiveContainer
      minHeight={100}
      height={"100%"}
      maxHeight={180}
      width={"90%"}
    >
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
