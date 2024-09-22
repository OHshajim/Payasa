import TransectionTable from "../../Shared/TransectionTable";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxios from "../../CustomHooks/useAxios";
import SectionTitle from "../../Shared/SectionTitle";

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
      <div className="lg:p-10 p-5">
      <SectionTitle heading={"All Transaction histories"} subHeading={"Transactions"} />
      <TransectionTable transactions={transactions} setService={setService} />
    </div>
    );
};

export default Transactions;