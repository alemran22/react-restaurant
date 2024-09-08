import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="container py-10 flex flex-row justify-between items-center mx-auto border-2 border-red-600">
      <div className="w-full ">
        <p className="p-5 border bg-custom-black border-cream inline text-black">
          Call - 987 654 321
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <img src="/src/assets/images/Logo.svg" alt="" />
      </div>
      <div className="w-full flex flex-row items-center justify-end gap-10 ">
        <div className="text-white ">
          <img
            src="/src/assets/icons/Cart Icon.svg"
            alt=""
            className="cursor-pointer"
          />
        </div>
        <Link
          to={"/reservation"}
          className="bg-cream py-5 px-14 text-xl font-medium  text-dark"
        >
          Reservation
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
