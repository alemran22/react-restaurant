import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const OutlineButton = ({ title }) => {
  return (
    <Link to={"/menu"} className="py-3">
      <button className="py-5 px-14 border border-[#E1B168] inline text-[#E1B168] text-2xl">
        {title}
      </button>
    </Link>
  );
};

export default OutlineButton;
