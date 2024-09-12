import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItem = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/" },
    { id: 3, title: "Menu", path: "/" },
    { id: 4, title: "Reservation", path: "/" },
    { id: 5, title: "Gallery", path: "/" },
    { id: 6, title: "Blog", path: "/" },
    { id: 7, title: "Contact", path: "/" },
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
          <Link to={"#"}>instagram</Link>
          <Link to={"#"}>facebook</Link>
          <Link to={"#"}>twitter</Link>
          <Link to={"#"}>pinterest</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
