import { Link, NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Navbar = () => {
  const navItem = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Menu", path: "/menu" },
    { id: 4, title: "Reservation", path: "/reservation" },
    { id: 5, title: "Gallery", path: "/gallery" },
    { id: 6, title: "Blog", path: "/blog" },
    { id: 7, title: "Contact", path: "/contact" },
  ];
  return (
    <div className="bg-[#292E36] border-y border-slate-500">
      <div className="flex flex-row justify-between container mx-auto">
        {/* left nav */}
        <div className=" flex flex-row gap-1">
          {navItem.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={"text-white text-xl px-8 py-5 hover:bg-[#E1B168]"}
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
