import { SiGooglebigquery } from "react-icons/si";
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";
import useAxios from "../CustomHooks/useAxios";

const RequestTable = ({ Requests, reload, setFilter }) => {
  const axiosSecure = useAxios();
  const RequestConfirmation = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you want to confirm this request ???",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.patch(`/RequestConfirmation${id}`);
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
  const DeleteRequest = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you want to Delete this request ???",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.delete(`/RequestDelete${id}`);
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
                setFilter("All");
              }}
              className="focus:text-green-700 focus:font-bold focus:scale-105"
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setFilter("Pending");
              }}
              className="focus:text-green-700 focus:font-bold focus:scale-105"
            >
              Pending
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setFilter("Confirmed");
              }}
              className="focus:text-green-700 focus:font-bold focus:scale-105"
            >
              Confirmed
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
                      <td className="px-4 py-4 text-sm text-green-600 font-semibold">
                        <div className="flex">
                          {request.Amount}
                          <TbCurrencyTaka className="text-xl " />
                        </div>
                      </td>
                      <td>
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
