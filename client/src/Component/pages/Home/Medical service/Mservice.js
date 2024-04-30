import React from "react";
import Mscard from "./Mscard";

export default function Mservice() {
  const data = [
    {
      id: 1,
      title: "Cancer Care",
      des: "world class health everyone our health system un matched eexpert health care from lab to the clinic",
    },
    {
      id: 2,
      title: "Labour-Delivery",
      des: "world class health everyone our health system un matched eexpert health care from lab to the clinic",
    },
    {
      id: 3,
      title: "heart visualiztion",
      des: "world class health everyone our health system un matched eexpert health care from lab to the clinic",
    },
    {
      id: 4,
      title: "Mental Health",
      des: "world class health everyone our health system un matched eexpert health care from lab to the clinic",
    },
    {
      id: 5,
      title: "Neorology",
      des: "world class health everyone our health system un matched eexpert health care from lab to the clinic",
    },
    {
      id: 6,
      title: "Burn-treatment",
      des: "world class health everyone our health system un matched eexpert health care from lab to the clinic",
    },
    {
      id: 7,
      title: "Dental Care",
      des: "world class health everyone our health system un matched eexpert health care from lab to the clinic",
    },
    {
      id: 8,
      title: "Medicine",
      des: "world class health everyone our health system un matched eexpert health care from lab to the clinic",
    },
    {
      id: 9,
      title: "Skin Care",
      des: "world class health everyone our health system un matched eexpert health care from lab to the clinic",
    },
  ];

  return (
    <div className="h-full w-full  bg-gradient-to-b from-white to-slate-200">
      <div className=" flex flex-col pt-8 px-10  pb-10 ">
        <div className="flex  items-center flex-col">
          <h1 className="text-3xl font-bold text-gray-800">
            our medical services
          </h1>
          <h1 className="mt-3 text-xl  font-bold text-gray-500">
            world class health everyone our health system un matched eexpert
            health care from lab
          </h1>
        </div>
        <div className="grid md:grid-cols-3  md:mt-10 mt-5 gap-3 md:gap-7 grid-cols-2  ">
          {data.map((datas) => (
            <React.Fragment>
              <div key={datas.id}>
                <Mscard datas={datas} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
