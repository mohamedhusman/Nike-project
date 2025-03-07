import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="text-gray-500 text-center text-wrap break-words mt-6 max-w-sm">
        {feedback}
      </p>
      <div className="flex mt-6 gap-2">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-gray-500 text-xl montserrat">({rating})</p>
      </div>
      <h2 className="mt-1 palanquin text-3xl text-center font-bold">
        {customerName}
      </h2>
    </div>
  );
};

export default ReviewCard;
