import React from "react";
import "./../../../Style/style.css";

export default function Forminput(props) {
  const { label, onchange, errormessage, ...inputprops } = props;
  return (
    <div className="flex flex-col joshim">
      <label className="text-md font-semibold mt-2 text-gray-800" htmlFor="">
        {label}
      </label>
      <input
        className=" input md:w-[500px] mt-1 h-12 rounded-md p-2 bg-gray-100 text-gray-700 hover:outline-none focus:outline-none hover:ring-1 ring-gray-400  "
        {...inputprops}
        onChange={onchange}
      />
    </div>
  );
}
