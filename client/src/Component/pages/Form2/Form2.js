import React, { useState } from "react";
import Forminput from "./Forminput";

const Formdatas = [
  {
    id: 2,
    type: "text",
    name: "name",
    placeholder: "Enter your name",
    label: "username",
    errormessage: "please input your name",
    required: true,
  },
  {
    id: 3,
    type: "email",
    name: "email",
    placeholder: "Enter your enmail",
    label: "email",
    errormessage: "please input your email and verify email",
    required: true,
  },
  {
    id: 4,
    type: "phone",
    name: "phone",
    placeholder: "Enter your phone number",
    errormessage: "please input your phone number of 11 digit ",
    label: "phone",
    required: true,
  },
  {
    id: 5,
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    errormessage: "please input your phone number of 11 digit ",
    label: "password",
    required: true,
  },
  {
    id: 6,
    type: "confirm password",
    placeholder: "Enter your confirm password",
    errormessage: "please input your phone number of 11 digit ",
    name: "cpassword",
    label: "confirm password",
    required: true,
  },
  {
    id: 7,
    type: "date",
    placeholder: "Enter your Birthday",
    name: "birthday",
    label: "Birthday",
    errormessage: "please input your phone number of 11 digit ",
    required: true,
  },
  {
    id: 8,
    type: "date",
    placeholder: "Enter your Birthday",
    name: "birthday",
    label: "Birthday",
    errormessage: "please input your phone number of 11 digit ",
    required: true,
  },
];

export default function Form2() {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    birthday: "",
    cpassword: "",
  });

  const handlechange = (e) => {
    setvalues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("registrayion successfull");
  };

  return (
    <div className="w-full h-full m-auto bg-gray-200 flex justify-center py-20 ">
      <div className="p-10 shadow-md  md:w-[600px] grid items-center justify-center ">
        <h1 className=" m-auto text-center  text-xl font-semibold ">
          Shortes away to form handling
        </h1>

        <div className="mt-3 justify-center items-center   flex-col flex ">
          <h1 id="h1" className="text-2xl">
            Register your account
          </h1>
          <form className="mt-6" onSubmit={handlesubmit} action="">
            {Formdatas.map((input) => (
              <Forminput
                key={input.id}
                {...input}
                value={values[input.name]}
                onchange={handlechange}
              />
            ))}
            <button className="mt-10 flex justify-center items-center m-auto text-xl font-bold text-white bg-red-500 p-2 rounded-md  ">
              submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
