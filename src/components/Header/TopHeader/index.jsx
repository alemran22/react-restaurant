import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { navItem } from "../../../constant/home_constant";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const TopHeader = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <div className="bg-[#292E36] ">
      <div className="container mx-auto p-5 md:px-0 md:py-10 flex flex-col md:flex-row justify-between items-center gap-5">
        {/* left & mobile menu */}
        <div className="w-full flex flex-row justify-between items-center">
          <p className="py-3 md:py-5 px-8 md:px-14 border border-[#E1B168] md:inline text-center text-[#DEDEDE]">
            Call - 987 654 321
          </p>
          {/* menu icon */}
          <button
            onClick={() => setHamburgerMenu(!hamburgerMenu)}
            className="md:hidden  "
          >
            <CiMenuFries className="text-4xl text-white font-bold" />
          </button>
          {/* mobile menu item */}
          {hamburgerMenu && (
            <div className="">
              <div className="md:hidden inset-y-0 bg-gray-800 fixed w-9/12 left-0 z-30 flex flex-col justify-between">
                {/* top links */}
                <div className=" flex flex-col gap-1">
                  {navItem.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      className={
                        "text-white text-xl px-8 py-5 hover:bg-[#E1B168] border-b border-[#E1B168] last:border-b-0"
                      }
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
                {/* bottom social links*/}
                <div className="flex flex-row items-center justify-evenly gap-5 text-white text-2xl py-8">
                  <Link to={"#"}>
                    <FaInstagram />
                  </Link>
                  <Link to={"#"}>
                    <FaFacebook />
                  </Link>
                  <Link to={"#"}>
                    <FaTwitter />
                  </Link>
                  <Link to={"#"}>
                    <FaPinterest />
                  </Link>
                </div>
              </div>
              <div
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
                className="md:hidden inset-0 bg-pink-300 fixed right-0 z-20"
              ></div>
            </div>
          )}
        </div>
        {/* mid */}
        <div className="w-full p-5 md:p-0 flex items-center justify-center">
          <img
            src="/src/assets/images/Logo.svg"
            alt=""
            className="w-auto md:w-[350px]"
          />
        </div>
        {/* right */}
        <div className="w-full flex flex-row items-center justify-between md:justify-end md:gap-10 gap-0">
          <div className="text-white ">
            <img
              src="https://i.ibb.co.com/QC25sCK/Cart.png"
              alt=""
              className="cursor-pointer"
            />
          </div>
          <Link
            to={"/reservation"}
            className="bg-[#E1B168] py-3 md:py-5 px-10 md:px-14 text-xl font-medium "
          >
            Reservation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
