import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Scard({ datas }) {
  return (
    <div
      className="cart shadow-md h-[240px]  p-3 items-center
       rounded-md hover:bg-blue-200"
    >
      <div>
        <div className=" mt-4">
          <img
            className=" h-[60px] w-[60px] flex m-auto text-center   rounded-full animate-pulse"
            src={datas.image}
            alt=""
          />
        </div>
        <div className=" text-xl font-semibold  text-gray-700">
          <h1 className=" m-auto mt-1 text-center">{datas.title}</h1>
          <h1 className=" text-sm ">{datas.des}</h1>
        </div>
      </div>
    </div>
  );
}
