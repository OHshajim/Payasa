import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from 'swiper/modules';
import { TbCurrencyTaka } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
const Banner = () => {
  return (
    <div className=" my-20">
      <SectionTitle heading={"NEVER MISS OUR OFFERS && SERVICES"} subHeading={"Our Services"}/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative z-0">
            <img src="/banner1.jpg" alt="" />
            <div className="absolute z-10 top-0 w-full h-full ">
              <div className="flex justify-between items-center w-full h-full">
                <div></div>
                <div className="px-20 max-w-5xl ">
                  <h4 className="text-xl text-green-400 font-semibold ">
                    <span>Bonus Offer for New Accounts </span>
                  </h4>
                  <div className="text-5xl text-white font-bold leading-[100px] my-5">
                    <h3 className="  flex">
                      <span className="text-green-500 flex items-center">
                        50
                        <TbCurrencyTaka />
                      </span>{" "}
                      Taka for General Accounts
                    </h3>
                    <h3 className="text-center">&</h3>
                    <h3 className=" flex">
                      <span className="text-green-500 flex items-center">
                        20000 <TbCurrencyTaka />
                      </span>{" "}
                      Taka for new Agents !!!
                    </h3>
                  </div>
                  <p className="text-zinc-300">
                    This bonus only for new accounts and also its only for one
                    time bonus - powered by{" "}
                    <span className="text-green-500 font-semibold ">
                      PAYASA
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative z-0">
            <img
              src="/banner1.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <div className="absolute z-10 inset-0 bg-green-600 bg-opacity-50 flex items-center">
              <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32">
                <div className="border p-6 sm:p-10 bg-opacity-70 bg-black rounded-md text-center ">
                  <h4 className="text-xl text-green-400 font-semibold ">
                    Money transfer Offers
                  </h4>
                  <h3 className="text-4xl text-white font-bold my-5 flex justify-center items-center">
                    <span className="text-green-500 flex items-center">
                      50
                      <TbCurrencyTaka />
                    </span> Taka for every 1000 <TbCurrencyTaka/> Taka Send Money transactions
                  </h3>
                  <h3 className="text-4xl text-white font-bold">
                    &
                  </h3>
                  <h3 className="text-4xl text-white font-bold my-5 flex justify-center items-center">
                    <span className="text-green-500 flex items-center">
                      15
                      <TbCurrencyTaka />
                    </span> Taka for every 1000 <TbCurrencyTaka/>  Taka Cash Out transactions !!!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
