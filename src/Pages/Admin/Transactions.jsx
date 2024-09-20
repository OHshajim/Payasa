import TransectionTable from "../../Shared/TransectionTable";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxios from "../../CustomHooks/useAxios";

const Transactions = () => {
    const [service, setService] = useState("All");
    const axiosSecure = useAxios();
    const { data: transactions = [] } = useQuery({
      queryKey: ["Transactions", service],
      queryFn: async () => {
        const res = await axiosSecure.get(
          `/AllTransactions?service=${service}`
        );
        return res.data;
      },
    });
  
    return (
      <TransectionTable transactions={transactions} setService={setService} />
    );
};

export default Transactions;