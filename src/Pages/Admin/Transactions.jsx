import axios from "axios";
import TransectionTable from "../../Shared/TransectionTable";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Transactions = () => {
    const [service, setService] = useState("All");

    const { data: transactions = [] } = useQuery({
      queryKey: ["Transactions", service],
      queryFn: async () => {
        const res = await axios.get(
          `http://localhost:5000/AllTransactions?service=${service}`
        );
        return res.data;
      },
    });
  
    return (
      <TransectionTable transactions={transactions} setService={setService} />
    );
};

export default Transactions;