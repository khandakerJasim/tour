import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Rating({ rating }) {
  return (
    <>
      {[...Array(5)].map((elem, i) => (
        <span key={i}>
          {rating > i ? (
            <AiFillStar className="text-yellow-500" />
          ) : (
            <AiOutlineStar />
          )}
        </span>
      ))}
    </>
  );
}
