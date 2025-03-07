import React from "react";

const Button = ({ label, iconURL, fullWidth }) => {
  if (label == "Learn more") {
    return (
      <button className="flex justify-center items-center px-7 py-4 gap-2 montserrat bg-white rounded-full text-gray-500 border-gray-500 border-2">
        {label}
      </button>
    );
  } else if (label == "View details") {
    return (
      <button className="flex justify-center items-center px-7 py-4 gap-2 montserrat bg-red-400 rounded-full text-white border-red-400">
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    );
  } else if (label == "Sign Up") {
    return (
      <button className="flex justify-center items-center px-7 py-4 gap-2 montserrat bg-red-400 rounded-full text-white border-red-400">
        {label}
      </button>
    );
  }
};

export default Button;
