import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle";
import useAxios from "../../CustomHooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Report = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US");
  const onSubmit = async (data) => {
    const report = {
      ...data,
      date: formattedDate,
    };
    console.log(report);
    try {
      const res = await axiosSecure.post(`/report`, report);
      console.log(res);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">
      <SectionTitle
        heading={"Report an Issue"}
        subHeading={"Report"}
      />
      {loading || (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-gray-50 shadow-xl rounded-xl"
        >
          <div className="flex gap-5">
            {/* Number Input */}
            <div className="mb-4 w-1/2">
              <label className="block text-sm font-bold mb-2">Number</label>
              <input
                value={`0${user.number}`}
                type="number"
                {...register("number")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none  cursor-not-allowed"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4 w-1/2">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                value={user.email}
                type="email"
                {...register("email")}
                className="w-full px-3 py-2 border rounded-md cursor-not-allowed"
              />
            </div>
          </div>

          {/* Report Title */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Report Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">Title is required ***</p>
            )}
          </div>

          {/* Priority Level */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Priority Level
            </label>
            <select
              {...register("level")}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                A detailed description is required ***
              </p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600"
          >
            Submit Report
          </button>
        </form>
      )}
    </div>
  );
};

export default Report;
