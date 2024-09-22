import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie,  Cell,Tooltip} from 'recharts';
import useAxios from "../../CustomHooks/useAxios";

const DataChart = () => {
  const axiosSecure = useAxios();
  const { data: Data } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get("/chartOfServices");
      return res.data;
    },
  });
  const data = [
    {
      name:  "Send Money",
      value: Data?.totalSendMoney ,
    },
    {
      name: "Cash Out",
      value:  Data?.totalCashOut ,
    },
    {
      name: "Add Money",
      value:Data?.totalCashIn ,
    },
  ];


  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="flex justify-center">
      <div className="flex items-center flex-col md:flex-row">
      <div >
      <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Transection Types:</h3>
        <hr />
        <li className="font-semibold mt-4">Send Money: { Data?.totalSendMoney }</li>
        <li className="font-semibold my-2">Cash Out: { Data?.totalCashOut }</li>
        <li className="font-semibold">Add Money: { Data?.totalCashIn }</li>
      </div>
      </div>
    </div>
  );
}
export default DataChart;
