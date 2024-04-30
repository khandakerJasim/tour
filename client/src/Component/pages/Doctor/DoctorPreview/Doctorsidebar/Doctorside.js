import React from "react";

export default function Doctorside() {
  return (
    <div className=" h-full bg-yellow-50 rounded-md ">
      <div className="p-4">
        <ul>
          <li className="flex justify-between">
            <span className="text-sm">Ticketprice</span>
            <span className="flex text-sm flex-col">
              BDT:1000/ <span>online-500/</span>
            </span>
          </li>
        </ul>
        <p className="mt-5">Available time slot:</p>
        <ul className="mt-3">
          <li className="flex justify-between">
            <span>Monday</span>
            <span>12.00-2.00</span>
          </li>
          <li className="flex justify-between">
            <span>Friday</span>
            <span>12.00-2.00</span>
          </li>
          <li className="flex justify-between">
            <span>Tuesday</span>
            <span>12.00-2.00</span>
          </li>
          <li className="flex justify-between">
            <span>saturday</span>
            <span>12.00-2.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
