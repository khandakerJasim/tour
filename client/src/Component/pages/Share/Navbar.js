import React, { useState } from "react";
import Logo from "./../../../assets/logo/logo.jpg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setopen] = useState("");
  const [selected, setselected] = useState("");

  const handleselect = (value) => {
    setselected(value);
  };
  return (
    <div className="w-full h-full p-2  bg-gradient-to-b from-[#4476B4] to-[#e5c0c0] z-50 sticky top-0">
      <div className=" py-5 mx-5 flex justify-between  items-center ">
        <div className="w-1/2  flex items-center gap-3 text-white ">
          <img className="w-[70px] h-[70px]  rounded-full" src={Logo} alt="" />
          <Link to="/">
            <h1 className="md:text-3xl text-sm text-pink-500 font-bold hover:underline">
              Popular
            </h1>
          </Link>
        </div>
        <div className=" w-full mx-auto ">
          <ul
            className={`
              
            md:static md:flex top-[110px] w-full pl-[100px]  absolute transition-all
             ease-in duration-500 left-0  gap-4 text-md font-bold uppercase text-white ${
               open ? "opacity-100" : "left-[-1200px]"
             } `}
          >
            <Link t0="/Home">
              <li
                className={`${
                  selected === "home" && "border-b border-red-500"
                }`}
                onClick={() => handleselect("home")}
              >
                Home
              </li>
            </Link>
            <Link to="/About">
              <li
                onClick={() => setselected("About")}
                className={`${
                  selected === "About" && "border-b border-red-500"
                }`}
              >
                About
              </li>
            </Link>

            <Link to="/Doctor">
              <li
                onClick={() => setselected("Doctor")}
                className={`${
                  selected === "Doctor" && "border-b border-red-500"
                }`}
              >
                Doctor
              </li>
            </Link>

            <Link to="/Contact">
              <li
                onClick={() => setselected("Contact")}
                className={`${
                  selected === "Contact" && "border-b border-red-500"
                }`}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="md:hidden absolute top-3 right-5 text-white text-xl font-bold">
            <button onClick={() => setopen(!open)}>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <input
            type="search"
            placeholder="search"
            className="h-12 md:w-[400px] w-[100px] p-2 rounded-md bg-gray-100 text-gray-700 hover:outline-none focus:outline-none hover:ring-1 hover:ring-gray-500   "
          />
          <Link to="/Login">
            <button className="text-md font-bold p-2 bg-pink-500 text-gray-100 rounded-md">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
