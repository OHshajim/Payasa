import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import RequestTable from "../../Shared/RequestTable";
import useAxios from "../../CustomHooks/useAxios";

const Requests = () => {
  const axiosSecure = useAxios();
  const [filter, setFilter] = useState("All");
  const { data: Requests = [], refetch: reload } = useQuery({
    queryKey: ["Requests", filter],
    queryFn: async () => {
      const res = await axiosSecure.get(`/AllRequests?filter=${filter}`);
      console.log(res);
      return res.data;
    },
  });
  return (
    <RequestTable Requests={Requests} reload={reload} setFilter={setFilter} />
  );
};

export default Requests;
