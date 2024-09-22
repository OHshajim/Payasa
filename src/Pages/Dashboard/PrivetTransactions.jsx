import { useQuery } from "@tanstack/react-query";
import useAxios from "../../CustomHooks/useAxios";
import TransectionTable from "../../Shared/TransectionTable";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../Shared/SectionTitle";

const PrivetTransactions = () => {
  const axiosSecure = useAxios();
  const { user, loading } = useContext(AuthContext);
  const [service, setService] = useState("All");
  const { data: transactions = [] } = useQuery({
    queryKey: ["Transactions", service],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/PrivetTransactions/${user?.number}?service=${service}`
      );
      return res.data;
    },
    enabled: !loading,
  });
  
  return (
    <div className="lg:p-10 p-5">
      <SectionTitle heading={"Your Transaction histories"} subHeading={"Transactions"} />
      <TransectionTable transactions={transactions} setService={setService} />
    </div>
  );
};

export default PrivetTransactions;
