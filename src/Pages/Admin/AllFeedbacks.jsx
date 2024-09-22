import { useQuery } from "@tanstack/react-query";
import useAxios from "../../CustomHooks/useAxios";
import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../Shared/SectionTitle";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useCount from "../../CustomHooks/useCount";
import { useState } from "react";
import Loader from "../../Shared/Loader";

const AllFeedbacks = () => {
  const axiosSecure = useAxios();
  const [currentPage, setPage] = useState(0);
  const { count } = useCount("/AllFeedbackOfPage");
  const itemPerPage = 6;
  const numberOfPage = Math.ceil(count.data / itemPerPage) || 1;
  let pages = [];
  if (numberOfPage > 0) {
    pages = [...Array(numberOfPage).keys()];
  } else {
    console.error("Invalid number of pages");
  }

  const { data: feedbacks = [], isPending } = useQuery({
    queryKey: ["feedbacks", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/AllFeedbacks?page=${currentPage}`);
      return res.data;
    },
  });

  const handleNext = () => {
    if (currentPage < pages?.length - 1) {
      setPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setPage(currentPage - 1);
    }
  };
  return (
    <div className=" p-5 lg:p-10">
      <SectionTitle heading={"Share your Experience"} subHeading={"FeedBack"} />
      {isPending ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 2xl:grid-cols-2  gap-10">
          {feedbacks.map((feedback) => (
            <div
              key={feedback._id}
              className="flex flex-col items-center pb-10 bg-green-50 rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
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
      )}

      {/* pagination */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={handlePrev}
          className="px-5 py-2 text-sm text-green-500 bg-green-50 border rounded-md gap-x-2 hover:bg-green-100 hover:text-green-600"
        >
          {/* <FaArrowLeftLong /> */}

          <span>previous</span>
        </button>

        <div className="items-center hidden lg:flex gap-x-3">
          {pages?.map((page) => (
            <button
              onClick={() => setPage(page)}
              key={page}
              className={`px-2 py-1 text-sm  rounded-md   ${
                currentPage == page
                  ? "text-green-500 bg-green-50"
                  : "text-gray-500 bg-gray-100"
              }`}
            >
              {page + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="px-5 py-2 text-sm text-green-500 bg-green-50 border rounded-md gap-x-2 hover:bg-green-100 hover:text-green-600"
        >
          Next
          {/* <FaArrowRightLong /> */}
        </button>
      </div>
    </div>
  );
};

export default AllFeedbacks;
