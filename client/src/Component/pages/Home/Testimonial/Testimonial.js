import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import image from "./../../../../assets/doctor/rehena.jpg";
import { HiStar } from "react-icons/hi";

export default function Testimonial() {
  return (
    <div className="w-full h-full mx-auto  bg-white pb-10 ">
      <div className="flex mx-10   items-center   flex-col">
        <div className="flex flex-col w-full ">
          <h1 className=" text-3xl m-auto mt-10 text-center font-bold text-gray-700">
            what out patients say
          </h1>
          <p className="mt-2  m-auto text-center  text-gray-500 text-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            accusantium.
          </p>
        </div>
      </div>
      <Swiper
        className="md:mt-10  mt-0"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide className=" pb-10  ">
          <div
            className="flex py-4 bg-gray-100 h-[200px] w-[400px] shadow-md rounded-lg hover:bg-blue-200
           hover:text-gray-900   "
          >
            <div className="md:w-1/2 w-full flex mt-5 justify-center ">
              <img
                className="md:h-[120px]  w-[120px] rounded-full  "
                src={image}
                alt=""
              />
            </div>
            <div className="flex mt-5  w-full    flex-col">
              <h1 className="text-xl font-bold ">joshim</h1>
              <div className="flex ">
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
              </div>
              <h1 className=" font-bold opacity-80 mt-2 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates, distinctio.
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" pb-10  ">
          <div
            className="flex py-4 bg-gray-100 h-[200px] w-[400px] shadow-md rounded-lg hover:bg-blue-200
           hover:text-gray-900   "
          >
            <div className="md:w-1/2 w-full flex mt-5 justify-center  ">
              <img
                className="h-[120px]  w-[120px] rounded-full  "
                src={image}
                alt=""
              />
            </div>
            <div className="flex mt-5  w-full   flex-col">
              <h1 className="text-xl font-bold ">joshim</h1>
              <div className="flex ">
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
              </div>
              <h1 className=" font-bold opacity-80 mt-2 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates, distinctio.
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" pb-10 ">
          <div
            className="flex bg-gray-100 py-4 h-[200px] w-[400px] shadow-md rounded-lg hover:bg-blue-200
           hover:text-gray-900    "
          >
            <div className="md:w-1/2 w-full flex mt-5 justify-center    ">
              <img
                className="h-[120px]  w-[120px] rounded-full  "
                src={image}
                alt=""
              />
            </div>
            <div className="flex mt-5  w-full   flex-col">
              <h1 className="text-xl font-bold ">joshim</h1>
              <div className="flex ">
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
              </div>
              <h1 className=" font-bold opacity-80 mt-2 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates, distinctio.
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" pb-10 ">
          <div
            className="flex py-4 bg-gray-100 h-[200px] w-[400px] shadow-md rounded-lg hover:bg-blue-200
           hover:text-gray-900   "
          >
            <div className="md:w-1/2 w-full flex mt-5 justify-center   ">
              <img
                className="h-[120px]  w-[120px] rounded-full  "
                src={image}
                alt=""
              />
            </div>
            <div className="flex mt-5  w-full   flex-col">
              <h1 className="text-xl font-bold ">joshim</h1>
              <div className="flex ">
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
                <HiStar className="text-yellow-500" />
              </div>
              <h1 className=" font-bold opacity-80 mt-2 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates, distinctio.
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
