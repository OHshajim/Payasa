import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const DataChart = () => {
  const { data } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/chartOfServices");
      return res.data;
    },
  });
  console.log(data);

  const Info = [
    { name: "Send Money", value: data?.totalSendMoney },
    { name: "Cash Out", value: data?.totalCashOut },
    { name: "Cash In", value: data?.totalCashIn },
  ];
  return (
    <div className="border">

    </div>
  );
};

export default DataChart;
