import { useContext, useState } from "react";
import ServiceNav from "../../Shared/ServiceNav";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import RequestTable from "../../Shared/RequestTable";
import useAxios from "../../CustomHooks/useAxios";

const AgentAddMoney = () => {
  const [filter, setFilter] = useState("All");
  const axiosSecure = useAxios();
  const { user, loading: authLoading } = useContext(AuthContext);

  const { data: Requests = [], refetch: reload } = useQuery({
    queryKey: ["Requests", filter],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/AgentRequests/${user.number}?filter=${filter}`
      );
      return res.data;
    },
    enabled: !authLoading && !!user,
  });
  console.log(Requests,user);

  return (
    <div className="">
      <ServiceNav service={"Add money Request"} path={"/Agent"} />
      <RequestTable Requests={Requests} setFilter={setFilter} reload={reload} />
    </div>
  );
};

export default AgentAddMoney;
