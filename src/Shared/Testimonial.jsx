import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import SectionTitle from "./SectionTitle";

const feed = [
  {
    number: "+1-202-555-0143",
    email: "john.doe@example.com",
    rating: 5,
    comment:
      "Payasa offers a seamless experience! Quick transactions and user-friendly interface.",
    date: "2024-09-21",
  },
  {
    number: "+44-7700-900567",
    email: "sarah.jones@example.co.uk",
    rating: 4.5,
    comment:
      "Very reliable service, but the app could load a bit faster during peak hours.",
    date: "2024-09-20",
  },
  {
    number: "+91-98765-43210",
    email: "raj.patel@example.in",
    rating: 4,
    comment:
      "Convenient for international transfers, though I’d like to see more features in future updates.",
    date: "2024-09-19",
  },
  {
    number: "+61-450-555-345",
    email: "emma.taylor@example.au",
    rating: 5,
    comment:
      "Excellent customer service and fast processing! Highly recommend Payasa for everyday use.",
    date: "2024-09-18",
  },
];

const Testimonial = () => {
  const { data: feedbacks = [], isPending: loading } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/feedbacks");
      return res.data;
    },
  });
  console.log(feedbacks);

  return (
    <div className="my-20">
        <SectionTitle heading={"Real feedback from satisfied customers"} subHeading={"What Our Users Say"}/>
      {/* {
                loading && <div className="flex justify-center my-10">
                    {
                        loading && <Loader />
                    }
                </div>
            } */}

      <Swiper
        slidesPerView={1.3}
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          reverseDirection: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {feed.map((feedback) => (
          <SwiperSlide key={feedback._id}>
            <div className="flex flex-col items-center pb-10 bg-green-50 rounded-xl ">
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
                        style={{ maxWidth: 180 }}
                        value={feedback.rating}
                        readOnly
                      />
                    </div>
                    <p className="text-right mt-2 font-semibold text-sm">{feedback.date}</p>
                  </div>
                </div>
                <hr />
                <p className="text-sm sm:text-base my-2">{feedback.comment}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
