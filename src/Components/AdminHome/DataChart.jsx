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

  const Info = [
    { name: "Send Money", value: data?.totalSendMoney },
    { name: "Cash Out", value: data?.totalCashOut||50 },    
    { name: "Cash In", value: data?.totalCashIn||10 },
  ];


  return (
<div>

</div>
  );
};

export default DataChart;
