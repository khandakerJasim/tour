import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

export default function Gototop() {
  const [visible, setvisible] = useState(false);
  const scrollbtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const btnlisten = () => {
    let topscrollhidden = 250;

    const Winscroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (Winscroll > topscrollhidden) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", btnlisten);
    return window.removeEventListener("scroll", btnlisten);
  });

  return (
    <div className="fixed bottom-5 flex gap-4 justify-center items-center right-10 z-50">
      {visible ? (
        <div className="cursor-pointer" onClick={scrollbtn}>
          <FaArrowUp className="bg-red-500 text-white text-3xl p-2 rounded-full animate-bounce" />
        </div>
      ) : (
        <div className="cursor-pointer" onClick={scrollbtn}>
          <FaArrowUp className="bg-red-500 text-white text-3xl p-2 rounded-full animate-bounce" />
        </div>
      )}

      <AiFillMessage className="text-3xl bg-blue-500 text-white rounded-full p-2 animate-pulse" />
    </div>
  );
}
