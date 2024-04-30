import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-full bg-gray-100 p-3 mx-auto pb-5 ">
      <div className="grid mx-7 py-6 grid-cols-2 lg:grid-cols-5 md:grid-cols-4 justify-center  gap-7">
        <div className="grid md:col-span-2">
          <h1 className="text-xl font-bold  text-red-500  ">popular</h1>
          <div className="mt-4 text-md grid overflow-hidden ">
            <p>uttata</p>
            <span>Dhaka 1230</span>
            <p>Bangladesh</p>
            <p>phone:01601863690</p>
            <p>email:md.joshimuddin876@gmil.com</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-700    ">Quick link</h1>
          <ul className="mt-4">
            <li>
              <Link to="/" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/About" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">About</span>
              </Link>
            </li>
            <li>
              <Link to="/Doctor" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">Doctors</span>
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold  text-gray-700    ">i want to </h1>
          <ul className="mt-4">
            <li>
              <Link to="Doctor" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">Find A Doctor</span>
              </Link>
            </li>
            <li>
              <Link to="/About" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">
                  Request an appoinment
                </span>
              </Link>
            </li>
            <li>
              <Link to="/Doctor" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">Find a Location</span>
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">Options</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold  text-gray-700   ">support</h1>
          <ul className="mt-4">
            <li>
              <Link to="Doctor" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">Donate</span>
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">Contact us</span>
              </Link>
            </li>
            <li>
              <Link to="/Doctor" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">Faqs</span>
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="flex items-center gap-1">
                <Icon className="text-blue-500 " icon="maki:arrow" />
                <span className="hover:text-red-500">Setting</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:mx-20 p-6  flex justify-between rounded-md shadow-md  bg-[#8996B9]">
        <div>
          <h1 className="text-red-500">Popular</h1>
          <span className="text-gray-800">All time Reserved it.</span>
          <h1 className="text-gray-800">
            Design By: <span className="text-red-700">Md Joshim uddin</span>{" "}
          </h1>
        </div>
        <div className="grid md:grid-cols-4 items-center grid-cols-2 gap-3 ">
          <Link className="link hover:translate-y-1">
            <FaFacebookF className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white text-3xl p-1 rounded-full hover:transition-all ease-in duration-500" />
          </Link>
          <Link className="link hover:translate-y-1">
            <FaTwitter className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white text-3xl p-1 rounded-full hover:transition-all ease-in duration-500" />
          </Link>
          <Link className="link hover:translate-y-1">
            <FaYoutube className="bg-white text-red-500 hover:bg-red-500 hover:text-white text-3xl p-1 rounded-full hover:transition-all ease-in duration-500" />
          </Link>
          <Link className="link hover:translate-y-1">
            <FaInstagram className="bg-white text-red-500 hover:bg-red-500 hover:text-white text-3xl p-1 rounded-full hover:transition-all ease-in duration-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
