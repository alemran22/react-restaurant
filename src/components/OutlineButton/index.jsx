import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const OutlineButton = ({ title }) => {
  return (
    <Link to={"/menu"} className="py-3">
      <button className="py-2 px-6 md:py-5 md:px-14 border border-[#E1B168] inline text-[#E1B168] text-xl md:text-2xl">
        {title}
      </button>
    </Link>
  );
};

export default OutlineButton;
