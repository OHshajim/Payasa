import { useQuery } from "@tanstack/react-query";
import useAxios from "../../CustomHooks/useAxios";
import TransectionTable from "../../Shared/TransectionTable";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

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
    <div>
      <TransectionTable transactions={transactions} setService={setService} />
    </div>
  );
};

export default PrivetTransactions;
