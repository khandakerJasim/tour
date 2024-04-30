import React, { useState } from "react";
import image from "./../../../../assets/doctor/rehena.jpg";
import { AiFillStar } from "react-icons/ai";
import Feedform from "./Feedbackform/Feedform";

export default function Feedback() {
  const [showfeed, setshowfeed] = useState("");
  return (
    <div>
      <h1 className="text-2xl font-bold before:content-[''] relative before:absolute before:block before:bottom-0 before:left-0 before:w-[130px] before:bg-red-400 before:h-[2px] before:hover:scale-x-100 before:scale-x-0 before:transition before:ease-out before:duration-200 text-blue-500">
        All Reviews <span className="text-sm text-gray-500">(270)</span>
      </h1>
      <div className="mt-4 flex gap-2 ">
        <figure>
          <img className="h-10 w-10 rounded-full" src={image} alt="" />
        </figure>
        <div className="flex flex-col">
          <h1 className="text-[18px] text-gray-600 font-medium">
            joshim uddin
          </h1>
          <p className="text-sm pt-1 font-medium text-gray-600 ">
            Good Skill highly recomended
          </p>
        </div>
        <div className="flex md:justify-end">
          {[...Array(5)].map((elm, i) => (
            <AiFillStar className="text-orange-400" key={i} />
          ))}
        </div>
      </div>

      {!showfeed && (
        <div className="mt-10">
          <button
            onClick={() => setshowfeed(!showfeed)}
            className="font-medium   bg-blue-500 text-white p-2 rounded-md "
          >
            get feedback
          </button>
        </div>
      )}

      {showfeed && <Feedform />}
    </div>
  );
}
