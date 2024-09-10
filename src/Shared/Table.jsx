
const Table = ({users,setSearch,setQuery}) => {

  return (
    <section className="container px-4 mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium  text-white">
              Clients && Users
            </h2>

            <span className="px-3 py-1 text-xs   rounded-full bg-gray-800 text-blue-400">
              {users?.length} vendors
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 md:flex md:items-center md:justify-between">
        <div className="inline-flex overflow-hidden  border divide-x rounded-lg bg-gray-900 rtl:flex-row-reverse border-gray-700 divide-gray-700">
          <button onClick={()=>setQuery("All")} className="px-5 py-2 text-xs font-medium  transition-colors duration-200  sm:text-sm hover:bg-gray-100 text-gray-300">
            View all
          </button>

          <button onClick={()=>setQuery("Pending")} className="px-5 py-2 text-xs font-medium  transition-colors duration-200 sm:text-sm  text-gray-300 hover:bg-gray-100">
            General
          </button>

          <button onClick={()=>setQuery("Agent")} className="px-5 py-2 text-xs font-medium  transition-colors duration-200 sm:text-sm  text-gray-300 hover:bg-gray-100">
            Agent
          </button>
        </div>

        <div className="relative flex items-center mt-4 md:mt-0">
          <span className="absolute"></span>
          <input
            type="number"
            placeholder="Search with Number"
            onChange={()=>setSearch(event.target.value)}
            className="block w-full py-1.5 pr-5  border  rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border  border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className=" bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-400"
                    >
                      <button className="flex items-center gap-x-3 focus:outline-none">
                        <span>Email</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                    >
                      Number
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-center  text-gray-400"
                    >
                      Active
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-700 bg-gray-900">
                    {
                      users?.map((user)=><tr key={user?._id}>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium  text-white ">
                            {user?.email}
                          </h2>
                          <p className="text-sm font-normal  text-gray-400">
                            {user?.status}
                          </p>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 bg-gray-800">
                          Activated
                        </div>
                      </td>
                      <td className="px-4 text-gray-200 py-4 text-sm whitespace-nowrap">
                        0{user?.number}
                      </td>

                      <td className="flex justify-center gap-5 px-4 py-4 text-sm whitespace-nowrap ">
                        <button className="btn rounded-xl btn-outline  text-gray-300 hover:bg-gray-500">
                          Update
                        </button>
                        <button className="btn rounded-xl btn-outline  text-gray-300 hover:bg-gray-500">
                          Deactivate
                        </button>
                      </td>
                    </tr>)
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
        {/* <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
          <button className="btn rounded-xl btn-outline  text-gray-300 hover:bg-gray-500">
            Previous
          </button>

          <button className="btn rounded-xl btn-outline  text-gray-300 hover:bg-gray-500">
            Next
          </button>
        </div> */}
      </div>
    </section>
  );
};
import PropTypes from "prop-types";

Table.propTypes = {
  users: PropTypes.array,
  setSearch:PropTypes.func,
  setQuery:PropTypes.func,
};
export default Table;
