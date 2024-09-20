import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SiGooglebigquery } from "react-icons/si";
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";
import useAxios from "../../CustomHooks/useAxios";

const AllClientsTable = () => {
  const [type, setType] = useState("All");
  const axiosSecure = useAxios();
  const { data: Clients = [], refetch: reload } = useQuery({
    queryKey: ["Clients", type],
    queryFn: async () => {
      const res = await axiosSecure.get(`/AllUsers?type=${type}`);
      console.log(res);
      return res.data;
    },
  });
  const DeleteAccount = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.delete(`/deleteClient/${id}`);
        console.log(result);
        if (result.status == 200) {
          reload();
          Swal.fire({
            title: "Deleted!",
            text: "This account has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  const UpdateAccount = async (client) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to update this Account",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.patch(
          `/UpdateAccount/${client._id}?type=${client.status}`
        );
        console.log(result);
        if (result.status == 200) {
          reload();
          Swal.fire({
            title: "Successful!",
            text: result.data.message,
            icon: "success",
          });
        }
      }
    });
  };

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
                setType("All");
              }}
              className="focus:text-green-700 focus:font-bold focus:scale-105"
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setType("General");
              }}
              className="focus:text-green-700 focus:font-bold focus:scale-105"
            >
              General
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setType("Agent");
              }}
              className="focus:text-green-700 focus:font-bold focus:scale-105"
            >
              Agent
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setType("Admin");
              }}
              className="focus:text-green-700 focus:font-bold focus:scale-105"
            >
              Admin
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
                      <span>A/C</span>
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      Status
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      Balance
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-left">
                      Date
                    </th>
                    <th className="px-4 py-3.5 text-sm text-zinc-500 text-Center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-300 ">
                  {Clients.map((client) => (
                    <tr key={client._id}>
                      <td className="px-4 py-4 text-sm text-zinc-700 font-semibold">
                        <h3 className="font-bold text-base">{client.email}</h3>
                        <p>0{client.number}</p>
                      </td>
                      <td className="px-4 py-4 text-sm ">
                        <div
                          className={`max-w-fit border rounded-full px-3 py-1 font-semibold  ${
                            client.status == "General"
                              ? " text-gray-600 border-gray-400"
                              : client.status == "Agent"
                              ? " text-green-500 border-green-400 bg-green-50"
                              : " text-green-600 border-none bg-green-200"
                          }`}
                        >
                          {client.status}
                        </div>
                      </td>
                      <td className="flex px-4 py-4 text-sm text-green-600">
                        {client.balance}
                        <TbCurrencyTaka className="text-xl " />
                      </td>
                      <td className="px-4 py-4 text-sm text-black">
                        {client.date}
                      </td>
                      <td className="px-4 py-4 text-sm  font-bold flex justify-center gap-5">
                        <button
                          onClick={() => UpdateAccount(client)}
                          className={`btn btn-ghost rounded-xl  text-green-500 hover:bg-green-100 hover:scale-105 ${
                            client.status == "Admin" && "hidden"
                          }`}
                        >
                          Update
                        </button>
                        <button
                          onClick={() => DeleteAccount(client._id)}
                          className="btn btn-ghost rounded-xl text-rose-400 hover:bg-rose-100 hover:scale-105"
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

export default AllClientsTable;
