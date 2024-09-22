import { useQuery } from "@tanstack/react-query";
import useAxios from "../../CustomHooks/useAxios";
import SectionTitle from "../../Shared/SectionTitle";

const Reports = () => {
  const axiosSecure = useAxios();
  const { data: reports = [] } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reports");
      return res.data;
    },
  });
  console.log(reports);

  return (
    <div className="lg:p-10 p-5">
        <SectionTitle
        heading={"Reports and Issues"}
        subHeading={"Report"}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {reports.map((report) => (
          <div
                key={report._id}
                className=" p-6 bg-white shadow-md rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
                {/* Report Information */}
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-black">{report.title}</h3>
                    <p className="text-gray-500">{report.date}</p>
                </div>

                <div className="mb-4">
                    <p className={`border max-w-fit px-3 rounded-full font-semibold ${report.level === "High" ? "text-red-500 border-red-500 bg-red-50" : report.level === "Medium" ? "text-yellow-400 border-yellow-400 bg-yellow-50" : "text-green-500 border-green-500 bg-green-50"} `}>
                    {report.level}
                </p>
            </div><div className="mb-4">
                    <h3 className=" font-semibold text-black">Description</h3>
                    <p className="text-gray-700">{report.description}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
