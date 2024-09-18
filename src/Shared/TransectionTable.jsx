import { SiGooglebigquery } from "react-icons/si";
import { TbCurrencyTaka } from "react-icons/tb";

const TransectionTable = ({ transactions, setService }) => {
  return (
    <section className="container mx-auto px-4">
      <div className="dropdown max-w-52 w-full mt-4">
        <div
          tabIndex={0}
          role="button"
          className=" w-full btn m-1 rounded-xl bg-green-100 text-green-900 border-none hover:bg-green-600 hover:text-white font-semibold "
        >
          <SiGooglebigquery />
          Filter
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-green-50 z-[1] w-52 p-2  rounded-xl text-green-900 font-semibold"
        >
          <li>
            <button
              onClick={() => {
                setService("All");
              }}
              className="focus:text-green-700 focus:font-bold focus:scale-105"
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setService("Send Money");
              }}
              className="focus:text-green-700 focus:font-bold focus:scale-105"
            >
              Send Money
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setService("Cash Out");
              }}
              className="focus:text-green-700 focus:font-bold focus:scale-105"
            >
              Cash Out
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setService("Add Money");
              }}
              className="focus:text-green-700 focus:font-bold focus:scale-105"
            >
              Add Money
            </button>
          </li>
        </ul>
      </div>

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
  );
};

export default TransectionTable;
