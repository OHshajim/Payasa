import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { RiMenuSearchLine } from "react-icons/ri";

const TransactionTable = () => {
  const [service, setService] = useState("All");
  const { data: transactions = [] } = useQuery({
    queryKey: ["Transactions",service],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/AllTransactions?service=${service}`);
      return res.data;
    },
  });
  console.log(transactions);

  return (
    <section className="container mx-auto px-4">
      <div className="mt-6 md:flex md:items-center md:justify-between">
        <div className="inline-flex overflow-hidden  border divide-x rounded-lg bg-gray-900 border-gray-700 divide-gray-700">
          <button onClick={()=>setService("All")} className="px-5 py-2 text-xs font-medium hover:bg-gray-800 text-gray-300">
            View all
          </button>
          <button onClick={()=>setService("Send Money")}  className="px-5 py-2 text-xs font-medium hover:bg-gray-800 text-gray-300">
            Send Money
          </button>
          <button onClick={()=>setService("Cash Out")}  className="px-5 py-2 text-xs font-medium hover:bg-gray-800 text-gray-300">
            Cash Out
          </button>
          <button onClick={()=>setService("Cash In")}  className="px-5 py-2 text-xs font-medium hover:bg-gray-800 text-gray-300">
            Cash In
          </button>
        </div>

        <div className="relative flex items-center mt-4 md:mt-0">
        <RiMenuSearchLine />

          <input
            type="text"
            placeholder="Search"
            className="block w-full py-1.5 pr-5 pl-11 border rounded-lg bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300"
          />
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden border border-gray-700 rounded-lg">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="py-3.5 px-4 text-sm text-gray-400 text-left">
                      <button className="flex items-center gap-x-3">
                        <span>A/C</span>
                      </button>
                    </th>
                    <th className="px-12 py-3.5 text-sm text-gray-400 text-left">
                      Status
                    </th>
                    <th className="px-4 py-3.5 text-sm text-gray-400 text-left">
                      Service
                    </th>
                    <th className="px-4 py-3.5 text-sm text-gray-400 text-left">
                      Date
                    </th>
                    <th className="px-4 py-3.5 text-sm text-gray-400 text-left">
                      Charge
                    </th>
                    <th className="px-4 py-3.5 text-sm text-gray-400 text-left">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-900">
                  {transactions.map((transaction) => (
                    <tr key={transaction._id}>
                      <td className="px-4 py-4 text-sm text-gray-800 dark:text-white">
                        <div>{transaction.From}</div>
                      </td>
                      <td className="px-12 py-4 text-sm text-gray-400">
                        {transaction.Service}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-200">
                        <div>{transaction.To}</div>
                      </td>
                      <td className="px-4 py-4 text-sm">{transaction.Date}</td>
                      <td className="px-4 py-4 text-sm text-rose-300">
                        + {transaction.Charge}$
                      </td>
                      <td className="px-4 py-4 text-sm">
                        {transaction.Amount + transaction.Charge} $
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionTable;
