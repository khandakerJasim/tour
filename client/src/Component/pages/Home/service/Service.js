import React from "react";
import Scard from "./Scard";

export default function Service() {
  const data = [
    {
      id: 1,
      image:
        "https://cdn-icons-png.flaticon.com/128/6401/6401082.png?ga=GA1.1.1482089569.1695025956&track=ais",
      title: "Find a Doctor",
      des: "lorem best website for the doctor appoinment we are the best",
    },
    {
      id: 2,
      image:
        "https://cdn-icons-png.flaticon.com/128/9624/9624927.png?ga=GA1.1.1482089569.1695025956&track=ais",
      title: "Find a location",
      des: "lorem best website for the doctor appoinment we are the best",
    },
    {
      id: 3,
      image:
        "https://cdn-icons-png.flaticon.com/128/7658/7658135.png?ga=GA1.1.1482089569.1695025956&track=ais",
      title: "Book a apoinment",
      des: "lorem best website for the doctor appoinment we are the best",
    },
  ];
  return (
    <div className="h-full w-full mx-auto bg-gray-100">
      <div className="flex justify-center flex-col mx-10 p-10 ">
        <h1 className="text-4xl text-center m-auto text-gray-800 pb-2 font-bold before:content-[''] relative before:absolute,before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:transition before:ease-in before:duration-500 before:top-middle">
          provided the best medical services
        </h1>
        <h1 className=" text-xl m-auto text-center font-semibold text-gray-700">
          word class care everywhere.our class is very important
        </h1>
      </div>
      <div className="grid grid-cols-2 justify-center md:my-11  md:grid-cols-3 gap-4 ">
        {data.map((datas) => (
          <React.Fragment>
            <div key={datas.id}>
              <Scard datas={datas} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
