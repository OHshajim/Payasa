import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import RequestTable from "../../Shared/RequestTable";
import useAxios from "../../CustomHooks/useAxios";
import SectionTitle from "../../Shared/SectionTitle";

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
    <div className=" lg:p-10 p-5">
      <SectionTitle heading={"All Clients Cash In Requests"} subHeading={"Requests"} />
      <RequestTable Requests={Requests} reload={reload} setFilter={setFilter} />
    </div>
  );
};

export default Requests;
