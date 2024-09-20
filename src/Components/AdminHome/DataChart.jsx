import { useQuery } from "@tanstack/react-query";
import useAxios from "../../CustomHooks/useAxios";



const DataChart = () => {
  const axiosSecure = useAxios();
  const { data } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get("/chartOfServices");
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
