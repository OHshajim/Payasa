import { useContext, useState } from "react";
import useAxios from "../../CustomHooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import RequestTable from "../../Shared/RequestTable";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../Shared/SectionTitle";

const PrivetRequest = () => {
  const axiosSecure = useAxios();
  const { user, loading } = useContext(AuthContext);
  const [filter, setFilter] = useState("All");
  const { data: Requests = [], refetch: reload } = useQuery({
    queryKey: ["Requests", filter],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/PrivetRequest/${user.number}?filter=${filter}`
      );
      return res.data;
    },
    enabled: !loading,
  });
  return (
    <div className="lg:p-10 p-5">
      <SectionTitle heading={"Your Cash In Requests"} subHeading={"Requests"} />
      <RequestTable Requests={Requests} reload={reload} setFilter={setFilter} />
    </div>
  );
};

export default PrivetRequest;
