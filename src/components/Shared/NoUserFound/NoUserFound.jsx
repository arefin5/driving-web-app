import React from "react";

const NoUserFound = ({ message }) => {
  return (
    <div>
      <p className="text-center flex justify-center items-center text-3xl primary-text-color h-[300px]">
        {message}
      </p>
    </div>
  );
};

export default NoUserFound;
