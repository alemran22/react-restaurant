import { Link, NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { navItem } from "../../../constant/home_constant";

const Navbar = () => {
  return (
    <div className="bg-[#292E36] border-y border-slate-500 hidden md:block">
      <div className="flex flex-row justify-between container mx-auto">
        {/* left nav */}
        <div className=" flex flex-row gap-1">
          {navItem.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-white text-xl px-8 py-5 bg-[#E1B168] hover:bg-[#E1B168]"
                  : "text-white text-xl px-8 py-5 hover:bg-[#E1B168]"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        {/* right nav */}
        <div className="flex flex-row items-center gap-5 text-white text-2xl">
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
    </div>
  );
};

export default Navbar;
