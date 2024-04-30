import React, { useState } from "react";
import img from "./../../../../assets/doctor/mala.jpg";
import DoctorAbout from "../DoctorAbout/DoctorAbout";
import Feedback from "../Feedback/Feedback";
import Doctorside from "./Doctorsidebar/Doctorside";

export default function DoctorPreview() {
  const [open, setopen] = useState("about");
  return (
    <div className="w-full h-full bg-white mx-auto">
      <div className=" mx-10 md:px-40 px-6 shadow-md py-10 justify-center m-auto  max-w-[1170px]">
        <h1>About me</h1>
        <div className="flex flex-col mt-4 gap-2 md:flex-row">
          <div className="md:w-1/2 px-2 flex justify-center overflow-hidden w-full">
            <figure className="">
              <img
                className="md:h-[300px] md:w-[500px] rounded-md "
                src={img}
                alt=""
              />
            </figure>
          </div>
          <div className="w-full flex flex-col px-2 ">
            <h1>name:joshim uddin</h1>
            <h1>kghpojopjo</h1>
            <p>kjffjgjooj</p>
          </div>
          <div className="shadow-md md:w-[400px]">
            <Doctorside />
          </div>
        </div>
        <div className="flex pt-10  border-b-2 border-gray-400 gap-[50px]">
          <button
            className={`${open === "about" && "border-b-2 border-gray-600"}`}
            onClick={() => setopen("about")}
          >
            About
          </button>
          <button
            className={`${open === "feedback" && "border-b-2 border-gray-600"}`}
            onClick={() => setopen("feedback")}
          >
            Feedback
          </button>
        </div>
        <div className="mt-[20px]">
          {open === "about" && <DoctorAbout />}
          {open === "feedback" && <Feedback />}
        </div>
      </div>
    </div>
  );
}
