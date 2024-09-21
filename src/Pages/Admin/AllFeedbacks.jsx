import { useQuery } from "@tanstack/react-query";
import useAxios from "../../CustomHooks/useAxios";
import { Rating } from "@smastrom/react-rating";

const AllFeedbacks = () => {
  const axiosSecure = useAxios();
  const { data: feedbacks = [] } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllFeedbacks");
      return res.data;
    },
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
      {feedbacks.map((feedback) => (
        <div key={feedback._id} className="flex flex-col items-center pb-10 bg-green-50 rounded-xl ">
          <div className="w-full  px-3 sm:px-10">
            <div className="flex md:items-center justify-between  py-8 flex-col md:flex-row">
              <div className="mx-0 flex items-center gap-4 ">
                <img
                  src="https://i.ibb.co.com/Mc6FwVb/112186-OOJKAQ-59.jpg"
                  alt={feedback.number}
                  className="w-12 h-12 md:h-16  md:w-16 rounded-full p-1 border-2 border-blue-600"
                />
                <div>
                  <h4 className="font-bold">{feedback.email}</h4>
                  <p className="text-xs sm:text-sm font-bold">
                    {feedback.number}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center mt-2">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={feedback.rating}
                    readOnly
                  />
                </div>
                <p className="text-right mt-2 font-semibold text-sm">
                  {feedback.date}
                </p>
              </div>
            </div>
            <hr />
            <p className="text-sm sm:text-base my-2">{feedback.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllFeedbacks;
