import React from "react";

export default function Mscard({ datas }) {
  return (
    <div className="p-5 md:p-2">
      <div className="">
        <h1 className="m-auto  mt-3 text-xl font-semibold text-pink-500">
          {datas.title}
        </h1>
        <h1 className=" text-sm  mt-1 font-bold text-gray-500 ">{datas.des}</h1>
      </div>
    </div>
  );
}
