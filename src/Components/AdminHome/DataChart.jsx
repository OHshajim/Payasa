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
    { name: "Send Money", value: data?.totalSendMoney},
    { name: "Cash Out", value: data?.totalCashOut},
    { name: "Cash In", value: data?.totalCashIn },
  ];
console.log(Info);

  return (
    <div>
      {/* chart */}
      <p className="mt-10 mb-3 text-light-blue-300 font-semibold">
        Chart Of Transactions -
      </p>
      <div className="">
        
      </div>
    </div>
  );
};

export default DataChart;
