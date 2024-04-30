import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Rating from "./../Rating/Rating";
import { Link } from "react-router-dom";

export default function Doctorcard({ dactor }) {
  return (
    <div className="shadow-md p-4 ">
      <div className="">
        <figure className="overflow-hidden">
          <img
            className="h-[200px] w-[200px] object-cover bg-center rounded-md hover:scale-125 duration-500 "
            src={dactor.photo}
            alt=""
          />
        </figure>
        <h1 className="font-semibold mt-2 text-gray-700">{dactor.name}</h1>
      </div>
      <div className="mt-2 flex justify-between ">
        <h1 className="border border-gray-400 p-1 rounded-md bg-blue-300 ">
          {dactor.specialty}
        </h1>
        <span className="hidden  lg:flex items-center gap-1 md:block">
          <div className="flex">
            <Rating rating={dactor.avgRating} />
          </div>

          <div>
            {dactor.avgRating}
            <span className="text-sm">({dactor.totalRating})</span>
          </div>
        </span>
      </div>
      <div className="mt-2 flex justify-between ">
        <h1>+{dactor.totalPatients} Patients </h1>
        <div className="div animate-pulse">
          <Link to="/DoctorPreview">
            <AiOutlineArrowRight className="text-4xl p-2 font-bold shadow-md rounded-full bg-gray-100 text-gray-600 " />
          </Link>
        </div>
      </div>
      <h1 className="text-sm text-gray-600  font-semibold">
        {dactor.hospital}
      </h1>
    </div>
  );
}
