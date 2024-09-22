import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { TbCurrencyTaka } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
const Banner = () => {
  return (
    <div className="my-20">
      <SectionTitle
        heading={"NEVER MISS OUR OFFERS && SERVICES"}
        subHeading={"Our Services"}
      />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
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
          <div>
            <img
              src="https://i.ibb.co.com/tJRxdmW/banner2.png"
              alt="banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative z-0">
            <img
              src="https://i.ibb.co.com/TkfLWJn/banner1.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <div className="absolute z-10 top-0 w-full h-full bg-black/50">
              <div className="flex flex-row justify-between items-center w-full h-full">
                <div></div>
                <div className="px-5 lg:px-20 max-w-xl lg:max-w-5xl text-center lg:text-left">
                  <h4 className="lg:text-xl md:text-base text-[5px] text-green-400 font-semibold">
                    Bonus Offer for New Accounts
                  </h4>
                  <div className="text-sm md:text-xl lg:text-3xl xl:text-5xl text-white font-bold leading-tight xl:leading-[100px] lg:my-5">
                    <h3 className="flex justify-center lg:justify-start">
                      <span className="text-green-500 flex items-center">
                        50
                        <TbCurrencyTaka />
                      </span>{" "}
                      Taka for General Accounts
                    </h3>
                    <h3 className="text-center lg:my-3">&</h3>
                    <h3 className="flex justify-center lg:justify-start">
                      <span className="text-green-500 flex items-center">
                        20000 <TbCurrencyTaka />
                      </span>{" "}
                      Taka for new Agents !!!
                    </h3>
                  </div>
                  <p className="text-zinc-300 lg:text-sm md:text-xs text-[5px]">
                    This bonus is only for new accounts and is a one-time bonus
                    - powered by{" "}
                    <span className="text-green-500 font-semibold">PAYASA</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative z-0">
            <img
              src="https://i.ibb.co/TkfLWJn/banner1.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <div className="absolute z-10 inset-0 bg-green-600 bg-opacity-30 flex items-center">
              <div className="w-full  sm:px-8 md:px-16 lg:px-32">
                <div className="border p-4 sm:p-8 md:p-10 bg-opacity-80 bg-black rounded-md text-center">
                  <h4 className="text-xs sm:text-sm md:text-base lg:text-xl text-green-400 font-semibold">
                    Money Transfer Offers
                  </h4>
                  <h3 className="text-xs md:text-xl lg:text-2xl xl:text-5xl text-white font-bold md:my-5 flex justify-center items-center">
                    <span className="text-green-500 flex items-center">
                      50
                      <TbCurrencyTaka />
                    </span>{" "}
                    Taka for every 1000 <TbCurrencyTaka /> Taka Send Money
                  </h3>
                  <h3 className="text-xs md:text-xl lg:text-2xl xl:text-5xl text-white font-bold">
                    &
                  </h3>
                  <h3 className="text-xs md:text-xl lg:text-2xl xl:text-5xl text-white font-bold md:my-5 flex justify-center items-center">
                    <span className="text-green-500 flex items-center">
                      15
                      <TbCurrencyTaka />
                    </span>{" "}
                    Taka for every 1000 <TbCurrencyTaka /> Taka Cash Out !!!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
