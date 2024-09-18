import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const RequestTable = () => {
  const [service, setService] = useState("All");
  const { data: Requests = [] } = useQuery({
    queryKey: ["Requests", service],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/AllRequests?service=${service}`
      );
      return res.data;
    },
  });
  console.log(Requests);
  const RequestConfirmation = async (id) => {
    const result = await axios.patch(
      `http://localhost:5000/RequestConfirmation${id}`
    );
    console.log(result);
  };
  const DeleteRequest = async (id) => {
    const result = await axios.delete(
      `http://localhost:5000/RequestDelete${id}`
    );
    console.log(result);
  };

  return (
    <section className="container mx-auto px-4">
      <div className="mt-6 md:flex md:items-center md:justify-between">


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
                    <th className="py-3.5 px-4 text-sm text-zinc-500 text-left">
                      <span>A/C</span>
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      To
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      Date
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      Amount
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      Status
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-300 ">
                  {Requests.map((request) => (
                    <tr key={request._id}>
                      <td className="px-4 py-4 text-sm text-black">
                        <div>0{request.From}</div>
                      </td>
                      <td className="px-4 py-4 text-sm text-black">
                        0{request.To}
                      </td>
                      <td className="px-4 py-4 text-sm text-black">
                        {request.Date}
                      </td>
                      <td className="px-4 py-4 text-sm text-green-800 font-semibold">
                        <div className="flex">
                          {request.Amount}
                          <TbCurrencyTaka className="text-xl " />
                        </div>
                      </td>
                      <td >
                        <div
                          className={`text-sm font-semibold border-2 max-w-fit px-3 py-2 rounded-full
                          ${
                            request.Status === "Confirmed"
                              ? "text-green-500 border-green-500"
                              : " text-stone-500 border-stone-400"
                          }`}
                        >
                          {request.Status}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <button
                          onClick={() => RequestConfirmation(request._id)}
                          className={`btn btn-outline rounded-xl text-green-600 hover:text-green-700 hover:bg-green-50 font-semibold ${
                            request.Status === "Confirmed" && "hidden"
                          }`}
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => DeleteRequest(request._id)}
                          className={`btn btn-outline rounded-xl text-rose-400 hover:text-rose-700 hover:bg-rose-50 font-semibold ${
                            request.Status === "Confirmed" || "hidden "
                          }`}
                        >
                          Delete
                        </button>
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

export default RequestTable;
