import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const TransactionTable = () => {
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
  console.log(transactions);

  return (
    <section className="container mx-auto px-4">
      <div className="mt-6 md:flex md:items-center md:justify-between">
        <div className="inline-flex overflow-hidden  border divide-x rounded-lg bg-gray-900 border-gray-700 divide-gray-700">
          <button
            onClick={() => setService("All")}
            className="px-5 py-2 text-xs font-medium hover:bg-gray-800 text-gray-300"
          >
            View all
          </button>
          <button
            onClick={() => setService("Send Money")}
            className="px-5 py-2 text-xs font-medium hover:bg-gray-800 text-gray-300"
          >
            Send Money
          </button>
          <button
            onClick={() => setService("Cash Out")}
            className="px-5 py-2 text-xs font-medium hover:bg-gray-800 text-gray-300"
          >
            Cash Out
          </button>
          <button
            onClick={() => setService("Cash In")}
            className="px-5 py-2 text-xs font-medium hover:bg-gray-800 text-gray-300"
          >
            Cash In
          </button>
        </div>

        <div>
          <div className="my-5  mx-auto  bg-transparent border rounded-full focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300  focus-within:ring-opacity-40 mb-7">
            <input
              type="text"
              placeholder="Search by Number"
              className="flex-1 h-10 px-3 pr-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden border border-gray-300 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-[#edededf0]">
                  <tr>
                    <th className="py-3.5 px-4 text-sm text-zinc-500 text-center">
                      <span>A/C</span>
                    </th>
                    <th className="px-12 py-3.5 text-sm text-zinc-500 text-left">
                      Status
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      Service
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      Date
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      Charge
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-300 ">
                  {transactions.map((transaction) => (
                    <tr key={transaction._id}>
                      <td className="px-4 py-4 text-sm text-black">
                        <div>{transaction.From}</div>
                      </td>
                      <td className="px-12 py-4 text-sm text-black">
                        {transaction.Service}
                      </td>
                      <td className="px-4 py-4 text-sm text-black">
                        <div>{transaction.To}</div>
                      </td>
                      <td className="px-4 py-4 text-sm text-black">
                        {transaction.Date}
                      </td>
                      <td className="px-4 py-4 text-sm text-rose-400 font-semibold">
                        <div className="flex">
                          + {transaction.Charge}
                          <TbCurrencyTaka className="text-xl " />
                        </div>
                      </td>
                      <td className="flex px-4 py-4 text-sm text-green-800 font-semibold ">
                        {transaction.Amount + transaction.Charge}{" "}
                        <TbCurrencyTaka className="text-xl " />
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
