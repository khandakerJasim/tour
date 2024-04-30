import React from "react";
import { Link } from "react-router-dom";
import image from "./../../../../assets/doctor/mala.jpg";
import { AiFillMessage } from "react-icons/ai";

export default function Features() {
  return (
    <div className="h-full w-full mx-auto bg-gray-100">
      <div className="flex  justify-between md:flex-row mx-10 flex-col-reverse py-10">
        <div className="flex md:w-[600px] flex-col w-full  ">
          <h1 className="md:mt-20 mt-2 text-2xl font-semibold text-gray-700">
            Get online Treatment <br />
            <span className="text-pink-500 ">any time</span>
          </h1>
          <ul className="mt-5 text-md text-gray-700 bont-semibold">
            <li>1.shedule the appoinment directory</li>
            <li>2.Search your physicain here, and contact them.</li>
            <li>
              3.view our phisician who are accepted our new patients use the
              online shedule to select the appoinment time.
            </li>
          </ul>
          <Link className="mt-7 md:justify-start justify-center flex " to="/">
            <button className="bg-blue-500 text-sm text-white p-2 rounded-md">
              know more
            </button>
          </Link>
        </div>
        <div className="md:w-[900px] w-full flex  justify-center">
          <div className="overflow-hidden relative  md:p-10   ">
            <img
              className=" md:w-[500px] md:p-7   md:h-[500px]
            md:rounded-full  hover:scale-125 duration-500 object-cover"
              src={image}
              alt=""
            />
            <div className="absolute md:bottom-[60px] mt-10 md:left-[20px] z-20   rounded-md: md: top-[220px] w-[200px] h-[100px] bg-white ">
              <div className="flex items-center gap-2 mx-2 mt-2  ">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={image}
                  alt=""
                />
                <h1 className="text-sm ">sara ali khan</h1>
                <AiFillMessage className=" flex justify-end m-auto text-yellow-400 " />
              </div>

              <p className=" px-2">10:30 thu</p>
              <button className="text-sm mt-2 bg-blue-300 text-white p-1 flex justify-center m-auto rounded-md">
                appoinment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
