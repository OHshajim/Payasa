import ServiceNav from "../../Shared/ServiceNav";
import useAxios from "../../CustomHooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { TbCurrencyTaka } from "react-icons/tb";

const CashOutReport = () => {
  const axiosSecure = useAxios();
  const { data: transactions = [] } = useQuery({
    queryKey: ["Transactions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/CashOutTransactions`);
      return res.data;
    },
  });
  return (
    <div>
      <ServiceNav path={"/Agent"} service={"Cash Out Report"} />
      <section className="container mx-auto px-4">
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden border border-gray-300 rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-[#edededf0]">
                    <tr>
                      <th className="py-3.5 px-4 text-sm text-zinc-500 text-left">
                        A/C (From)
                      </th>
                      <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                        A/C (To)
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
                          0{transaction.From}
                        </td>
                        <td className="px-4 py-4 text-sm text-black">
                          0{transaction.To}
                        </td>
                        <td className="px-4 py-4 text-sm text-black">
                          {transaction.Service}
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
                        <td className="flex px-4 py-4 text-sm text-green-600 font-semibold ">
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
    </div>
  );
};

export default CashOutReport;
