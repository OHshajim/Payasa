import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import SectionTitle from "./SectionTitle";

const Testimonial = () => {
  const { data: feedbacks = [] } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/feedbacks");
      return res.data;
    },
  });

  return (
    <div className="lg:my-40 my-20">
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
        {feedbacks.map((feedback) => (
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
