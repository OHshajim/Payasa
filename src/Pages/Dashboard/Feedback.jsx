import { Rating } from "@smastrom/react-rating";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../Shared/SectionTitle";

const FeedbackForm = () => {
  const [rating, setRating] = useState(3);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-10">
        <SectionTitle heading={"Share your Experience"} subHeading={"FeedBack"}/>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-gray-50 shadow-xl rounded-xl"
      >
        <div className="flex gap-5">
          {/* Number Input */}
          <div className="mb-4 w-1/2">
            <label className="block text-sm font-bold mb-2">Number</label>
            <input
              value={`0${user?.number}`}
              type="number"
              {...register("number")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none  cursor-not-allowed"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4 w-1/2">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              value={user?.email}
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
            {...register("comment")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.comment && (
            <p className="text-red-500 text-sm mt-1">
              {errors.comment.message}
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
    </div>
  );
};

export default FeedbackForm;
