import { useQuery } from "@tanstack/react-query";
import { TbCurrencyTaka } from "react-icons/tb";
import useAxios from "../../CustomHooks/useAxios";

const OverViewInfo = () => {
  const axiosSecure = useAxios();
  const { data: stats = [] } = useQuery({
    queryKey: ["info"],
    queryFn: async () => {
      const res = await axiosSecure.get("/StatsInfo");
      return res.data;
    },
  });

  return (
    <div className="w-full  flex justify-between flex-col lg:flex-row lg:px-20 gap-10 my-10">
      {stats.map((stat) => (
        <div className="stats shadow w-full bg-green-50 rounded-xl" key={stat.id}>
          <div className="stat">
            <div className="stat-title text-zinc-500 font-medium">{stat.name}</div>
            <div className="stat-value flex items-center">{stat.number} 
              <div><TbCurrencyTaka 
              className={`text-4xl text-green-500 ${stat.name !=="Total Transactions Amount" ? "hidden":""} `}/></div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverViewInfo;
