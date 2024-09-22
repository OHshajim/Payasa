import { Rating } from "@smastrom/react-rating";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../Shared/SectionTitle";
import useAxios from "../../CustomHooks/useAxios";

const FeedbackForm = () => {
  const [rating, setRating] = useState(3);
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
    const feedback = {
      ...data,
      rating: rating,
      date: formattedDate,
    };
    console.log(feedback);
    try {
      const res = await axiosSecure.post(`/feedback`, feedback);
      console.log(res);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:p-10 p-5">
      <SectionTitle heading={"Share your Experience"} subHeading={"FeedBack"} />
      {loading || (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-gray-50 shadow-xl rounded-xl"
        >
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* Number Input */}
            <div className="mb-4 lg:w-1/2">
              <label className="block text-sm font-bold mb-2">Number</label>
              <input
                value={`0${user.number}`}
                type="number"
                {...register("number")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none  cursor-not-allowed"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4 lg:w-1/2">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                value={user.email}
                type="email"
                {...register("email")}
                className="w-full px-3 py-2 border rounded-md cursor-not-allowed"
              />
            </div>
          </div>

          {/* Rating Input */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Rating</label>
            <Rating
              style={{ maxWidth: 180 }}
              value={rating}
              onChange={setRating}
            />
          </div>

          {/* Comment Input */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Comment</label>
            <textarea
              {...register("comment", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            {errors.comment && (
              <p className="text-red-500 text-sm mt-1">
                Comment is required ***
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
