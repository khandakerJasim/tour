import React from "react";
import img1 from "./../../../../assets/doctor/mala.jpg";
import img2 from "./../../../../assets/doctor/mehedi.jpg";
import img3 from "./../../../../assets/doctor/rehena.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="w-full h-full mx-auto bg-gray-100">
      <div className=" flex md:flex-row mx-10 pb-10 py-10 md:gap-4 flex-col-reverse">
        <div className="md:w-2/2 w-full flex flex-col   ">
          <h1 className="text-5xl font-bold text-gray-700 mt-7">
            We help a patients live a heathy and Longer life
          </h1>
          <p className="mt-5 text-sm font-bold text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem placeat reiciendis quos necessitatibus quisquam quasi
            iure facere vel officiis deserunt debitis laudantium, blanditiis
            nisi eveniet consequuntur ab corrupti repellendus aliquam
            dignissimos culpa dolor tenetur esse perspiciatis? Ullam ea ducimus
            eaque harum repellendus animi maxime, saepe quo modi? Commodi alias
            labore autem illo. Est quos perferendis, cum pariatur iusto
            reprehenderit illo? Eos alias vero blanditiis obcaecati adipisci aut
            non necessitatibus neque, tempora maiores. Quo autem maxime,
            eligendi ducimus voluptate quibusdam provident, dolor praesentium
            perspiciatis commodi ab. Quasi beatae veniam ipsam ut necessitatibus
            facere explicabo, illum deleniti, ad quisquam aliquam reprehenderit
            aliquid?
          </p>

          <Link to="/">
            <button className="bg-blue-700 flex font-bold justify-center mt-10 m-auto text-gray-100 rounded-full  text-sm p-2 w-[100px] ">
              Appoinment
            </button>
          </Link>

          <div className="flex mx-10 pt-7 gap-5 justify-between">
            <div className="grid items-center ">
              <p className=" text-xl font-bold border-b-4 border-red-500 w-[50px] text-gray-700">
                30+
              </p>
              <h1 className="text-semibold pt-1">Years experience</h1>
            </div>
            <div>
              <p className=" text-xl font-bold border-b-4 border-yellow-500 w-[50px] text-gray-700">
                12+
              </p>
              <h1 className="text-semibold pt-1">Clinic Location</h1>
            </div>
            <div>
              <p className=" text-xl font-bold border-b-4 border-blue-500 w-[50px] text-gray-700">
                100%
              </p>
              <h1 className="text-semibold pt-1">Client Satisfiction</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex ">
          <div className="p-10 w-full  flex gap-10 items-center">
            <div className="flex flex-col gap-7">
              <div className="overflow-hidden rounded-full">
                <img
                  className=" h-[80px] hover:scale-125 duration-500 w-[80px] md:h-[160px] md:w-[160px] rounded-full "
                  src={img3}
                  alt=""
                />
              </div>
              <div className="overflow-hidden rounded-full">
                <img
                  className="h-[80px] hover:scale-125 duration-500 w-[80px] md:h-[160px] md:w-[160px] rounded-full "
                  src={img2}
                  alt=""
                />
              </div>
            </div>
            <div className=" p-4 flex w-1/2 overflow-hidden rounded-3xl    ">
              <img
                className=" md:h-[300px] md:w-[250px] hover:scale-125 duration-500 h-[200px] w-[150px] md:rounded-3xl rounded-md "
                src={img1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
