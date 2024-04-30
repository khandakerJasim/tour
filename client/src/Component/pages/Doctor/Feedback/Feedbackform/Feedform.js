import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function Feedform() {
  const [hovering, sethovering] = useState("");
  const [rating, setrating] = useState("");
  const [review, setreview] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (review === "") {
      alert("please sent your feedback");
    } else {
      console.log("review sent successfully");
    }
  };
  return (
    <div className="w-full h-full flex justify-between mt-14 gap-4   mx-auto">
      <div className=" mt-2 hidden md:block ">
        <h1 className="text-md font-md text-gray-600">
          How would you rate to overall experience?
        </h1>
        {[...Array(5)].map((elem, index) => {
          index += 1;
          return (
            <button
              onClick={() => setrating(index)}
              className={`${
                index < ((rating && hovering) || hovering)
                  ? "text-orange-500"
                  : "text-gray-500"
              } bg-transparent border-none outline-none cursor-pointer `}
              key={index}
              onMouseEnter={() => sethovering(index)}
              onMouseLeave={() => sethovering(rating)}
              onDoubleClick={() => {
                sethovering("");
                setrating("");
              }}
            >
              <span>
                <AiFillStar />
              </span>
            </button>
          );
        })}
      </div>
      <div className="">
        <h1 className="text-md font-medium text-gray-500">
          share your feedback suggetions
        </h1>

        <form className="flex flex-col" action=" ">
          <textarea
            className="mt-2 focus:outline-none hover:outline-none ring-2 ring-gray-400 bg-gray-200 p-2 "
            name=""
            id=""
            cols="30"
            rows="4"
            placeholder="write your message..."
            onChange={(e) => setreview(e.target.value)}
          />
          <button
            onClick={handlesubmit}
            className="mt-4 w-[70px] rounded-md text-md font-medium flex justify-start bg-blue-500 text-white p-2 "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
