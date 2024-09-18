import { useQuery } from "@tanstack/react-query";
// import useAxios from "../../CustomHooks/useAxios";
import axios from "axios";
import { TbCurrencyTaka } from "react-icons/tb";

const OverViewInfo = () => {
  const { data: stats = [] } = useQuery({
    queryKey: ["info"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/StatsInfo");
      return res.data;
    },
  });

  return (
    <div className="w-full  flex justify-between px-20 gap-10 my-10">
      {stats.map((stat) => (
        <div className="stats shadow w-full bg-[#2a2a2a] rounded-xl" key={stat.id}>
          <div className="stat">
            <div className="stat-title text-zinc-300 font-medium">{stat.name}</div>
            <div className="stat-value flex items-center">{stat.number} 
              <div><TbCurrencyTaka 
              className={`text-4xl ${stat.name !=="Total Transactions Amount" ? "hidden":""} `}/></div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverViewInfo;
