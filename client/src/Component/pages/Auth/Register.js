import React, { useEffect } from "react";
import image from "./../../../assets/doctor/mala.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [isphoto, setphoto] = useState("");
  const [preview, setpreview] = useState(false);
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    photo: isphoto,
    gender: "",
    role: "patient",
  });

  const handlclick = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  useEffect(() => {
    if (isphoto) {
      setpreview(URL.createObjectURL(isphoto));
    }
  }, [isphoto]);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("registration successsfull");
  };

  return (
    <div className="w-full h-full mx-auto py-10">
      <div
        className=" w-full max-w-[1170px] px-10  grid md:grid-cols-2 grid-cols-1
        shadow-md rounded-md "
      >
        <div className=" hidden  md:block  overflow-hidden ">
          <figure>
            <img
              className="h-[400px]  hover:scale-125 object-cover duration-500 rounded-md"
              src={image}
              alt=""
            />
          </figure>
        </div>
        <div className=" md:pl-10 pl-0 pb-10 ">
          <h1 className="text-2xl font-bold text-gray-700 ">
            Create an <span className="text-blue-500">Account</span>
          </h1>
          <form className="mt-4  " action="">
            <div className="flex  flex-col">
              <input
                className="h-12 p-2 hover:outline-none focus:outline-none border-b-2 border-gray-300"
                type="text"
                placeholder="enter your name"
                name="name"
                value={formdata.name}
                onChange={handlclick}
              />
              <input
                className="h-12 w-full p-2 mt-3 hover:outline-none focus:outline-none border-b-2 border-gray-300"
                type="text"
                placeholder="enter your email"
                name="email"
                value={formdata.email}
                onChange={handlclick}
              />
              <input
                className="h-12 w-full p-2 mt-3 hover:outline-none focus:outline-none
                 border-b-2 border-gray-300"
                type="text"
                placeholder="enter your phone"
                name="phone"
                value={formdata.phone}
                onChange={handlclick}
              />
              <input
                className="h-12 w-full p-2 mt-3 hover:outline-none focus:outline-none border-b-2 border-gray-300"
                type="text"
                placeholder="enter your password"
                name="password"
                value={formdata.password}
                onChange={handlclick}
              />
              <div className="mt-5 flex items-center justify-between ">
                <div className="space-x-2">
                  <label
                    className="text-md text-gray-700 font-semibold"
                    htmlFor=""
                  >
                    Who are you?
                  </label>
                  <select
                    className=" focus:outline-none text-sm text-bold  "
                    name="role"
                    value={formdata.role}
                    onChange={handlclick}
                  >
                    <option value="patient">patient</option>
                    <option value="doctor">doctor</option>
                  </select>
                </div>
                <div className="space-x-2">
                  <label
                    className="text-md text-gray-700 font-semibold"
                    htmlFor=""
                  >
                    gender:
                  </label>
                  <select
                    className=" focus:outline-none text-sm text-bold    "
                    name="gender"
                    value={formdata.gender}
                    onChange={handlclick}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mt-5 flex gap-3 items-center">
                <figure>
                  <img
                    className="h-[40px] w-[40px] rounded-full "
                    src={preview ? preview : image}
                    alt=""
                  />
                </figure>
                <div className="relative w-[100px] h-8">
                  <input
                    type="file"
                    name="photo"
                    onChange={(e) => setphoto(e.target.files[0])}
                    id="customFile"
                    accept=".jpg,.png"
                    className="absolute top-0 border left-0 w-full h-full opacity-0 cursor-pointer "
                  />
                  <label
                    className="absolute top-0 p-1 left-0 text-sm
                     font-bold text-gray-600  w-full h-full flex items-center
                      truncate overflow-hidden cursor-pointer"
                    htmlFor="customFile"
                  >
                    upload photo
                  </label>
                </div>
              </div>
              <button
                onClick={handlesubmit}
                className="w-full md:mt-10 mt-4 font-bold p-2 rounded-md bg-blue-500 text-white"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-3">
            <h1 className="m-auto text-center">
              Already Have account ?
              <span className="text-blue-500 hover:underline">
                <Link to="/Login">Login</Link>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
