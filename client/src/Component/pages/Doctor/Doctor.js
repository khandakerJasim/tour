import React from "react";
import { doctors } from "../../../assets/Data/DOctordata";
import Doctorcard from "./Doctorcard/Doctorcard";

export default function Doctor() {
  return (
    <div className="w-full h-full mx-auto bg-gray-200">
      <div className="mx-10 py-10 ">
        <div className="flex m-auto flex-col px-4 items-center">
          <h1 className="text-2xl  font-bold text-gray-700 before:content-[' '] relative before:absolute before:block before:w-full before:bottom-0 before:left-0 before:bg-red-500 before:h-[2px] before:hover:scale-x-100 before:scale-x-0  before:transition before:ease-in before:duration-500  ">
            Find a doctor
          </h1>
          <div className="flex mt-4  items-center ">
            <input
              className=" h-12 w-[250px] md:w-[400px] p-2 text-gray-600  hover:outline-none focus:outline-none hover:ring-1 ring-gray-400 "
              type="search"
              placeholder="search a doctor"
            />
            <button className="bg-blue-500 font-bold text-white h-12 w-[70px] p-2  ">
              search
            </button>
          </div>
        </div>
        <div className=" mt-7 md:mt-16 ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {doctors.map((dactor) => (
              <Doctorcard key={dactor.id} dactor={dactor} />
            ))}

            <h1>joshim</h1>
            <h1>joshim</h1>
            <h1>joshim</h1>
            <h1>joshim</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
