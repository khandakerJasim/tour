import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function Login() {
  const [input, setinput] = useState({ username: "", password: "" });

  const handleclick = (e) => {
    const { name, value } = e.target;
    setinput({ ...input, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log("registration successfull");
  };
  return (
    <div className="w-full h-full md:py-10 py-0 flex justify-center ">
      <div className="w-full max-w-[570px]  rounded-lg shadow-lg py-10 mx-0 md:mx-10">
        <h1 className="m-auto text-xl font-bold text-gray-700 text-center">
          Hello?<span className="text-blue-500">Welcome</span>
        </h1>
        <form className="mt-4" action="">
          <div className="flex  w-full px-14 flex-col">
            <input
              className="h-12 w-full p-2 hover:outline-none focus:outline-none border-b-2 border-gray-300"
              type="text"
              placeholder="enter your email or phone"
              name="username"
              value={input.username}
              onChange={handleclick}
              required
            />
            <input
              className="h-12 w-full p-2 mt-3 hover:outline-none focus:outline-none border-b-2 border-gray-300"
              type="text"
              placeholder="enter your password"
              name="password"
              value={input.password}
              onChange={handleclick}
              required
            />
            <button
              onClick={handlesubmit}
              className="w-full mt-10 p-2 rounded-md bg-blue-500 text-white"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-3">
          <h1 className="m-auto text-center">
            Have no account ?
            <span className="text-blue-500 hover:underline">
              <Link to="/Register">Register</Link>
            </span>
          </h1>
          <div className="flex m-auto mt-4 flex-col  items-center ">
            <div className="mt-3 flex items-center gap-1 border w-[200px] p-2 border-gray-300">
              <FaFacebookF className="bg-blue-500 text-white p-2 text-3xl rounded-full " />
              <h1>Login with facebook</h1>
            </div>
            <div className="mt-3 flex items-center gap-1 border w-[200px] p-2 border-gray-300">
              <FaGoogle className="bg-blue-500 text-white p-2 text-3xl rounded-full " />
              <h1>Login with Google</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
