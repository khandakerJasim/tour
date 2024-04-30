import React from "react";
import Dateformate from "../../../Dateformate/Dateformate";

export default function DoctorAbout() {
  return (
    <div className="">
      <div>
        <p className="text-2xl text-gray-700 font-bold">
          About <span className="text-blue-500">Md Habib</span>
          <p className="pt-1 text-sm font-medium ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            repellendus atque adipisci nobis illo maiores nisi minus minima.
            Sapiente, alias iure laborum cupiditate atque magnam iusto, tenetur,
            sed hic in numquam perferendis consequatur veritatis cum neque
            dolores illum nostrum voluptates. Architecto aspernatur, iste nam
            corporis debitis obcaecati. Nemo, ullam.
          </p>
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-blue-500 text-2xl font-bold ">Education</h1>
        <ul className=" mt-1 flex gap-10 md:gap-20 md:p-3">
          <li>
            <div>
              <span className="text-sm font-medium text-green-700 p-1 ">
                {Dateformate("5-02-2003")}
              </span>
              <h1 className="phd font-medium text-md text-gray-700 ">
                MBBS in Sergion
              </h1>
              <p className="text-sm font-medium text-gray-500">
                Dhaka medical college
              </p>
            </div>
          </li>
          <li>
            <div>
              <span className="text-sm font-medium text-green-700 p-1 ">
                {Dateformate("12-04-2010")}
              </span>
              <h1 className="phd font-medium text-md text-gray-700 ">
                PHD in Sergion
              </h1>
              <p className="text-sm font-medium text-gray-500">
                Mymensingh Medical college
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl text-blue-500 font-bold ">Experience</h1>

        <ul className="flex md:gap-20 gap-10 ">
          <li className="bg-yellow-100 rounded-md shadow-md mt-2 p-2">
            <div>
              <span className="text-sm font-medium text-gray-400">
                {Dateformate("3-5-2016")}
              </span>
              <h1 className="text-md font-medium text-gray-700 ">Sr Sergion</h1>
              <h1 className="text-sm font-medium text-gray-500 ">
                Dhaka medical college hospital
              </h1>
            </div>
          </li>
          <li className="bg-yellow-100 rounded-md shadow-md mt-2 p-2">
            <div>
              <span className="text-sm font-medium text-gray-400">
                {Dateformate("1-4-2014")}
              </span>
              <h1 className="text-md font-medium text-gray-700 ">Sr Sergion</h1>
              <h1 className="text-sm font-medium text-gray-500 ">
                Dhaka medical college hospital
              </h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
