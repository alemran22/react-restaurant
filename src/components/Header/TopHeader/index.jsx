import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="bg-[#292E36] ">
      <div className="container mx-auto py-10 flex flex-row justify-between items-center ">
        <div className="w-full ">
          <p className="py-5 px-14 border border-[#E1B168] inline text-[#DEDEDE]">
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
            className="bg-[#E1B168] py-5 px-14 text-xl font-medium "
          >
            Reservation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
